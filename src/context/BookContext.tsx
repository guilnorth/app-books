import React, { createContext } from 'react';

import useBooks from '../hooks/useBooks';

interface BooksContextData {
  searchBooks(keepList: boolean): any;
  favoritesBooks: any;
  addBookFavoriteList(book: Array<any>): void;
  removeBookFavoriteList(book: any): void;
  booksSearchList: Array<any>;
  checkIsBookFavorite(index: any): boolean;
  term: string;
  setTerm(book: any): void;
}

const BooksContext = createContext<BooksContextData>({} as BooksContextData);

function BooksProvider({ children }: any) {
  const {
    searchBooks,
    favoritesBooks,
    addBookFavoriteList,
    removeBookFavoriteList,
    booksSearchList,
    checkIsBookFavorite,
    term,
    setTerm,
  } = useBooks();

  return (
    <BooksContext.Provider
      value={{
        searchBooks,
        favoritesBooks,
        addBookFavoriteList,
        removeBookFavoriteList,
        booksSearchList,
        checkIsBookFavorite,
        term,
        setTerm,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}

export { BooksContext, BooksProvider };
