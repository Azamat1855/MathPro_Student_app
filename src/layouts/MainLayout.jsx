import { Outlet } from "react-router-dom";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-neutral-100 pt-24 pb-24">
      <TopNav />

      <Outlet />

      <BottomNav />
    </div>
  );
};

export default MainLayout;