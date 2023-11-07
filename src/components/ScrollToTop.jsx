import React from "react";
import { scrollIntoView } from "../utils/utils";

export default function ScrollToTop({ inView }) {
  return (
    <div
      onClick={() => scrollIntoView("home")}
      className={`${
        inView ? `invisible opacity-0` : `visible opacity-100`
      } transition-all duration-300`}
    >
      <div className="fixed z-50 right-4 bottom-4 overflow-hidden cursor-pointer animate-jump duration-700 ease-in-out">
        <div className="p-2 bg-primary-800 flex-center rounded-lg">
          <AngleUp />
        </div>
      </div>
    </div>
  );
}

const AngleUp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Bold"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    className="fill-primary-100"
  >
    <path d="M22.5,18a1.5,1.5,0,0,1-1.061-.44L13.768,9.889a2.5,2.5,0,0,0-3.536,0L2.57,17.551A1.5,1.5,0,0,1,.449,15.43L8.111,7.768a5.505,5.505,0,0,1,7.778,0l7.672,7.672A1.5,1.5,0,0,1,22.5,18Z" />
  </svg>
);
