"use client";
import "./styles.css";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className=" md:flex mt-14 md:justify-between">
      <div className="w-full md:w-2/4 px-4 mb-20">
        <div className="text-4xl md:text-5xl font-medium">
          The <span className="highlight-text text-blue-700">Easiest Way</span>{" "}
          <br /> to Get Your New Job
        </div>
        <p className="text-lg py-8 text-slate-600">
          Each month, more than 3 million job seekers turn to website in their
          search for work, making over 140,000 applications every single day
        </p>

        <div>
          Popular Searches: Content Writer , Finance , Human Resource ,
          Management
        </div>
      </div>
      <div className="md:flex md:justify-center lg:contents ">
        <Image
          src={"/images/hero-image.webp"}
          alt="hero image"
          width={"500"}
          height={"500"}
          className="landing-image"
        />
      </div>
    </div>
  );
}
