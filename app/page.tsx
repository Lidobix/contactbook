import Image from 'next/image';
import Book from '@/components/Book/Book';

import { BookProvider } from '@/contexts/bookContext';

export default function Home() {
  return (
    <BookProvider>
      <div
        style={{
          display: 'flex',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}
      >
        {/* <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"> */}
        {/* <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start"> */}
        <Book></Book>
        {/* </main> */}
      </div>
    </BookProvider>
  );
}
