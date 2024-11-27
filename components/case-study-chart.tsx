"use client";

import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { week: "2023-11-19", value: 51 },
  { week: "2023-11-26", value: 34 },
  { week: "2023-12-03", value: 32 },
  { week: "2023-12-10", value: 44 },
  { week: "2023-12-17", value: 49 },
  { week: "2023-12-24", value: 70 },
  { week: "2023-12-31", value: 41 },
  { week: "2024-01-07", value: 44 },
  { week: "2024-01-14", value: 38 },
  { week: "2024-01-21", value: 42 },
  { week: "2024-01-28", value: 36 },
  { week: "2024-02-04", value: 31 },
  { week: "2024-02-11", value: 42 },
  { week: "2024-02-18", value: 43 },
  { week: "2024-02-25", value: 39 },
  { week: "2024-03-03", value: 37 },
  { week: "2024-03-10", value: 37 },
  { week: "2024-03-17", value: 30 },
  { week: "2024-03-24", value: 29 },
  { week: "2024-03-31", value: 27 },
  { week: "2024-04-07", value: 33 },
  { week: "2024-04-14", value: 42 },
  { week: "2024-04-21", value: 46 },
  { week: "2024-04-28", value: 46 },
  { week: "2024-05-05", value: 40 },
  { week: "2024-05-12", value: 42 },
  { week: "2024-05-19", value: 51 },
  { week: "2024-05-26", value: 62 },
  { week: "2024-06-02", value: 58 },
  { week: "2024-06-09", value: 53 },
  { week: "2024-06-16", value: 44 },
  { week: "2024-06-23", value: 100 },
  { week: "2024-06-30", value: 63 },
  { week: "2024-07-07", value: 56 },
  { week: "2024-07-14", value: 55 },
  { week: "2024-07-21", value: 51 },
  { week: "2024-07-28", value: 46 },
  { week: "2024-08-04", value: 42 },
  { week: "2024-08-11", value: 45 },
  { week: "2024-08-18", value: 41 },
  { week: "2024-08-25", value: 44 },
  { week: "2024-09-01", value: 42 },
  { week: "2024-09-08", value: 43 },
  { week: "2024-09-15", value: 42 },
  { week: "2024-09-22", value: 42 },
  { week: "2024-09-29", value: 49 },
  { week: "2024-10-06", value: 41 },
  { week: "2024-10-13", value: 47 },
  { week: "2024-10-20", value: 47 },
  { week: "2024-10-27", value: 52 },
  { week: "2024-11-03", value: 53 },
  { week: "2024-11-10", value: 60 },
  { week: "2024-11-17", value: 63 },
  { week: "2024-11-24", value: 68 },
];

export function CaseStudyChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart data={data}>
          <XAxis
            dataKey="week"
            tick={{ fontSize: 12 }}
            interval={12}
            tickFormatter={(value) =>
              new Date(value).toLocaleDateString("pt-BR", { month: "short" })
            }
          />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip
            itemStyle={{ color: "black" }}
            labelFormatter={(value) =>
              new Date(value).toLocaleDateString("pt-BR")
            }
            formatter={(value) => [`${value}`, "Interesse"]}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={false}
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
}
