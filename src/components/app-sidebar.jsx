import { Sidebar } from "@/components/ui/sidebar";
import { BookmarkCheck, BookOpenCheck, Book, PenBox } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

export function AppSidebar() {
  return (
    <Sidebar className="bg-orange-50 w-64 min-h-screen shadow-md border-r border-orange-100 p-4">
      {/* Website Title */}
      <div className="flex items-center space-x-2 mb-8 px-2">
        <Book size={28} className="text-orange-500" />
        <h1 className="text-2xl font-bold text-orange-600">BookBazaar</h1>
      </div>

      {/* Nav Menu */}
      <nav className="bg-orange-50">
        <ul className="space-y-4">
          <li>
            <Link
              to="/books"
              className="flex items-center space-x-3 text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors"
            >
              <BookOpenCheck size={22} />
              <span>Books</span>
            </Link>
          </li>
          <li>
            <Link
              to="/wishlist"
              className="flex items-center space-x-3 text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors"
            >
              <BookmarkCheck size={22} />
              <span>Wishlist</span>
            </Link>
          </li>
          <li>
            <Link
              to="/books/create"
              className="flex items-center space-x-3 text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors"
            >
              <PenBox size={22} />
              <span>Add New Book</span>
            </Link>
          </li>
        </ul>
      </nav>
    </Sidebar>
  );
}
