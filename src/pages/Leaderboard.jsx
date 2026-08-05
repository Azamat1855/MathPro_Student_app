import { Flame, Coins, Medal } from "lucide-react";

const streakLeaders = [
  {
    id: 1,
    name: "Azamat",
    streak: 47,
  },
  {
    id: 2,
    name: "John",
    streak: 39,
  },
  {
    id: 3,
    name: "Emma",
    streak: 34,
  },
  {
    id: 4,
    name: "Michael",
    streak: 30,
  },
];

const coinLeaders = [
  {
    id: 1,
    name: "Sophia",
    coins: 1240,
  },
  {
    id: 2,
    name: "Daniel",
    coins: 1130,
  },
  {
    id: 3,
    name: "Alex",
    coins: 970,
  },
  {
    id: 4,
    name: "Liam",
    coins: 920,
  },
];

const medalColor = (index) => {
  if (index === 0) return "text-yellow-500";
  if (index === 1) return "text-gray-400";
  if (index === 2) return "text-amber-700";
  return "text-gray-300";
};

const LeaderboardCard = ({ title, icon, data, valueKey }) => (
  <div className="rounded-3xl border border-t-white/50 border-r-white/30 border-b-black/10 border-l-black/10 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur-3xl">
    <div className="mb-5 flex items-center gap-2">
      {icon}
      <h2 className="text-lg font-semibold">{title}</h2>
    </div>

    {/* Table Header */}
    <div className="mb-2 flex items-center justify-between border-b border-black/10 pb-2 text-sm font-semibold text-gray-500">
      <span>Name</span>
      <span>{valueKey === "streak" ? "Days" : "Coins"}</span>
    </div>

    {/* Table Rows */}
    <div>
      {data.map((student, index) => (
        <div
          key={student.id}
          className={`flex items-center justify-between py-3 ${
            index !== data.length - 1 ? "border-b border-black/5" : ""
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="w-5 text-center font-semibold text-gray-400">
              {index + 1}
            </span>

            <span className="font-medium text-gray-800">{student.name}</span>
          </div>

          <span className="font-bold text-gray-900">{student[valueKey]}</span>
        </div>
      ))}
    </div>
  </div>
);
const Leaderboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-center mt-5">Leaderboard</h1>

      <div className="grid gap-5 grid-cols-2">
        <LeaderboardCard
          title="Longest Streaks"
          icon={<Flame className="text-orange-500" />}
          data={streakLeaders}
          valueKey="streak"
        />

        <LeaderboardCard
          title="Most Coins"
          icon={<Coins className="text-yellow-500" />}
          data={coinLeaders}
          valueKey="coins"
        />
      </div>
    </div>
  );
};

export default Leaderboard;
