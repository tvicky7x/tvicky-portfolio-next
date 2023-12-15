import React from "react";
import GitButton from "../util/GitButton";
import WebsiteButton from "../util/WebsiteButton";

function GitCard({
  repoName,
  repoLink,
  webLink,
  starLink,
  js,
  css,
  html,
  updated,
}) {
  return (
    <div className=" border-2 drop-shadow-xl p-6 bg-white rounded-lg">
      <p className=" font-roboto_bold text-lg text-left">{repoName}</p>
      <div className=" flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3 px-2 mt-4 mb-4">
        <WebsiteButton href={webLink}>Website</WebsiteButton>
        <GitButton href={repoLink}>Repo</GitButton>
      </div>
      <hr />
      <div className=" flex items-end flex-wrap space-x-2 space-y-2 text-sm mt-4">
        <p>Language:</p>
        <GitLanguage lan={"JavaScript"} per={js} />
        <GitLanguage lan={"CSS"} per={css} />
        <GitLanguage lan={"HTML"} per={html} />
      </div>
      <div className="flex items-center space-x-8 text-sm mt-5">
        <a href={starLink} target="_blank" className="flex items-center">
          <svg
            className=" w-5 h-5 fill-slate-800 8 mr-1"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" />
            </g>
          </svg>

          <p>Stars</p>
        </a>
        <p className=" font-roboto_thin text-slate-600">Updated on {updated}</p>
      </div>
    </div>
  );
}

function GitLanguage({ lan, per }) {
  return (
    <p className=" font-roboto_bold bg-slate-100 px-1 rounded text-xs">{`${lan}: ${per} %`}</p>
  );
}

export default GitCard;
