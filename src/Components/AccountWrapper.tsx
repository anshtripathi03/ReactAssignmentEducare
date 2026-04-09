import { motion } from "framer-motion";

export default function AccountWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">

            <div className="px-6 py-4 border-b border-gray-200 bg-white">
                <h1 className="text-[16px] font-medium text-gray-800">
                    Account Settings
                </h1>
            </div>

            <div className="flex justify-center py-6">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                >
                    {children}
                </motion.div>
            </div>
        </div>
  );
}