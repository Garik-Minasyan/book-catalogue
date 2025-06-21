import { Stack } from '@mui/material';
import { BookListItemSkeleton } from './book-list-item-skeleton';

export const BookListSkeleton = () => {
  return (
    <Stack spacing={2}>
      {Array.from({ length: 3 }).map((_, index) => (
        <BookListItemSkeleton key={index} />
      ))}
    </Stack>
  );
};
