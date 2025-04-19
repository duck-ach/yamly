import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.img
      src="/assets/yamly-logo.png"
      alt="Logo"
      className="h-24"
      whileHover={{ rotate: [0, -5, 5, -5, 5, 0] }}
      transition={{ duration: 0.6 }}
    />
  );
};

export default Logo;
