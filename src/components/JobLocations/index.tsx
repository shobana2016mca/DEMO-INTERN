"use client";
import "./styles.css";
import Image from "next/image";
import Slider from "react-slick";
import jobLocations from "./constants.json";
import SectionDetails from "../common/SectionDetails";

interface Options {
  id: number;
  location: string;
  companies: string;
  vacancies: string;
  imageUrl: string;
  alt: string;
}

interface JobLocations {
  list: Array<Options>;
}

export default function JobLocations() {
  const getColSpanValue = (id: number) => {
    if (id === 0) {
      return "lg:col-end-1 md:col-span-2";
    } else if (id === 1) {
      return "lg:col-end-2 md:col-span-2";
    } else if (id === 2) {
      return "lg:col-span-2 lg:col-end-4 md:col-span-2";
    } else if (id === 3) {
      return "lg:col-span-2 lg:col-end-2 md:col-span-2";
    } else if (id === 4) {
      return "lg:col-span-1 md:col-span-2";
    } else if (id === 5) {
      return "lg:col-span-1 md:col-span-2";
    }
  };

  return (
    <div className="flex flex-col ">
      <SectionDetails
        title="Jobs by Location"
        description="Find your favourite jobs and get the benefits of yourself"
      />
      <div className="px-4 md:px-0 lg:w-full job-locations flex grid grid-cols-1 gap-4 lg:grid-cols-3 md:gap-6 xl:gap-8 ">
        {jobLocations?.locations?.map(({ list }: JobLocations) => {
          return list?.map((item) => {
            return (
              <div
                key={item.id}
                style={{ border: "1px solid #E0E6F7" }}
                className={`rounded-lg p-3 hover:-translate-y-2 shadow-lg ${getColSpanValue(
                  item.id
                )}`}
              >
                <div className="group relative flex items-end  rounded-lg  md:h-80">
                  <Image
                    src={item.imageUrl}
                    alt={item.alt}
                    width={"100"}
                    height={"100"}
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 "
                  />
                </div>
                <div className="mt-4 mb-2">
                  <h4 className="text-xl font-bold">{item.location}</h4>
                  <div className="flex justify-between">
                    <p className="text-sm">{item.vacancies} </p>
                    <p className="text-sm">{item.companies} </p>
                  </div>
                </div>
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}
