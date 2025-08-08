import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Make sure these paths are correct
import cv from "../assets/image.jpeg";
import cv1 from "../assets/images.jpeg";
import cv2 from "../assets/male-indian-hr-recruiter-employer-600nw-1940410366.webp";

export default function CVCarousel() {
  const images = [cv, cv1, cv2];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <div className="rounded-lg overflow-hidden">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="flex justify-center items-center h-60 bg-gray-100">
              <img
                src={img}
                alt={`CV Template ${index + 1}`}
                className="object-contain h-full w-auto rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
