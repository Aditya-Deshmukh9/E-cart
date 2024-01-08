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
  const uniqueCategoriesSet = new Set();
  const chartData = [];

  items.forEach((item) => {
    const isFirstOccurrence = !uniqueCategoriesSet.has(item.category);
    if (isFirstOccurrence) {
      uniqueCategoriesSet.add(item.category);
      const priceinr = item.price * 75.5;

      chartData.push({
        Name: item.category,
        Price: priceinr,
      });
    }
  });

  if (loading && error) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center h-screen w-full">
        <h2 className="font-bold text-xl">Real Time Data</h2>
        <div style={{ width: "80%", height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              width={730}
              height={250}
              data={chartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="Name" />
              <YAxis tickFormatter={(value) => `${value.toFixed(0)}`} />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="Price"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

export default About;
