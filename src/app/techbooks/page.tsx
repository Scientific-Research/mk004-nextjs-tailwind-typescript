'use client';

import { AppContext } from '@/AppContext';
import Image from 'next/image';
import { useContext } from 'react';

export default function PageTechBooks() {
  const { techBooks } = useContext(AppContext);

  return (
    <>
      <p>There are {techBooks.length} tech books: </p>
      {techBooks.map((techBook) => (
        <div key={techBook.id}>
          <Image
            src={`/images/techBooks/${techBook.idCode}.jpg`}
            alt="book"
            width="100"
            height="100"
          />
          <div>
            <p>{techBook.title}</p>
            <p className="italic">{techBook.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}
