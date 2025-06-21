import { Box, Typography } from '@mui/material';
import { BookForm } from '../forms/book.form';

const AddBook = () => {
  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Add a New Book
      </Typography>
      <BookForm />
    </Box>
  );
};

export default AddBook;
