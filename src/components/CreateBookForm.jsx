import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createBook } from "@/lib/axios";

export function CreateBookForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    author: "",
    description: "",
    publishedYear: "",
    genre: "",
    forwardedTo: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const bookData = {
        ...formData,
        genre: formData.genre.split(",").map((g) => g.trim()),
        publishedYear: parseInt(formData.publishedYear)
      };
      await createBook(bookData);
      setFormData({
        title: "",
        image: "",
        author: "",
        description: "",
        publishedYear: "",
        genre: "",
        forwardedTo: ""
      });
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Error creating book:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 bg-white p-6 rounded-lg shadow-lg border border-orange-100"
    >
      <div>
        <label htmlFor="title" className="font-medium text-orange-600 mb-1 block">
          Title
        </label>
        <Input
          name="title"
          placeholder="Book Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="image" className="font-medium text-orange-600 mb-1 block">
          Cover Image URL
        </label>
        <Input
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="author" className="font-medium text-orange-600 mb-1 block">
          Author
        </label>
        <Input
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="font-medium text-orange-600 mb-1 block">
          Description
        </label>
        <Input
          name="description"
          placeholder="Short description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="publishedYear" className="font-medium text-orange-600 mb-1 block">
          Published Year
        </label>
        <Input
          type="number"
          name="publishedYear"
          placeholder="e.g., 2023"
          value={formData.publishedYear}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="genre" className="font-medium text-orange-600 mb-1 block">
          Genre(s)
        </label>
        <Input
          name="genre"
          placeholder="e.g., Fiction, Sci-Fi"
          value={formData.genre}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="forwardedTo" className="font-medium text-orange-600 mb-1 block">
          External Link / Forwarding URL
        </label>
        <Input
          name="forwardedTo"
          placeholder="https://example.com/book"
          value={formData.forwardedTo}
          onChange={handleChange}
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-orange-500 text-white hover:bg-orange-600 transition"
        disabled={isLoading}
      >
        {isLoading ? "Creating..." : "Create Book"}
      </Button>
    </form>
  );
}
