import { ChevronDown, Dot } from "lucide-react";
import React from "react";
import IconNoData from "../partials/IconNoData";

const DashboardAccordion = ({ item, recipeItems }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggleOpen = () => setIsOpen((prev) => !prev);
  const getLevelColor = (level) => {
    if (level === "hard") return "#FF0000"; // Red for hard
    if (level === "normal") return "#0000FF"; // Blue for normal
    if (level === "easy") return "#008000"; // Green for easy
    return "text-gray"; // Default color
  };
  return (
    <div className="accordion mb-3">
      <div
        className="accordion-header p-2 px-5 flex justify-between bg-secondary rounded-t-md cursor-pointer"
        onClick={handleToggleOpen}
      >
        <h5 className="mb-0 ">{item.category_title}</h5>
        <button>
          <ChevronDown
            className={`transition-all ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>
      <div
        className={`accordion-body border border-line rounded-b-md border-t-0 overflow-hidden h-full transition-all ${
          isOpen ? "max-h-[600px]" : "max-h-[0px]"
        }`}
      >
        <ul className="space-y-3 py-4 px-2">
          {recipeItems?.length === 0 && <IconNoData />}
          {recipeItems?.length > 0 &&
            recipeItems.map((recipe, key) => (
              <li className="flex items-center" key={key}>
                <Dot size={30} className={getLevelColor(recipe.level_title)} />
                <span className="ml-2">{recipe.recipe_title}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
export default DashboardAccordion;
