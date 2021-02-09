import { useState } from 'react';

export default function useBooks() {
  const [paramSearch, setParamSearch] = useState('');
  const [favoritesBooks, setFavoritesBooks] = useState([]);

  async function searchBooks() {
    return [];
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
  };
}
