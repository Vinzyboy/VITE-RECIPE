import React from "react";



const DashboardCard = ({ item }) => {
  


  return (
    <div className="card bg-secondary p-4 rounded-md border border-line">
      <small>Recipe</small>
      <h2 className="text-3xl mb-2 mt-1">1</h2>
      <ul className="flex gap-5 items-center">
        <li className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-success block"></span>
          0 active
        </li>
        <li className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-gray-400 block"></span>
          0
          inactive
        </li>
      </ul>
    </div>
  );
};

export default DashboardCard;
