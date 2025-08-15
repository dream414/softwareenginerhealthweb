import React from "react";

export default function RankingBars() {
  const data = [
    { name: "Immune", value: 70 },
    { name: "Heart & Energy", value: 90 },
    { name: "Joints & Bones", value: 50 },
    { name: "Skin", value: 60 },
  ];

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-2">Health Rankings</h1>
      <p className="text-center text-gray-600 mb-6">
        Our top health categories and their performance levels.
      </p>

      {data.map((item, index) => (
        <div key={index} className="mb-5">
          <h2 className="font-semibold mb-1">{item.name}</h2>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-red-500 h-2.5 rounded-full"
              style={{ width: `${item.value}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
