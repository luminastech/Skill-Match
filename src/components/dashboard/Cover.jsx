import React from "react";

const Cover = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full border-t border-slate-700 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md px-6 py-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200">
          Feature Coming Soon
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
          We're currently working on an exciting new feature that will be
          released soon. Stay tuned for updates!
        </p>
      </div>
    </div>
  );
};

export default Cover;
