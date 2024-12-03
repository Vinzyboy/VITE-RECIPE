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

const BannerSlider = () => {
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
        {Array.from(Array(6).keys()).map((key) => (
          <div className="w-full md:h-[calc(100vh-82px)] relative" key={key}>
            <img
              src={`${imgPath}/slider-2.webp`}
              alt=""
              className="md:w-full md:h-[105%] object-cover"
            />
            <div className="tint w-full h-[105%] bg-black bg-opacity-40 absolute top-0 left-0"></div>
            <div className="absolute md:top-1/2 md:left-[calc((100vw-1200px)/2)] p-4 text-white max-w-[500px] md:-translate-y-1/2 top-0">
              <h3 className="md:text-5xl text-xl">Salmon Sarap</h3>
              <ul className="flex gap-5 mb-5">
                <li className="flex gap-2 items-center text-xs md:text-base">
                  <Clock />
                  30mins
                </li>
                <li className="flex gap-2 items-center text-xs md:text-base">
                  <Utensils />2 Servings
                </li>
                <li className="flex gap-2 items-center text-xs md:text-base">
                  <HandPlatter />
                  Fish
                </li>
              </ul>
              <p className="mb-5 text-xs md:text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
                placeat fuga nam ducimus eveniet vitae omnis? Vitae suscipit
                deleniti nostrum laborum molestias iusto officiis temporibus?
                Doloribus esse corporis natus impedit?
              </p>
              <Link
                to="/"
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
