import { imgPath } from "@/components/helpers/functions-general";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ArrowRight,
  ChartBarStacked,
  Clock,
  HandPlatter,
  Utensils,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const BannerSlider = ({ result }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <section>
      <Slider {...settings}>
        {result?.data.map((item, key) => (
          <div className="w-full md:h-[calc(100vh-82px)] relative" key={key}>
            <img
              src={`${imgPath}/${item.recipe_image}`}
              alt=""
              className="md:w-full md:h-[105%] object-cover"
            />
            <div className="tint w-full md:h-[105%] h-[100%] bg-black bg-opacity-40 absolute top-0 left-0"></div>
            <div className="absolute md:top-1/2 md:left-[calc((100vw-1200px)/2)] p-4 text-white max-w-[500px] md:-translate-y-1/2 top-0">
              <h3 className="md:text-5xl text-xl">{item.recipe_title}</h3>
              <ul className="flex gap-5 mb-5">
                <li className="flex gap-2 items-center text-xs md:text-base">
                  <Clock />
                  {item.recipe_prep_time}
                </li>
                <li className="flex gap-2 items-center text-xs md:text-base">
                  <Utensils />
                  {item.recipe_serving} Servings
                </li>
                <li className="flex gap-2 items-center text-xs md:text-base">
                  <HandPlatter />
                  {item.recipe_category}
                </li>
              </ul>
              <p className="mb-5 text-xs md:text-base">
                {item.recipe_description}
              </p>
              <Link
                to={`/recipe/single/${item.recipe_title.replaceAll(" ", " ")}`}
                className="flex items-center gap-3 group hover:text-accent transition-all font-bold text-xs md:text-base"
              >
                View Full Recipe
                <ArrowRight className="opacity-0 -translate-x-3 transition-all group-hover:opacity-100 group-hover:translate-x-0 stroke-accent" />
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default BannerSlider;
