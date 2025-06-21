import { Stack } from '@mui/material';
import { useBookList } from '../hooks/use-book-list';
import { BookListItem } from './book-list-item';

interface BookListProps {
  filters: {
    title: string;
    author: string;
  };
}

export const BookList: React.FC<BookListProps> = ({ filters }) => {
  const { data: books } = useBookList();

  const filteredBooks = books.filter((book) => {
    const titleMatch = book.title.toLowerCase().includes(filters.title.toLowerCase());
    const authorMatch = book.author.toLowerCase().includes(filters.author.toLowerCase());
    return titleMatch && authorMatch;
  });

  return (
    <Stack spacing={2}>
      {filteredBooks.map((book) => (
        <BookListItem book={book} key={book.id} />
      ))}
    </Stack>
  );
};
