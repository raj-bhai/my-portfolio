import React from "react";

const DesktopContainer = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 dark:from-teal-700 dark:via-blue-700 dark:to-indigo-700 rounded-lg shadow-md p-6 max-w-full w-[500px] h-auto sm:h-[350px] border-8 border-gray-300 rounded-[30px] relative overflow-hidden">
      {/* Desktop Screen Content */}
      <div className="flex flex-col justify-between h-full">{children}</div>
    </div>
  );
};

export default DesktopContainer;
