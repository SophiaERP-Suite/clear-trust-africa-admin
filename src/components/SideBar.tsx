import { Home, BarChart3, Settings, LogOut } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const navItems = [
    { icon: <Home size={20} />, label: "Home" },
    { icon: <BarChart3 size={20} />, label: "Analytics" },
    { icon: <Settings size={20} />, label: "Settings" },
  ];

  return (
    <motion.aside
      animate={{ width: isOpen ? 240 : 70 }}
      className="bg-gray-900 text-white min-h-screen flex flex-col border-r border-gray-800 transition-all duration-300"
    >
      {/* Logo / Toggle */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <h1 className={`text-xl font-bold ${!isOpen && "hidden"}`}>AlphaCheck</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white">
          ☰
        </button>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 mt-4 space-y-2">
        {navItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800 cursor-pointer"
          >
            {item.icon}
            {isOpen && <span>{item.label}</span>}
          </div>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-800 flex items-center gap-3 cursor-pointer hover:bg-gray-800">
        <LogOut size={20} />
        {isOpen && <span>Logout</span>}
      </div>
    </motion.aside>
  );
};

export default Sidebar;
