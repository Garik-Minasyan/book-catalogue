import { useSuspenseQuery } from '@tanstack/react-query';
import { uniqueBookQuery } from '../queries/unique-book.query';

export const useUniqueBook = (id: number) => {
  return useSuspenseQuery(uniqueBookQuery(id));
};
