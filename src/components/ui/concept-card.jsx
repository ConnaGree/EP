import React from "react";

const ConceptCard = ({ title, description }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-white/20 w-full">
      <h3 className="text-lg font-semibold text-gray-300">{title}</h3>
      <p className="text-sm text-gray-400 my-2">{description}</p>
    </div>
  );
};

export default ConceptCard;
