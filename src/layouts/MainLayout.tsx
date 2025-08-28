import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-272px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;