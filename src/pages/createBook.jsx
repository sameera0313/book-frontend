import { CreateBookForm } from "@/components/CreateBookForm";
import { PenBox } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function CreateBookPage() {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate("/books");
  };

  return (
    <div className="min-h-screen bg-orange-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-8">
          <PenBox size={32} className="text-orange-600" />
          <h1 className="text-3xl font-bold text-orange-700">Create New Book</h1>
        </div>

        <p className="text-sm text-orange-500 mb-6">
          Fill in the details below to add a new book to the collection.
        </p>

        {/* Form */}
        <CreateBookForm onSuccess={handleSuccess} />
      </div>
    </div>
  );
}
