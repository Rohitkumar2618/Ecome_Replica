import React from "react";

const Nav = () => {
  return (
    <>
      <nav className="w-[15%] h-screen border-l border-blue-300 flex flex-col items-center pt-5 ">
        <a
          href="/create"
          className=" px-5 py-3 border  border-blue-300 rounded-md "
        >
          {" "}
          Add New Items
        </a>
        <hr className="h-3 mt-2   w-full" />
        <h1 className="text-2xl mb-3 w-[80%] ">Category</h1>
        <ul className="w-[80%]">
          <li className="flex items-center mb-3">
            <span className="rounded-full mr-2 w-[15px] h-[15px] bg-blue-300"></span>
            Cat 1
          </li>
          <li className="flex items-center mb-3">
            <span className="rounded-full mr-2 w-[15px] h-[15px] bg-red-300"></span>
            Cat 2
          </li>
          <li className="flex items-center mb-3">
            <span className="rounded-full mr-2 w-[15px] h-[15px] bg-green-300"></span>
            Cat 3
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
