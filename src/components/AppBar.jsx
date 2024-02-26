import React from "react";

const AppBar = () => {
  const navItem = ["Home", "Categories", "About", "Contact"];

  return (
    <header className="w-[100%]">
      <div className=" flex items-center justify-between gap-[.4rem] w-[100%] mt-5">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-air-vent"
          >
            <path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
            <path d="M6 8h12" />
            <path d="M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12" />
            <path d="M6.6 15.6A2 2 0 1 0 10 17v-5" />
          </svg>
        </div>

        <ul className="md:flex hidden md:items-center md:gap-[3rem]">
          {navItem.map((item, index) => (
            <li
              className={"tracking-wide cursor-pointer text-[1rem]"}
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="relative">
          <input
            type="text"
            className="outline-none border-none p-[.6rem] pr-[5rem] capitalize rounded-[.5rem] text-[#6f8194] bg-[#1e1c2a] relative top-0 left-0"
            placeholder="search here"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-mic absolute top-[10.5px] right-2 "
          >
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" x2="12" y1="19" y2="22" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
