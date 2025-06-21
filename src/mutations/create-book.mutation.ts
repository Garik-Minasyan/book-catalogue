import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API_URL } from '../constants/api';
import { bookListQuery } from '../queries/book-list.query';
import { type CreateBookInput } from '../schemas/book.schema';
import { type Book } from '../types/book';

const createBook = async (data: CreateBookInput): Promise<Book> => {
  const response = await fetch(`${API_URL}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to create book');
  }

  return response.json();
};

export const useCreateBookMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createBook,
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: bookListQuery.queryKey });
    },
  });
};
