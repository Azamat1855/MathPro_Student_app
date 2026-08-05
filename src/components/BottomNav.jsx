import { Trophy, Store, User } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  {
    name: "Home",
    path: "/",
    icon: User,
  },
  {
    name: "Leaderboard",
    path: "/leaderboard",
    icon: Trophy,
  },
  {
    name: "Store",
    path: "/store",
    icon: Store,
  },
];

const BottomNav = () => {
  const { pathname } = useLocation();

  const activeIndex = navItems.findIndex((item) => item.path === pathname);

  return (
    <div className="fixed inset-x-4 bottom-4 z-50">
      <div className="relative flex w-full items-center gap-2 rounded-full border border-t-white/50 border-b-black/10 border-l-black/10 border-r-white/30 bg-gray-200 px-3 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur-3xl">
        {/* Sliding background */}
        <div
          className="absolute top-2 left-3 h-14 w-24 rounded-full bg-white/35 shadow-lg transition-all duration-300 ease-in-out"
          style={{
            width: `calc((100% - 16px) / ${navItems.length})`,
            transform: `translateX(${activeIndex * 100}%)`,
          }}
        />

        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative z-10 flex h-14 flex-1 items-center justify-center rounded-full transition-colors duration-300 ${
                  isActive ? "text-blue-500" : "text-black"
                }`
              }
            >
              {({ isActive }) => (
                <Icon
                  size={24}
                  className={`transition-transform duration-300 ${
                    isActive ? "scale-110" : "hover:scale-105"
                  }`}
                />
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
