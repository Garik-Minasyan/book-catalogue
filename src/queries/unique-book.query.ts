import { queryOptions } from '@tanstack/react-query';
import { API_URL } from '../constants/api';
import { type Book } from '../types/book';

const fetchUniqueBook = async (id: number): Promise<Book> => {
  const response = await fetch(`${API_URL}/books/${id}`);
  if (!response.ok) {
    throw new Error('Book not found');
  }
  return response.json();
};

export const uniqueBookQuery = (id: number) =>
  queryOptions({
    queryKey: ['unique-book', id],
    queryFn: () => fetchUniqueBook(id),
  });
