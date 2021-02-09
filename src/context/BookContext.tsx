import React, { createContext } from 'react';

import useBooks from '../hooks/useBooks';

interface BooksContextData {
  paramSearch: string;
  setParamSearch(param: string): void;
  searchBooks(): any;
  favoritesBooks: any;
  addBookFavoriteList(book: any): void;
  removeBookFavoriteList(index: number): any;
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
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}

export { BooksContext, BooksProvider };
