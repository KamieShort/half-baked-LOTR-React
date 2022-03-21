import React, { useState, useEffect } from 'react';
import { fetchBooks } from '../../services/fetchbooks';

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBooks();

      setBooks(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Books</h2>
      {books.map((book) => (
        <p key={book.title}>{book.title}</p>
      ))}
    </div>
  );
}
