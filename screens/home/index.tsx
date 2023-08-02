import React, { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';
import csln from './style.module.css';
import { useBookList } from '@/hooks';
import { Page, Pages } from '@/types';
import BookCard from '@/screens/common/card';
import { useInView } from 'react-intersection-observer';
import { bookState } from '@/store/atoms';
import Link from 'next/link';

const Home: React.FC = () => {
  const [bookList, setBookList] = useRecoilState(bookState);
  const { data, status, fetchNextPage, isFetchingNextPage } = useBookList();
  const { ref, inView } = useInView({ threshold: 0.8 });
  const pages = data?.pages as Pages;

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  useEffect(() => {
    setBookList(pages);
  }, [pages]);

  if (status === 'loading') return <div>Loading Book List...</div>;

  return (
    <div className={csln['home-page']}>
      <h1 className={csln.title}>Books</h1>
      <div>
        {pages?.map((page, pageIndex) => {
          return (
            <div key={pageIndex} ref={ref} className={csln['book-list']}>
              {!!page?.data?.length &&
                page.data.map(({ title, coverImage, price, discountRate }: any, index) => {
                  return (
                    <Link href={`/details?pageIndex=${pageIndex}&bookIndex=${index}`}>
                      <BookCard
                        title={title + page.currentPage}
                        coverImage={coverImage}
                        price={price}
                        discountRate={discountRate}
                      />
                    </Link>
                  );
                })}
            </div>
          );
        })}
        {isFetchingNextPage && <div>Fetching Next Page...</div>}
      </div>
    </div>
  );
};

export default Home;
