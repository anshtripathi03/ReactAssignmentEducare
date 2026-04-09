import { motion } from "framer-motion";

export default function Skeleton({
  className,
}: {
  className?: string;
}) {
  return (
    <motion.div
      className={`bg-gray-200 rounded-md ${className}`}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}