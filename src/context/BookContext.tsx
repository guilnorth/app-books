import React, { createContext } from 'react';

import useBooks from '../hooks/useBooks';

interface BooksContextData {
  paramSearch: string;
  setParamSearch(param: string): void;
  searchBooks(): any;
  favoritesBooks: any;
  addBookFavoriteList(book: Array<any>): void;
  removeBookFavoriteList(book: any): void;
  booksSearchList: Array<any>;
  checkIsBookFavorite(index: any): boolean;
}

const BooksContext = createContext<BooksContextData>({} as BooksContextData);

function BooksProvider({ children }: any) {
  const {
    paramSearch,
    setParamSearch,
    searchBooks,
    favoritesBooks,
    addBookFavoriteList,
    removeBookFavoriteList,
    booksSearchList,
    checkIsBookFavorite,
  } = useBooks();

  return (
    <BooksContext.Provider
      value={{
        paramSearch,
        setParamSearch,
        searchBooks,
        favoritesBooks,
        addBookFavoriteList,
        removeBookFavoriteList,
        booksSearchList,
        checkIsBookFavorite,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}

export { BooksContext, BooksProvider };
