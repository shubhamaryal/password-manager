import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className=" flex justify-between items-center px-4 py-5 h-14 mycontainer">
        <div className="logo font-bold text-white text-2xl">
          <span className="text-emerald-500">&lt;</span>
          <span>Pass</span>
          <span className="text-emerald-500">OP/&gt;</span>
        </div>
        {/* <ul>
          <li className="flex gap-4">
            <a className="hover:font-bold" href="/">
              Home
            </a>
            <a className="hover:font-bold" href="#">
              About
            </a>
            <a className="hover:font-bold" href="#">
              Contact
            </a>
          </li>
        </ul> */}
        <button className="text-white bg-emerald-600 my-5 mx-2 rounded-full flex justify-between items-center ring-1 ring-white">
          <img
            className="brightness-0 invert p-1 w-10"
            // we needed the png white, so we made the png black by making it's brightness 0 and inverted it
            src="/icons/github.png"
            alt="Github"
          />
          <span className="font-bold px-2">GitHub</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
