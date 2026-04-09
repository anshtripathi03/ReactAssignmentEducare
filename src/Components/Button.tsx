import { motion } from "framer-motion";

type Props = {
  text: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

export default function Button({
  text,
  loading,
  disabled,
  onClick,
  variant = "primary",
}: Props) {
  const base = "w-full py-3 rounded-lg font-semibold transition-all duration-200";

  const styles =
  disabled || loading
    ? "bg-gray-300 text-white cursor-not-allowed"
    : variant === "primary"
    ? "text-white bg-gradient-to-r from-primary to-primaryDark shadow-md"
    : "bg-primaryLight text-textDark";
    
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.01 }}
      disabled={disabled || loading}
      className={`${base} ${
        disabled || loading ? "bg-gray-300 text-white cursor-not-allowed" : styles
      }`}
    >
      {loading ? "Please wait..." : text}
    </motion.button>
  );
}