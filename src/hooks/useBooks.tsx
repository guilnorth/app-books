import { useEffect, useState } from 'react';
import BooksService from '../services/Books';
import { STORAGE_KEY } from '../constants/constants';

export default function useBooks() {
  const [favoritesBooks, setFavoritesBooks] = useState([]);
  const [booksSearchList, setBooksSearchList] = useState([]);
  const [term, setTerm] = useState('');

  /**
   * Recuperando os favoritos
   */
  useEffect(() => {
    let isSubscribed = true;
    BooksService.getStorage(`${STORAGE_KEY}/favorites`).then((favorites) => {
      if (favorites) setFavoritesBooks(favorites);
    });
    return () => (isSubscribed = false);
  }, []);

  /**
   *
   * @param keepList
   */
  function searchBooks(keepList = false): any {
    /** Block request if don't have param or if is the end of list * */
    if (
      !term ||
      (keepList &&
        booksSearchList.items &&
        +booksSearchList?.totalItems === +booksSearchList?.items.length)
    )
      return;

    const newStartIndex = keepList ? booksSearchList.items.length : 0;

    BooksService.getBooks(term, newStartIndex)
      .then((response: any) => {
        const dataList = keepList
          ? {
              kind: response.data.kind,
              totalItems: response.data.totalItems,
              items: [...booksSearchList.items, ...response.data.items],
            }
          : response.data;
        setBooksSearchList(dataList);
      })
      .catch(() => null);
  }

  /**
   *
   * @param newFavoriteBook
   */
  function addBookFavoriteList(newFavoriteBook: Array<any>): void {
    if (!checkIsBookFavorite(newFavoriteBook.id)) {
      // @ts-ignore
      const newFavoriteList = [
        { ...newFavoriteBook, isFavoriteBook_APP: true },
        ...favoritesBooks,
      ];
      setFavoritesBooks(newFavoriteList);
      BooksService.saveStorage(`${STORAGE_KEY}/favorites`, newFavoriteList);
    }
  }

  /**
   *
   * @param idBookCheck
   */
  function checkIsBookFavorite(idBookCheck: any): boolean {
    const index = favoritesBooks.findIndex((book) => book.id === idBookCheck);
    return index !== -1;
  }

  /**
   *
   * @param bookRemove
   */
  function removeBookFavoriteList(bookRemove: Array<any>) {
    const index = favoritesBooks.findIndex((book) => book.id === bookRemove.id);
    const newFavoriteList = [...favoritesBooks];
    newFavoriteList.splice(index, 1);

    setFavoritesBooks(newFavoriteList);

    BooksService.saveStorage(`${STORAGE_KEY}/favorites`, newFavoriteList);
  }

  return {
    searchBooks,
    favoritesBooks,
    addBookFavoriteList,
    removeBookFavoriteList,
    booksSearchList,
    checkIsBookFavorite,
    term,
    setTerm,
  };
}
