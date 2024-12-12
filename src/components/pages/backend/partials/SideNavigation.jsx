import { imgPath } from "@/components/helpers/functions-general";
import {
  AlignJustify,
  CircleFadingArrowUp,
  Clapperboard,
  LayoutDashboard,
  Megaphone,
  UtensilsCrossed,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const SideNavigation = ({ menu }) => {
  const links = [
    {
      title: "Recipe",
      slug: "/admin/recipe",
      icon: <UtensilsCrossed size={17} />,
    },
    {
      title: "Category",
      slug: "/admin/category",
      icon: <AlignJustify size={17} />,
    },
    {
      title: "Level",
      slug: "/admin/level",
      icon: <CircleFadingArrowUp size={17} />,
    },
  ];
  return (
    <>
      <aside className="p-4 border-r border-line">
        <img src={`${imgPath}/recipe-logo.png`} alt="" className="size-30 object-cover "/>
        <nav>
          <ul className="mt-5">
            {links.map((item, key) => (
              <li
                className={`${
                  menu === item.slug.replaceAll("/admin/", "")
                    ? "border-accent bg-accent bg-opacity-100 text-white"
                    : ""
                } p-2 mb-2 rounded-md border border-transparent opacity-60 hover:opacity-100`}
                key={key}
              >
                <NavLink
                  to={`${item.slug}`}
                  className="flex gap-2 items-center text-base"
                >
                  {item.icon}
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default SideNavigation;
