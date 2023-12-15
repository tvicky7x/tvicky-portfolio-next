import Image from "next/image";
import React from "react";

function Experience() {
  return (
    <div className=" py-14 bg-white text-center px-10" id="about">
      <div className=" md:max-w-7xl max-w-md mx-auto ">
        <h2 className=" text-5xl font-roboto_thin">Experience</h2>
        <div className=" mt-10">
          <div className=" flex items-center justify-center">
            <Image
              src={"/Images/sharpener logo.png"}
              alt="sharpener logo"
              width={80}
              height={80}
              className=" w-14 h-14 "
            />
            <h3 className=" sharp sm:text-5xl text-4xl font-roboto_bold pr-9">
              SHARPENER
            </h3>
          </div>
          <p className=" font-roboto_thin text-xl mt-1">
            Full Stack Developer Training
          </p>
          <p className=" font-roboto_thin text-xl">March 2023 - Present</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
