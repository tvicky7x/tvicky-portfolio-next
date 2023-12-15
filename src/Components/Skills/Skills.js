"use client";
import React, { useState } from "react";
import Slider from "./Slider";

function Skills() {
  const [tab, setTab] = useState(false);

  // altering tab
  function alteringTab() {
    setTab(!tab);
  }
  return (
    <div className=" py-14 bg-white text-center px-10" id="skills">
      <div className=" md:max-w-7xl max-w-md mx-auto ">
        <h2 className=" text-5xl font-roboto_thin">Skills</h2>
        <div className=" mt-10">
          <div className=" grid grid-cols-2 mb-2">
            <button
              className={`text-center py-2 rounded-t-md  ${
                !tab
                  ? " border-x-2 border-t-2"
                  : " text-blue-500 border-b-2 hover:border-s-2 hover:border-t-2"
              }`}
              onClick={alteringTab}
            >
              Technical Skills
            </button>
            <button
              className={`text-center py-2  rounded-t-md  ${
                tab
                  ? " border-x-2 border-t-2"
                  : " text-blue-500 border-b-2 hover:border-r-2 hover:border-t-2"
              }`}
              onClick={alteringTab}
            >
              Soft Skills
            </button>
          </div>
          {!tab && (
            <div className="grid md:grid-cols-2 gap-x-6">
              <div>
                <Slider name={"React"} per={95} />
                <Slider name={"Next"} per={90} />
                <Slider name={"Data Structures"} per={80} />
              </div>
              <div>
                <Slider name={"Tailwind CSS"} per={97} />
                <Slider name={"JavaScript"} per={85} />
                <Slider name={"HTML/CSS"} per={95} />
              </div>
            </div>
          )}
          {tab && (
            <div className="grid md:grid-cols-2 gap-x-6">
              <div>
                <Slider name={"Goal-Oriented"} per={95} />
                <Slider name={"Collaboration"} per={75} />
                <Slider name={"Positivity"} per={70} />
                <Slider name={"Organization"} per={80} />
              </div>
              <div>
                <Slider name={"Creativity"} per={98} />
                <Slider name={"curiosity"} per={92} />
                <Slider name={"Problem Solving"} per={85} />
                <Slider name={"Empathy"} per={70} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Skills;
