"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "./styles.css";
import Image from "next/image";
import newsAndBlogs from "./constants.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import SectionDetails from "../common/SectionDetails";

interface TagNames {
  id: number;
  name: string;
}

interface Object1 {
  postedTime: string;
  timeDuration: string;
}

interface Options {
  id: number;
  heading: string;
  description: string;
  imageUrl: string;
  alt: string;
  userDetails: Object1;
  tags: Array<TagNames>;
}

interface NewsAndBlogs1 {
  list: Array<Options>;
}

export default function NewsAndBlog() {
  return (
    <div className="flex flex-col ">
      <SectionDetails
        title="News and Blog"
        description="Get the latest Fnews, updates and tips"
      />

      <div className="swiper-controller px-2 md:px-0">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          // navigation={true}
          // mousewheel={true}
          keyboard={{
            enabled: true,
          }}
          modules={[Navigation, Pagination]}
          className="swiper-blog"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {newsAndBlogs?.newsAndBlogs?.map(({ list }: NewsAndBlogs1) => {
            return list?.map((item) => {
              return (
                <SwiperSlide>
                  <div className="flex flex-col p-4 border border-slate-300	rounded-lg">
                    <Image
                      src={item.imageUrl}
                      alt={item.alt}
                      className="blog-image"
                      width={500}
                      height={500}
                    />
                    <div className="flex pt-4 pb-5">
                      {item?.tags?.map((tag) => {
                        return (
                          <span className="rounded-md font-bold py-1 px-2 text-xs bg-zinc-300 text-blue-700 mr-1">
                            {tag.name}
                          </span>
                        );
                      })}
                    </div>
                    <p className="text-xl text-left font-bold">
                      {item.heading}
                    </p>
                    <p className="text-sm text-left pt-2 pb-4">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-end">
                      <div className="flex">
                        <Image
                          src="/images/avatar.png"
                          alt="avatar"
                          width={35}
                          height={35}
                          className="avartar-image"
                        />
                        <div className="flex flex-col justify-end items-start pl-2">
                          <span className="text-sm">Administrator</span>
                          <span className="text-sm">
                            {item?.userDetails?.postedTime}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm">
                        {item?.userDetails?.timeDuration}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            });
          })}
        </Swiper>
        <div className="button-Arrangement">
          <div className="button-swiper">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <a
          className="bg-sky-900 text-white px-6 py-4 rounded"
          href="https://jthemes.com/themes/wp/jobbox/blog/"
        >
          <FontAwesomeIcon icon={faSpinner} />
          <span className="ml-2">Load More Posts</span>
        </a>
      </div>
    </div>
  );
}
