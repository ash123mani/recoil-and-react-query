import { atom, selector, useRecoilState } from 'recoil';
import { bookState } from './atoms';

export const bookList = selector({
  key: 'bbokList',
  get: ({ get }) => {
    const books = get(bookState);
    console.log('atom books', books);
    return books;
  },
});
