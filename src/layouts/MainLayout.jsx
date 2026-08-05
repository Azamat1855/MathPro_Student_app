import { Outlet } from "react-router-dom";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopNav />

      <main className="px-6 pt-24 pb-24">
        <Outlet />
      </main>

      <BottomNav />
    </div>
  );
};

export default MainLayout;