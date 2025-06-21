import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { type FC } from 'react';
import { Link } from 'react-router';
import { APP_ROUTES } from '../constants/router';
import { type Book } from '../types/book';

interface BookListItemProps {
  book: Book;
}

export const BookListItem: FC<BookListItemProps> = ({ book }) => {
  const bookLink = APP_ROUTES.BOOK.replace(':id', String(book.id));

  return (
    <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent style={{ flexGrow: 1 }}>
        <Typography variant="h5" component="div">
          {book.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {book.author} ({book.year})
        </Typography>
        <Typography variant="body2">Genre: {book.genre}</Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={bookLink} size="small">
          View
        </Button>
      </CardActions>
    </Card>
  );
};
