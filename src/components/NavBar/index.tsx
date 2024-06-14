"use client";

import "./styles.css";
import headerOptions from "./constants.json";
import Image from "next/image";
import LandingPage from "../LandingPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { slide as Menu } from "react-burger-menu";
import Hamburger from "hamburger-react";
import { useState } from "react";

interface Options {
  id: number;
  name: string;
}

interface Dropdown {
  name: string;
  options: Array<Options>;
}

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "20px",
    height: "16px",
    right: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#000000",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    top: "0",
  },
  bmMenu: {
    background: "#ffffff",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
    top: "0",
  },
};

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="bg-homepage pt-6 p-2 md:p-0 md:pt-6">
      <div className="sm:flex md:block sm:px-12 md:px-18 lg:px-24 xl:px-30 2xl:px-44 ">
        <div className="flex justify-between items-center">
          <Image
            width={150}
            height={39}
            alt="Logo"
            src={"/images/jobhub-logo.svg"}
          />
          <div className="hidden md:flex">
            {headerOptions?.headerOptions?.map(
              ({ name, options }: Dropdown) => {
                return (
                  <ul key={1} className="flex">
                    <li className="group relative dropdown px-4 text-gray-500 hover:text-blue-700 cursor-pointer font-sm text-base tracking-wide">
                      <div className="flex items-baseline">
                        <a className="text-sm pr-1">{name}</a>
                        <FontAwesomeIcon icon={faSortDown} color="#A0ABB8" />
                      </div>
                      <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                        <ul className="rounded-xl top-0 -ml-4 w-48 bg-white shadow px-5 py-4">
                          {options?.map((item) => {
                            return (
                              <li key={item.id}>
                                <a
                                  href="/"
                                  className="block text-gray-500 font-medium text-base  hover:text-blue-700 cursor-pointer"
                                >
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
          <div className="header-right hidden sm:hidden md:flex">
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
        <div className="md:hidden">
          <Menu isOpen={isOpen} right styles={styles} width={"90%"}>
            <a id="home" className="menu-item">
              Home
            </a>
            <a id="about" className="menu-item">
              About
            </a>
            <a id="contact" className="menu-item">
              Contact
            </a>
            <a className="menu-item--small">Settings</a>
          </Menu>
        </div>
        <LandingPage />
      </div>
    </div>
  );
}
