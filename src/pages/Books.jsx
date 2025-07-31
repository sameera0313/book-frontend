// src/pages/BooksPage.tsx
import { useEffect, useState } from "react";
import { getAllBooks } from "@/lib/axios";
import { BookCard } from "@/components/BookCard";
import { Link } from "react-router-dom";
import { BookMarkedIcon } from "lucide-react";

export function BooksPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await getAllBooks();
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-orange-50">
        <p className="text-orange-500 text-lg font-medium">Loading books...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8 bg-orange-100 border border-orange-200 p-5 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <BookMarkedIcon className="text-orange-600" size={32} />
            <h1 className="text-3xl font-bold text-orange-700">All Books</h1>
          </div>

          <Link
            to="/books/create"
            className="bg-orange-600 hover:bg-orange-700 transition text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Add New Book
          </Link>
        </div>

        {/* Grid Content */}
        {books.length === 0 ? (
          <div className="text-center py-20 text-orange-500 text-lg">
            No books found. Start by adding some!
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
