import React from "react";

const CSkeleton = () => {
  return (
    <main>
      <div className="animate-animate-bounce">
        <div className="h-3 bg-gray-200 mt-3 mb-6 rounded"></div>
        <div className="h-3 bg-gray-300 mb-6 rounded"></div>
        <div className="h-3 bg-gray-200 mb-6 rounded"></div>
        <div className="h-3 bg-gray-300 mb-6 rounded"></div>
        <div className="h-3 bg-gray-200 mb-6 rounded"></div>
      </div>
    </main>
  );
};

export default CSkeleton;
