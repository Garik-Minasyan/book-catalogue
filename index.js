import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3001;
const DB_PATH = join(__dirname, 'public', 'books.json');

app.use(cors());
app.use(bodyParser.json());

// Helper function to read the database
const readDB = () => {
  const data = readFileSync(DB_PATH, 'utf8');
  return JSON.parse(data);
};

// Helper function to write to the database
const writeDB = (data) => {
  writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf8');
};

// GET all books
app.get('/api/books', (req, res) => {
  try {
    const books = readDB();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error reading from database', error });
  }
});

// GET a single book by ID
app.get('/api/books/:id', (req, res) => {
  try {
    const books = readDB();
    const book = books.find((b) => b.id === parseInt(req.params.id, 10));
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error reading from database', error });
  }
});

// POST a new book
app.post('/api/books', (req, res) => {
  try {
    const books = readDB();
    const newBook = {
      id: Date.now(), // Simple ID generation
      ...req.body,
    };
    books.push(newBook);
    writeDB(books);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Error writing to database', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
