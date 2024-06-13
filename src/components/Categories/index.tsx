"use client";
import "./styles.css";
import Image from "next/image";
import Slider from "react-slick";
import categories from "./constants.json";

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
    className: "center",
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    nextArrow: (
      <Image
        src={"/images/next-arrow.svg"}
        alt="next-arrow"
        width={40}
        height={43}
      />
    ),
    prevArrow: (
      <Image
        src={"/images/previous-arrow.svg"}
        alt="next-arrow"
        width={40}
        height={43}
      />
    ),
  };

  return (
    <div className="flex flex-col ">
      <div className="text-center text-3xl">Browse by category</div>
      <p className="text-center text-xl">
        Find the job that’s perfect for you. about 800+ new jobs everyday
      </p>
      <div>
        <div className="slider-container">
          <Slider {...settings}>
            {categories?.categories?.map(({ list }: CategoriesList) => {
              return list?.map((item) => {
                return (
                  <div>
                    <div>
                      <Image
                        src={item.imageUrl}
                        alt={item.alt}
                        width={42}
                        height={42}
                      />
                    </div>
                    <div className="">
                      <h4>{item.name}</h4>
                      <p className="font-xs mb-0">{item.availability} </p>
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
