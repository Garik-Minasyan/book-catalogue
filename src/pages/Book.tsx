import { Box, Card, CardContent, Divider, Typography } from '@mui/material';
import { useParams } from 'react-router';
import { useUniqueBook } from '../hooks/use-unique-book';

const Book = () => {
  const { id } = useParams<{ id: string }>();

  const { data: book } = useUniqueBook(Number(id!));

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
      }}
    >
      <Card sx={{ minWidth: 275, maxWidth: 600, width: '100%' }}>
        <CardContent>
          <Typography variant="h3" component="h1" gutterBottom>
            {book.title}
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 1.5 }}>
            by {book.author}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>Published:</strong> {book.year}
          </Typography>
          <Typography variant="body1">
            <strong>Genre:</strong> {book.genre}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Book;
