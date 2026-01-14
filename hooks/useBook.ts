'use client';
import { useContext } from 'react';
import { BookContext } from '@/contexts/bookContext';

export const useBook = () => {
  const context = useContext(BookContext);

  return context;
};
