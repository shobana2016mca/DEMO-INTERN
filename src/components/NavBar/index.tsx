"use client";

import "./styles.css";
import headerOptions from "./constants.json";
import Image from "next/image";
import LandingPage from "../LandingPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

interface Options {
  id: number;
  name: string;
}

interface Dropdown {
  name: string;
  options: Array<Options>;
}

export default function NavBar() {
  return (
    <div className="bg-homepage pt-6">
      <div className="sm:px-12 md:px-18 lg:px-24 xl:px-30 2xl:px-44 ">
        <div className="flex justify-between items-center">
          <Image
            width={150}
            height={39}
            alt="Logo"
            src={"/images/jobhub-logo.svg"}
          />
          <div className="hidden xl:flex">
            {headerOptions?.headerOptions?.map(
              ({ name, options }: Dropdown) => {
                return (
                  <ul className="flex">
                    <li className="group relative dropdown px-4 text-gray-500 hover:text-blue-700 cursor-pointer font-sm text-base tracking-wide">
                      <div className="flex items-baseline">
                        <a className="text-sm pr-1">{name}</a>
                        <FontAwesomeIcon icon={faSortDown} color="#A0ABB8"/>
                      </div>
                      <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                        <ul className="rounded-xl top-0 -ml-4 w-48 bg-white shadow px-5 py-4">
                          {options?.map((item) => {
                            return (
                              <li>
                                <a href="/" className="block text-gray-500 font-medium text-base  hover:text-blue-700 cursor-pointer">
                                  {item.name}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </li>
                  </ul>
                );
              }
            )}
          </div>
          <div className="header-right hidden  xl:flex">
            <div className="block-signin d-flex align-items-center gap-2">
              <a className="underline" href="/">
                Register
              </a>
              <button className=" text-md rounded-lg bg-blue-600  text-white px-6 py-3 ml-6">
                Sign in
              </button>
            </div>
          </div>
        </div>
        <LandingPage />
      </div>
    </div>
  );
}
