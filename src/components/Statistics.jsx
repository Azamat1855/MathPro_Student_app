import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { exam: 1, score: 62 },
  { exam: 2, score: 68 },
  { exam: 3, score: 74 },
  { exam: 4, score: 71 },
  { exam: 5, score: 81 },
  { exam: 6, score: 87 },
  { exam: 7, score: 91 },
];

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-2xl border border-white/40 bg-white/80 px-4 py-3 shadow-xl backdrop-blur-xl">
      <p className="text-sm font-medium text-gray-700">
        Mock #{payload[0].payload.exam}
      </p>

      <p className="mt-1 text-lg font-bold text-blue-600">
        {payload[0].value}%
      </p>
    </div>
  );
};

const Statistics = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold text-gray-900">Mock Results</h1>

      <div className="rounded-3xl border border-t-white/50 border-r-white/30 border-b-black/10 border-l-black/10 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur-3xl">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{
              top: 15,
              right: 10,
              left: -5,
              bottom: 5,
            }}
          >
            <CartesianGrid
              stroke="#d8d8d8"
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="exam"
              tick={{ fill: "#666", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              width={35}
              domain={[0, 100]}
              ticks={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
              tickFormatter={(value) => value}
              tick={{ fill: "#666", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              cursor={{
                stroke: "#3b82f6",
                strokeWidth: 1,
                strokeDasharray: "4 4",
              }}
              content={<CustomTooltip />}
            />

            <Line
              type="monotone"
              dataKey="score"
              stroke="#3b82f6"
              strokeWidth={4}
              strokeLinecap="round"
              strokeLinejoin="round"
              dot={{
                r: 5,
                fill: "#3b82f6",
                stroke: "#fff",
                strokeWidth: 2,
              }}
              activeDot={{
                r: 8,
                fill: "#2563eb",
                stroke: "#fff",
                strokeWidth: 3,
              }}
              animationDuration={900}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
