import React from 'react';
import csln from './style.module.css';
import Image from 'next/image';
import { BookCardProps } from './type';

const BookCard = ({ coverImage, title, discountRate, price }: BookCardProps): JSX.Element => {
  return (
    <div className={csln['book-card']}>
      <Image src={coverImage} width={188} height={188} alt={title} />

      <div className={csln['book-card__details']}>
        <div className={csln['book-card__title']}>{title}</div>
        <div className={csln['book-card__price-details']}>
          <div className={csln['book-card__discount']}>{discountRate}%</div>
          <div className={csln['book-card__price']}>{price}</div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
