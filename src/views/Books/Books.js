import React, { useState, useEffect } from 'react';
import { fetchBooks } from '../../services/fetchbooks';
import './Books.css';

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
    <div className="books">
      <h2>Books</h2>
      {books.map((book) => (
        <p key={book.id}>{book.title}</p>
      ))}
    </div>
  );
}
