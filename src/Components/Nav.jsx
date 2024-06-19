import React from "react";

const Nav = () => {
  return (
    <>
      {/* Side Nav bar */}
      <nav
        className="w-[15%] h-full bg-zinc-50
      flex flex-col items-center pt-5
      "
      >
        <a
          href="/create"
          className=" mt-3 px-5 py-2
       border border-sky-500
       text-sky-500
         "
        >
          ADD New Product
        </a>

        <hr className="my-3  w-[80%]" />
        <h1 className="text-2xl mb-3 w-[80%] font-bold">Category Filter</h1>
        <ul className="w-[80%] ">
          <li
            className="mb-3
            flex items-center text-2xl  "
          >
            <span
              className="
             w-[15px] h-[15px] rounded-full mr-2 bg-red-400"
            ></span>
            item1
          </li>
        </ul>
        <ul className="w-[80%] ">
          <li
            className="mb-3
            flex items-center text-2xl  "
          >
            <span
              className="
             w-[15px] h-[15px] rounded-full mr-2 bg-blue-400"
            ></span>
            item1
          </li>
        </ul>
        <ul className="w-[80%] ">
          <li
            className="mb-3
            flex items-center text-2xl  "
          >
            <span
              className="
             w-[15px] h-[15px] rounded-full mr-2 bg-green-400"
            ></span>
            item1
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
