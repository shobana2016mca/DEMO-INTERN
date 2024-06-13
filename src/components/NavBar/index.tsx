"use client";

import "./styles.css";
import headerOptions from "./constants.json";
import Image from "next/image";
import LandingPage from "../LandingPage";

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
      <div className="container">
        <div className="flex justify-between items-center">
          <Image
            width={150}
            height={39}
            alt="Logo"
            src={"/images/jobhub-logo.svg"}
          />
          <div className="flex">
            {headerOptions?.headerOptions?.map(
              ({ name, options }: Dropdown) => {
                return (
                  <ul className="flex">
                    <li className="group relative dropdown px-4 text-gray-500 hover:text-blue-700 cursor-pointer font-sm text-base tracking-wide">
                      <a>{name}</a>
                      <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                        <ul className=" rounded-xl top-0 w-48 bg-white shadow px-6 py-4">
                          {options?.map((item1) => {
                            return (
                              <li className="p">
                                <a className="block text-gray-500 font-sm text-base  hover:text-blue-700 cursor-pointer">
                                  {item1.name}
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
          <div className="header-right">
            <div className="block-signin d-flex align-items-center gap-2">
              <a
                className="text-link-bd-btom hover-up"
                href="#controlJobManagerRegister"
                data-bs-toggle="modal"
              >
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
