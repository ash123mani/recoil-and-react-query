import axios from 'axios';
import { BookListResponse } from '@/types';

export const getBookList = async (pageNum: number = 1): Promise<BookListResponse> => {
  const resp = await axios.get(`http://15.165.74.54:3000/?page=${pageNum}`);

  resp.data.currentPage = pageNum;

  if (resp?.data?.hasNext && pageNum < resp?.data?.totalPage) {
    resp.data.nextPage = pageNum + 1;
  }

  return resp.data;
};
