import { imgPath } from "@/components/helpers/functions-general";
import React from "react";
import { Link } from "react-router-dom";

const LatestRecipe = () => {
  return (
    <section className="bg-dark py-24">
      <div className="container">
        <h2 className="text-white">Latest Recipes</h2>

        <div className="grid grid-container gap-3">
          {Array.from(Array(6).keys()).map((key) => (
            <div
              className={`grid-item relative h-full w-full bg-black group grid-name-${key} overflow-hidden`}
              key={key}
            >
              <img
                src={`${imgPath}/slider-1.avif`}
                alt=""
                className="transition-all group-hover:opacity-70 group-hover:scale-[1.5] group-hover:rotate-[10deg] h-full w-full object-cover"
              />
              <div className="absolute -bottom-24 left-5 text-white opacity-0 group-hover:bottom-5 group-hover:opacity-100 transition-all">
                <ul className="text-sm flex gap-4 items-center">
                  <li>30mins</li>
                  <li>2 servings</li>
                </ul>
                <h4 className="mb-2 font-light">Sinigang na Salmon</h4>
                <Link to="/">View Recipe</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestRecipe;
