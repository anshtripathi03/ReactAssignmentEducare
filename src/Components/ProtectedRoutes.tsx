import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useAppSelector((state) => state.auth.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}