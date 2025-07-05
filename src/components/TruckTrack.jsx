import React from "react";

const TruckTrack = () => (
  <div className="flex justify-center mb-4">
    <div className="w-full max-w-3xl h-6 bg-yellow-800 rounded-full flex items-center relative">
      <div className="absolute left-1 top-0 w-6 h-6 bg-red-500 rounded-full animate-bounce"></div>
      {[...Array(7)].map((_, i) => (
        <div key={i} className="w-1 h-4 bg-white mx-auto"></div>
      ))}
    </div>
  </div>
);

export default TruckTrack;
