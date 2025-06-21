import { Box, Grid, TextField } from '@mui/material';
import { type FC } from 'react';

interface FilterProps {
  onFilterChange: (filters: { title: string; author: string }) => void;
}

export const Filter: FC<FilterProps> = ({ onFilterChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onFilterChange({ [name]: value } as any);
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="title"
            label="Filter by Title"
            variant="outlined"
            fullWidth
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="author"
            label="Filter by Author"
            variant="outlined"
            fullWidth
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
