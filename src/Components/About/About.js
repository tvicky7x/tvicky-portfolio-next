import Image from "next/image";
import React from "react";
import OutlineBlackButton from "../util/OutlineBlackButton";

function About() {
  return (
    <div className=" py-14 bg-slate-300 text-center px-10" id="about">
      <div className="md:max-w-7xl max-w-md mx-auto grid md:grid-cols-12 md:gap-4">
        <Image
          src={"/Images/T Vicky sharpimag.jpg"}
          alt="T Vicky image"
          width={375}
          height={375}
          priority={true}
          className=" self-center rounded-full hidden md:block col-span-5"
        />
        <div className=" col-span-7 self-center">
          <h2 className=" text-5xl font-roboto_thin">About Me</h2>
          <p className=" text-lg font-roboto_thin mt-10 mb-5">
            Hi, I'm T Vicky, a Frontend Web Developer with a focus on crafting
            seamless user experiences using React, Next.js, and Tailwind CSS. I
            specialize in blending design and functionality to create visually
            appealing and intuitive interfaces. Beyond coding, I stay curious,
            exploring new trends and fostering continuous learning. Let's
            connect and create something amazing together.
          </p>
          <OutlineBlackButton href={"/Assets/T Vicky Frontend Resume.pdf"}>
            Resume
          </OutlineBlackButton>
        </div>
      </div>
    </div>
  );
}

export default About;
