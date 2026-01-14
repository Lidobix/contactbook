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
        <Book></Book>
      </div>
    </BookProvider>
  );
}
