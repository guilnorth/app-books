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

  function addBookFavoriteList(book: any) {
    // @ts-ignore
    setFavoritesBooks({ ...favoritesBooks, book });
  }

  function removeBookFavoriteList(index: number) {
    const books = favoritesBooks.splice(index, 1);
    setFavoritesBooks({ ...books });
  }

  return {
    paramSearch,
    setParamSearch,
    searchBooks,
    favoritesBooks,
    addBookFavoriteList,
    removeBookFavoriteList,
    booksSearchList,
  };
}
