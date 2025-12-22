import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 backdrop-blur-sm">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-[3px] border-[rgba(24,103,210,0.15)]"></div>
        <div
          className="absolute inset-0 rounded-full border-[3px] border-transparent animate-spin"
          style={{
            borderTopColor: "#1867D2",
            borderRightColor: "#6BA8E0",
            filter: "drop-shadow(0 0 8px rgba(24, 103, 210, 0.5))",
            animationDuration: "0.8s",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
