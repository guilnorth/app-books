import Api from './Api';

export default class BooksService {
  static getBooks(text: string): any {
    const search = encodeURI(text);
    return Api.get(`volumes`, {
      params: {
        q: search,
      },
    });
  }
}
