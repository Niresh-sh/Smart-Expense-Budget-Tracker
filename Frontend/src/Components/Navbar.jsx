import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full h-12 bg-gray-100 border-b border-gray-200 px-4 py-2 flex items-center">
      {/* Left icon */}
      <div className="mr-3 text-gray-500">
        <Menu size={20} />
      </div>

      {/* Title */}
      <h1 className="text-gray-700 text-sm font-medium">
        ExpenseTracker
      </h1>
    </nav>
  );
}