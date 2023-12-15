import React from "react";
import GitCard from "./GitCard";

function Projects() {
  return (
    <div className=" py-14 bg-slate-100 text-center px-10" id="projects">
      <div className="md:max-w-7xl max-w-md mx-auto ">
        <h2 className=" text-5xl font-roboto_thin">Recent Projects</h2>
        <div className=" grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10 mt-10">
          <GitCard
            repoName={"JoyBox"}
            repoLink={"https://github.com/tvicky7x/JoyBox"}
            webLink={"https://joybox-mail.web.app"}
            starLink={"https://github.com/tvicky7x/JoyBox/stargazers"}
            js={95.8}
            css={2.5}
            html={1.7}
            updated={"September 23, 2023"}
          />
          <GitCard
            repoName={"Xpense-AI"}
            repoLink={"https://github.com/tvicky7x/Xpense-AI"}
            webLink={"https://xpense-ai.web.app/"}
            starLink={"https://github.com/tvicky7x/Xpense-AI/stargazers"}
            js={96.7}
            css={3.1}
            html={0.2}
            updated={"September 14, 2023"}
          />
          <GitCard
            repoName={"My-Portfolio"}
            repoLink={"https://github.com/tvicky7x/My-Portfolio"}
            webLink={"https://t-vicky.web.app/"}
            starLink={"https://github.com/tvicky7x/My-Portfolio/stargazers"}
            js={88.4}
            css={10.8}
            html={0.8}
            updated={"October 24, 2023"}
          />
          <GitCard
            repoName={"JoyBox"}
            repoLink={"https://github.com/tvicky7x/JoyBox"}
            webLink={"https://joybox-mail.web.app"}
            starLink={"https://github.com/tvicky7x/JoyBox/stargazers"}
            js={95.8}
            css={2.5}
            html={1.7}
            updated={"September 23, 2023"}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
