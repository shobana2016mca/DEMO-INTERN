"use client";
import "./styles.css";
import Image from "next/image";
import Slider from "react-slick";
import categories from "./constants.json";
import SectionDetails from "../common/SectionDetails";

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

export default function Categories() {
  const settings = {
    className: "",
    centerMode: true,
    infinite: true,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    nextArrow: (
      <div className="hidden md:visible">
        <Image
          src={"/images/next-arrow.svg"}
          alt="next-arrow"
          width={40}
          height={43}
          className="arrow"
        />
      </div>
    ),
    prevArrow: (
      <Image
        src={"/images/previous-arrow.svg"}
        alt="next-arrow"
        width={40}
        height={43}
        className="arrow"
      />
    ),
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 5,
          dots: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col ">
      <SectionDetails
        title="Browse by category"
        description="Find the job that’s perfect for you. about 800+ new jobs everyday"
      />
      <div>
        <div className="slider-container w-10/12 lg:w-full ">
          <Slider {...settings}>
            {categories?.categories?.map(({ list }: CategoriesList) => {
              return list?.map((item) => {
                return (
                  <div className="mr-2 w-11/12 md:mr-6 mb-6 card-details ">
                    <div className="w-full lg:w-52 flex category-image py-6 px-4 border rounded-lg border-slate-300 ">
                      <>
                        <Image
                          src={item.imageUrl}
                          alt={item.alt}
                          width={42}
                          height={42}
                          className="category-icon"
                        />
                      </>
                      <div className="ml-2">
                        <h4 className="text-sm">{item.name}</h4>
                        <p className="text-xs">{item.availability} </p>
                      </div>
                    </div>
                  </div>
                );
              });
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
