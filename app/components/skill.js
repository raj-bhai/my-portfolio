import React from 'react';

export default function Skill({ icon: Icon, name, color }) {
  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md flex items-center">
      <Icon className={`text-3xl ${color} mr-4`} />
      <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">{name}</h3>
    </div>
  );
}