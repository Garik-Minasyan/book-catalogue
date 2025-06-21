import { Suspense, useState } from 'react';
import { BookList } from '../components/book-list';
import { BookListSkeleton } from '../components/book-list-skeleton';
import { Filter } from '../components/filter';

const Home = () => {
  const [filters, setFilters] = useState({ title: '', author: '' });

  const handleFilterChange = (newFilters: { title?: string; author?: string }) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  return (
    <div>
      <Filter onFilterChange={handleFilterChange} />
      <Suspense fallback={<BookListSkeleton />}>
        <BookList filters={filters} />
      </Suspense>
    </div>
  );
};

export default Home;
