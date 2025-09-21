'use client';

import { AppContext } from '@/AppContext';
import Image from 'next/image';
import { useContext } from 'react';

export default function PageTechBooks() {
  const { techBooks } = useContext(AppContext);

  return (
    <>
      <p className="techbook-p">
        There are <span>{techBooks.length}</span> tech books:{' '}
      </p>
      {techBooks.map((techBook) => (
        <div key={techBook.id} className="techbooks">
          <Image
            src={`/images/techBooks/${techBook.idCode}.jpg`}
            alt="book"
            width="100"
            height="100"
          />

          <div className="title-description">
            <p className="title">{techBook.title}</p>
            <p className="description">{techBook.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}
