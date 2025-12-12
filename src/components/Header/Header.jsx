import { useState } from "react";
import { Search, Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="backdrop-blur-xl bg-white/30 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl tracking-wide">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700"></div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            MindGrowth
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="/" className="hover:text-blue-600 transition">Home</a>
          <a href="/blog" className="hover:text-blue-600 transition">Blog</a>
          <a href="/categories" className="hover:text-blue-600 transition">Categories</a>
          <a href="/about" className="hover:text-blue-600 transition">About</a>
          <a href="/contact" className="hover:text-blue-600 transition">Contact</a>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-white/70 shadow-md backdrop-blur-lg px-4 py-2 rounded-full border border-gray-200">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search articles..."
            className="ml-2 bg-transparent outline-none text-sm w-40"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4">
          <div className="flex flex-col gap-3 bg-white/60 backdrop-blur-xl p-4 rounded-xl shadow-md">
            <a href="/" className="text-gray-700 font-medium">Home</a>
            <a href="/blog" className="text-gray-700 font-medium">Blog</a>
            <a href="/categories" className="text-gray-700 font-medium">Categories</a>
            <a href="/about" className="text-gray-700 font-medium">About</a>
            <a href="/contact" className="text-gray-700 font-medium">Contact</a>

            {/* Mobile Search */}
            <div className="flex items-center bg-white/70 px-3 py-2 rounded-full border border-gray-200 mt-2">
              <Search className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="ml-2 bg-transparent outline-none text-sm w-full"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
