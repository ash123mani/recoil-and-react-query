import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { getBookList } from '@/apis';
import type { UseInfiniteQueryResult } from '@tanstack/react-query';

export const useBookList = (pageNum: number = 1) => {
  return useInfiniteQuery({
    queryKey: ['bookList'],
    queryFn: async ({ pageParam = 1 }) => {
      return await getBookList(pageParam);
    },
    getNextPageParam: (lastPage) => {
      return lastPage.nextPage ?? undefined;
    },
  });
};
