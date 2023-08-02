import { atom, useRecoilState } from 'recoil';
import { Page } from '@/types';

export const bookState = atom<Page[]>({
  key: 'BookList',
  default: [],
});
