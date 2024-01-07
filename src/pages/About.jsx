import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useProductContext } from "../context/ProductContext";
import Loading from "../components/Loading";

function About() {
  const { items, loading, error } = useProductContext();
  const uniqueCategories = new Set();

  const chartData = items
    .filter((item) => {
      if (!uniqueCategories.has(item.category)) {
        uniqueCategories.add(item.category);
        return true;
      }
      return false;
    })
    .map((item) => ({
      name: item.category,
      uv: item.price,
    }));

  if (loading && error) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen w-full">
      <h2 className="font-bold text-xl">Time Real Data</h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#1351EF"
              fill="#1351EF"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default About;
