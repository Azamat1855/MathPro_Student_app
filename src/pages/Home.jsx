import { Flame, Coins } from "lucide-react";

const Home = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900">
        Your stats:
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3">
        {/* Streak */}
        <div className="rounded-3xl border border-t-white/50 border-r-white/30 border-b-black/10 border-l-black/10 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur-3xl">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm text-gray-500">
              Streak
            </span>

            <Flame className="text-orange-500" size={28} />
          </div>

          <h2 className="text-4xl font-bold text-gray-900">
            7
          </h2>
        </div>

        {/* Coins */}
        <div className="rounded-3xl border border-t-white/50 border-r-white/30 border-b-black/10 border-l-black/10 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur-3xl">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm text-gray-500">
              Coins
            </span>

            <Coins className="text-yellow-500" size={28} />
          </div>

          <h2 className="text-4xl font-bold text-gray-900">
            120
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;