import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";

export const AdminLayout = () => {
  const { user, loading } = useSelector((state) => state.auth);

  if (loading) return <LoadingScreen />;
  if (!user) return <Navigate to="/login" replace />;
  // The API enforces admin-only access too; this just avoids showing a broken page
  if (user.user?.role !== "admin") return <Navigate to="/" replace />;

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
