import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Welcome from "./Pages/Welcome";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Account from "./Pages/Account";
import ProtectedRoute from "./Components/ProtectedRoutes";
import PageWrapper from "./Components/PageWrapper";

function AnimatedRoutes() {
  const location = useLocation(); 

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Welcome /></PageWrapper>} />
        <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
        <Route path="/register" element={<PageWrapper><Register /></PageWrapper>} />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <PageWrapper><Account /></PageWrapper>
            </ProtectedRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="w-[375px] h-[812px] bg-white shadow-sm border overflow-hidden">
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </div>
    </div>
  );
}