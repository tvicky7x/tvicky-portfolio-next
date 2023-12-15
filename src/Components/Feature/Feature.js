import React from "react";
import Slideshow from "./Slideshow";

function Feature() {
  return (
    <div className=" py-14 bg-white text-center px-10" id="about">
      <div className=" md:max-w-7xl max-w-md mx-auto ">
        <h2 className=" text-5xl font-roboto_thin">Feature Project</h2>
        <div className=" mt-10 grid sm:grid-cols-2 gap-x-6 gap-y-3">
          <div className=" text-start self-center">
            <h3 className="text-2xl">JoyBox</h3>
            <h4 className=" italic text-slate-500">
              Mailbox Client (Frontend)
            </h4>
            <p className="mt-3 mb-5">
              Introducing JoyBox, a cutting-edge React-powered mailbox client
              designed for modern email management. This innovative project
              seamlessly integrates Firebase for real-time updates and secure
              authentication, ensuring a responsive and intuitive user
              experience. With a focus on user-friendly design, JoyBox combines
              technology and aesthetic, providing a sophisticated and efficient
              solution for effortless email organization and interaction.
              Elevate your mailbox experience with JoyBox – where technology
              meets design seamlessly.
            </p>
            <a
              href="https://joybox-mail.web.app/"
              rel="noreferrer"
              target="_blank"
              className=" outline outline-1 px-2 py-1 rounded-lg hover:bg-slate-900 hover:text-white hover:outline-slate-900 text-lg"
            >
              Visit Site{" "}
            </a>
          </div>
          <Slideshow />
        </div>
      </div>
    </div>
  );
}

export default Feature;
