import React from 'react';

const IPhoneContainer = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 dark:from-indigo-700 dark:via-purple-700 dark:to-pink-700 rounded-lg shadow-md p-6 w-[280px] h-[498px] border-8 border-gray-300 rounded-[40px] relative overflow-hidden">
      {/* Speaker Section */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-black rounded-b-lg"></div>

      {/* Home Button */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-black rounded-full"></div>

      {/* Content */}
      <div className="flex flex-col justify-between h-full pb-14">
        {children}
      </div>
    </div>
  );
};

export default IPhoneContainer;
