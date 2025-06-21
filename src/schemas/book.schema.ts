import { z } from 'zod';

export const createBookInputSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  author: z.string().min(1, 'Author is required'),
  year: z.number().int().min(1000, 'Invalid year').max(new Date().getFullYear()),
  genre: z.string().min(1, 'Genre is required'),
});

export type CreateBookInput = z.infer<typeof createBookInputSchema>;
