import type { MutableSnapshot } from 'recoil';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

export interface Book {
  coverImage: string;
  title: string;
  discountRate: number;
  price: number;
}

export interface BookListResponse {
  hasNext: boolean;
  data: Book[];
  totalPage: number;
  nextPage?: number;
  currentPage: number;
}

export interface Page {
  totalPage?: number;
  nextPage?: number;
  currentPage?: number;
  hasNext?: boolean;
  data?: Book[];
}

export type Pages = Page[];

export interface RefInterface {
  [key: string]: Element;
}

export type GetInitialRecoilState<P = {}> = (pageProps: P, mutableSnapshot: MutableSnapshot) => void;

export type NextPageWithRecoil<P = {}, IP = P> = NextPage<P, IP> & {
  getInitialRecoilState?: GetInitialRecoilState<P>;
};

export type AppPropsWithRecoil<P = {}> = AppProps<P> & {
  Component: NextPageWithRecoil<P>;
};
