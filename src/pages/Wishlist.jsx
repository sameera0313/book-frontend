import { useEffect, useState } from "react";
import { getWishlist } from "@/lib/axios";
import { BookCard } from "@/components/BookCard";
import { BookmarkCheck } from "lucide-react";

export function WishlistPage() {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        setLoading(true);
        const response = await getWishlist();
        setWishlist(response.data.books);
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-orange-50">
        <div className="text-orange-500 text-xl font-semibold">Loading Wishlist...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-50 py-10 px-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8 p-6 bg-orange-100 rounded-md shadow-lg flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <BookmarkCheck size={36} className="text-orange-600" />
          <h1 className="text-3xl font-bold text-orange-700">My Wishlist</h1>
        </div>
        <p className="text-sm text-orange-600 italic">Books you've saved for later</p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto">
        {wishlist.length === 0 ? (
          <div className="text-center py-32 rounded-md bg-white border border-orange-200 shadow-inner">
            <p className="text-lg text-orange-500 font-medium">Your wishlist is empty.</p>
            <p className="text-sm text-orange-400 mt-2">Start exploring and add books to your wishlist!</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlist.map((book) => (
              <BookCard key={book._id} book={book} inWishlist={true} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
