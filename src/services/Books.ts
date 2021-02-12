import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from './Api';
import { MAX_RESULT } from '../constants/constants';

export default class BooksService {
  /**
   *
   * @param text
   * @param startIndex
   * @param maxResults
   */
  static getBooks(text: string, startIndex = 0, maxResults = MAX_RESULT): any {
    const search = encodeURI(text);
    return Api.get(`volumes`, {
      params: {
        q: search,
        startIndex,
        maxResults,
      },
    });
  }

  /**
   *
   * @param key
   * @param value
   */
  static async saveStorage(key: string, value: string | Array<any>) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      return false;
    }
  }

  /**
   *
   * @param key
   */
  static async getStorage(key: string) {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      return null;
    }
  }
}
