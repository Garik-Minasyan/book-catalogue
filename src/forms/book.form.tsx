import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, CircularProgress, Stack, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { type Dayjs } from 'dayjs';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { z } from 'zod';
import { APP_ROUTES } from '../constants/router';
import { useCreateBookMutation } from '../mutations/create-book.mutation';
import { createBookInputSchema, type CreateBookInput } from '../schemas/book.schema';

const bookFormSchema = createBookInputSchema.extend({
  year: z.custom<Dayjs | null>((val) => val !== null, 'Year is required'),
});

type BookFormInput = z.infer<typeof bookFormSchema>;

export const BookForm = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<BookFormInput>({
    resolver: zodResolver(bookFormSchema),
  });

  const { mutateAsync, isPending } = useCreateBookMutation();

  const onSubmit: SubmitHandler<BookFormInput> = async (data) => {
    const payload: CreateBookInput = {
      ...data,
      year: data.year!.year(),
    };
    await mutateAsync(payload, {
      onSuccess: () => {
        toast.success('Book successfully added!');
        navigate(APP_ROUTES.HOME);
      },
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={2}>
          <Controller
            name="title"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Title"
                error={!!fieldState?.error}
                helperText={fieldState?.error?.message}
                required
              />
            )}
          />
          <Controller
            name="author"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Author"
                error={!!fieldState.error}
                helperText={fieldState?.error?.message}
                required
              />
            )}
          />
          <Controller
            name="year"
            control={control}
            render={({ field, fieldState }) => (
              <DatePicker
                label="Year"
                views={['year']}
                onChange={field.onChange}
                value={field.value}
                slotProps={{
                  textField: {
                    error: !!fieldState?.error,
                    helperText: fieldState?.error?.message,
                    required: true,
                  },
                }}
              />
            )}
          />
          <Controller
            name="genre"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Genre"
                error={!!fieldState?.error}
                helperText={fieldState?.error?.message}
                required
              />
            )}
          />
          <Button type="submit" variant="contained" disabled={isPending}>
            {isPending ? <CircularProgress size={24} /> : 'Add Book'}
          </Button>
        </Stack>
      </Box>
    </LocalizationProvider>
  );
};
