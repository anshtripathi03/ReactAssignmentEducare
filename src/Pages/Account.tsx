import { motion } from "framer-motion";
import { useAppSelector } from "../hooks/useAppSelector";
import Skeleton from "../Components/Skeleton";

export default function Account() {
    const { user, loading } = useAppSelector((s) => s.auth);

    if (loading) {
        return (
            <div className="p-6">
                <Skeleton className="h-5 w-40 mb-6" />
                <div className="flex items-center gap-4 mb-4">
                    <Skeleton className="w-16 h-16 rounded-full" />
                    <div className="flex-1">
                        <Skeleton className="h-4 w-32 mb-2" />
                        <Skeleton className="h-3 w-40" />
                    </div>
                </div>
                <Skeleton className="h-3 w-full mb-2" />
                <Skeleton className="h-3 w-5/6 mb-2" />
                <Skeleton className="h-3 w-4/6" />
            </div>
        );
    }

    return (
        <div className="p-6 max-w-sm mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 mb-4"
            >
                <div className="relative w-16 h-16">
                    <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        className="w-16 h-16 rounded-full object-cover"
                    />

                    {/* Purple Icon */}
                    <div className="absolute bottom-0 right-0 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center shadow-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3 h-3 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 7h4l2-2h6l2 2h4v12H3V7z"
                            />
                            <circle cx="12" cy="13" r="3" />
                        </svg>
                    </div>
                </div>
                <div>
                    <h2 className="text-[15px] font-medium text-gray-900 leading-tight">
                        {user?.name || "Marry Doe"}
                    </h2>
                    <p className="text-[13px] text-black">
                        {user?.email || "marry@gmail.com"}
                    </p>
                </div>
            </motion.div>
            <p className="text-[13px] text-black leading-[18px] border-b border-gray-200 pb-4">
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
                Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>
        </div>
    );
}