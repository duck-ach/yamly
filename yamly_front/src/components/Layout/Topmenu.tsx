import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../Logo/Logo";

const TopMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="w-full h-16 bg-white flex items-center justify-between px-6 shadow">
      {/* 로고 */}
      <Logo />

      {/* 사용자 프로필 */}
      <div className="relative">
        <img
          src="/assets/test-user-img.jpg"
          alt="User Profile"
          className="h-10 w-10 rounded-full cursor-pointer"
          onClick={handleToggle}
        />

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg py-2 z-10"
            >
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                My Page
              </button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                Setting
              </button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500">
                Logout
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default TopMenu;
