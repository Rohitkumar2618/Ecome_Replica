import React from "react";

const WarningCard = () => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md shadow-lg z-10">
      <strong className="font-bold flex">Warning!</strong>
      <span className="block sm:inline">
        You cannot edit this product. It was fetched from the API.
      </span>
    </div>
  );
};

export default WarningCard;
