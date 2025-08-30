import { Zap } from "lucide-react";
import React from "react";

const MyServiceButton = () => {
  return (
    <div className="fixed top-25 right-5 z-30 flex items-center justify-center animate-fade-in duration-500  animate-pulse">
      <a
        href=""
        title="Rahul Service"
        className="p-2 border-2 border-teal-400 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-110 "
      >
        <Zap className="text-teal-400" />
      </a>
    </div>
  );
};

export default MyServiceButton;
