import { useState } from 'react';
import BooksService from '../services/Books';

export default function useBooks() {
  const [paramSearch, setParamSearch] = useState('');
  const [favoritesBooks, setFavoritesBooks] = useState([]);
  const [booksSearchList, setBooksSearchList] = useState([]);

  async function searchBooks() {
    const results = BooksService.getBooks(paramSearch)
      .then((response: any) => {
        setBooksSearchList(response.data);
      })
      .catch(() => null);
  }

  function addBookFavoriteList(newFavoriteBook: Array<any>) {
    if (!checkIsBookFavorite(newFavoriteBook.id)) {
      // @ts-ignore
      setFavoritesBooks([
        { ...newFavoriteBook, isFavoriteBook_APP: true },
        ...favoritesBooks,
      ]);
    }
  }

  function checkIsBookFavorite(idBookCheck: any): boolean {
    const index = favoritesBooks.findIndex((book) => book.id === idBookCheck);
    return index !== -1;
  }

  function removeBookFavoriteList(bookRemove: Array<any>) {
    const index = favoritesBooks.findIndex((book) => book.id === bookRemove.id);
    const aux = [...favoritesBooks];
    aux.splice(index, 1);
    setFavoritesBooks(aux);
  }

  return {
    paramSearch,
    setParamSearch,
    searchBooks,
    favoritesBooks,
    addBookFavoriteList,
    removeBookFavoriteList,
    booksSearchList,
    checkIsBookFavorite,
  };
}
