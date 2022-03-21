import React, { useState, useEffect } from 'react';
import { fetchBooks } from '../../services/fetchbooks';

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBooks();
      console.log(data);
      setBooks(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Books</h2>
      {books.map((book) => (
        <p key={book.id}>{book.title}</p>
      ))}
    </div>
  );
}
