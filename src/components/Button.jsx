import React from 'react';

export default function Button({ children, className, onClick }) {
  return (
    <button
      className={`px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
