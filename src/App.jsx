import React from "react";

const App = () => {
  return (
    <div className="w-screen h-screen flex">
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

      {/* Home Component */}

      <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        <div
          className="mr-3 mb-3 card p-3 border shadow rounded w-[18%] h-[30vh] flex flex-col justify-center
  items-center
  "
        >
          <div
            className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
            }}
          ></div>
          <h1 className="hover:text-blue-300">Lorem ipsum dolor sit amet.</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
