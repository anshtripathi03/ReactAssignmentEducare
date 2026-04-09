import { motion } from "framer-motion";
import { useAppSelector } from "../hooks/useAppSelector";
import Skeleton from "../Components/Skeleton";

export default function Account() {
    const { user, loading } = useAppSelector((s) => s.auth);

    if(loading){
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
        <div className="p-6">
            <p className="text-[14px] text-textLight leading-[20px]">Account Settings</p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 mb-4"
            >
                <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    className="w-16 h-16 rounded-full"
                />
                <div>
                    <h2 className="font-semibold">{user?.name}</h2>
                    <p className="text-gray-500 text-sm">{user?.email}</p>
                </div>
            </motion.div>

            <p className="text-gray-600 text-sm border-b pb-4">
                Lorem Ipsum Dolor Sit Amet...
            </p>
        </div>
    );
}