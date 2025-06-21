import { API_URL } from '../constants/api';
import { type Book } from '../types/book';

const fetchBookList = async (): Promise<Book[]> => {
  const response = await fetch(`${API_URL}/books`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const bookListQuery = {
  queryKey: ['book-list'],
  queryFn: fetchBookList,
};
