import { useSuspenseQuery } from '@tanstack/react-query';
import { bookListQuery } from '../queries/book-list.query';

export const useBookList = () => {
  return useSuspenseQuery(bookListQuery);
};
