import { Card, CardContent, Skeleton } from '@mui/material';

export const BookListItemSkeleton = () => {
  return (
    <Card style={{ height: '100%' }}>
      <CardContent>
        <Skeleton variant="text" width="60%" height={40} />
        <Skeleton variant="text" width="80%" height={20} />
        <Skeleton variant="text" width="40%" height={20} />
      </CardContent>
    </Card>
  );
};
