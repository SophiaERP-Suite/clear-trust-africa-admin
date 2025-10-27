import { Bell, Search, UserCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center gap-3 w-full max-w-md">
        <Search size={20} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full border-none outline-none bg-transparent text-gray-700"
        />
      </div>

      <div className="flex items-center gap-6">
        <Bell className="text-gray-500 cursor-pointer" />
        <div className="flex items-center gap-2 cursor-pointer">
          <UserCircle size={28} className="text-gray-600" />
          <span className="hidden md:block text-gray-700 font-medium">
            John Doe
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
