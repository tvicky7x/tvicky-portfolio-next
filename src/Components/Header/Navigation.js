"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Navigation() {
  const [menu, setMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // altering menu
  function alterMenu() {
    setMenu(!menu);
  }

  // useEffect with scroll function
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` text-slate-800 px-3 flex justify-between md:justify-start items-center  md:space-x-5 fixed top-0 w-full z-50  ${
        isScrolled
          ? "bg-white bg-opacity-50 transition-colors duration-500 ease-in-out"
          : menu
          ? "bg-white bg-opacity-50 md:bg-transparent"
          : "bg-transparent"
      }`}
    >
      <h1 className=" font-semibold text-xl py-3">{`<T Vicky/>`}</h1>
      <div onClick={alterMenu} className=" cursor-pointer md:hidden flex">
        {!menu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
        {menu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </div>
      {menu && (
        <ul
          className={`md:hidden  md:space-x-4 text-lg absolute top-full w-full left-0 px-5 ${
            menu && "bg-white bg-opacity-50  md:bg-transparent"
          }`}
        >
          <li className="py-2">
            <Link href={"#projects"} className=" block">
              Projects
            </Link>
          </li>
          <li className="py-2">
            <a
              href={"/Assets/T Vicky Frontend Resume.pdf"}
              target="_blank"
              className=" block"
            >
              Resume
            </a>
          </li>
          <li className="py-2">
            <Link href={"#about"} className=" block">
              About
            </Link>
          </li>
          <li className="py-2">
            <Link href={"#skills"} className=" block">
              Skills
            </Link>
          </li>
        </ul>
      )}
      <ul
        className={` hidden font-thin md:flex md:space-x-4 text-lg items-center`}
      >
        <li>
          <Link href={"#projects"}>Projects</Link>
        </li>
        <li>
          <a href={"/Assets/T Vicky Frontend Resume.pdf"} target="_blank">
            Resume
          </a>
        </li>
        <li>
          <Link href={"#about"}>About</Link>
        </li>
        <li>
          <Link href={"#skills"}>Skills</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
