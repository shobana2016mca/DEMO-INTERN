"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "./styles.css";
import Image from "next/image";

interface Options {
  id: number;
  name: string;
  availability: string;
  imageUrl: string;
  alt: string;
}

interface CategoriesList {
  list: Array<Options>;
}

export default function LandingPage() {
  return (
    <div className="flex ">
      <div className="w-2/4">
        <div className="text-3xl">
          The Easiest Way <br /> to Get Your New Job
        </div>
        <p className="text-xl">
          Each month, more than 3 million job seekers turn to website in their
          search for work, making over 140,000 applications every single day
        </p>
        <div>
        Popular Searches: Content Writer , Finance , Human Resource , Management

        </div>
      </div>
      <div className="w-2/4">
        <Image
          src={"/images/hero-image.webp"}
          alt="hero image"
          width={"500"}
          height={"500"}
        />
      </div>
    </div>
  );
}
