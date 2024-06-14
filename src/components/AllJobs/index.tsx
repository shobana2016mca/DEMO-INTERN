"use client";
import "./styles.css";
import Image from "next/image";
import categories from "./constants.json";
import allJobsData from "./all-jobs.json";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faClock } from "@fortawesome/free-solid-svg-icons";
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

export default function AllJobs() {
  const [activeTab, setActiveTab] = useState(1);

  const jobsList = allJobsData?.allJobs[0]?.list[activeTab - 1];

  const getJobDetails = () => {
    return (
      <div className="px-4 md:px-0 mt-6 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {jobsList?.jobs?.map((job) => {
          return (
            <div
              style={{ border: "1px solid #E0E6F7" }}
              className="rounded-lg p-5 bg-slate-50 hover:bg-white transition transform hover:-translate-y-1"
            >
              <h6 className="mb-1 font-bold ">
                <a href="https://jthemes.com/themes/wp/jobbox/job/five-places-must-visit-in-turkey/">
                  {job.title}
                </a>
              </h6>

              <div className="flex">
                <span className="flex mr-4" style={{ color: "#A0ABB8" }}>
                  <FontAwesomeIcon icon={faBriefcase} width={13} />
                  <p className="text-xs pl-1">{job.type}</p>
                </span>
                <span className="flex" style={{ color: "#A0ABB8" }}>
                  <FontAwesomeIcon icon={faClock} width={13} />
                  <p className="text-xs pl-1">{job.yearPosted}</p>
                </span>
              </div>

              <p className="font-sm py-5 ">{job.description}</p>

              <div className="mt-30 d-flex flex-wrap gap-5">
                {job?.features?.map((item) => {
                  return (
                    <span
                      style={{ background: "#EFF3FC" }}
                      className="text-xs p-2 rounded-lg mr-2"
                    >
                      {item.name}{" "}
                    </span>
                  );
                })}
              </div>

              <div className="card-2-bottom mt-30">
                <div className="flex justify-end">
                  <div className="cursor-pointer w-28 text-sm text-end bg-zinc-300 rounded-lg hover:bg-blue-700 text-blue-500 hover:text-white px-4 py-3">
                    Apply now
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className="flex flex-col ">
      <SectionDetails
        title="Jobs of the day"
        description="Search and connect with the right candidates faster"
      />
      <div>
        <div className="flex flex-wrap justify-center">
          {categories?.categories?.map(({ list }: CategoriesList) => {
            return list?.map((item) => {
              return (
                <div
                  onClick={() => setActiveTab(item.id)}
                  className={` ${
                    item.id === activeTab
                      ? "text-blue-500 border-blue-400"
                      : "border-gray-400"
                  }  rounded py-2 px-3 flex items-center cursor-pointer mr-3 mt-3 border  hover:text-blue-500 hover:border-blue-400`}
                >
                  <div className="w-5 mr-3">
                    <Image
                      src={item.imageUrl}
                      alt={item.alt}
                      width={42}
                      height={52}
                    />
                  </div>
                  <div className="text-sm ">
                    <h4>{item.name}</h4>
                  </div>
                </div>
              );
            });
          })}
        </div>
        {getJobDetails()}
      </div>
    </div>
  );
}
