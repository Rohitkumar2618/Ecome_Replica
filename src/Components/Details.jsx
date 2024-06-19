import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../public/GalaxyCSquare.png";
const Details = () => {
  return (
    <div
      className="w-[70%] flex 
      justify-between
      h-[90%]
 m-auto p-[10%]

 border border-solid
 rounded-md
 bg-zinc-100
    
    "
    >
      <img className=" object-contain h-[80%] w-[40%] " src={img1} alt="" />
      <div className="content  w-[50%]">
        <h1
          className="text-4xl font-semibold  p-2 center
          mt-12
        "
        >
          Lorem ipsum dolor sit amet.{" "}
        </h1>
        <h3 className="text-zinc-400 my-50 ml-1">Men's Clothing</h3>
        <h2 className="mt-[5%] p-2 text-black-100 font-semibold ">$4500</h2>
        <p className="text-sm mt-[15%] p-1 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          accusantium molestiae ipsum magni maxime. Voluptate excepturi, fugit
          nisi ex quod eum fugiat architecto.
        </p>
        <div className="flex justify-between  p-10 items-center">
          <Link
            className="px-5 py-2 rounded border border-blue-300
          hover:scale-105
          text-blue-300
             "
          >
            Edit
          </Link>
          <Link
            className="px-5 py-2 rounded border border-red-300 hover:scale-105
          text-red-300
           "
          >
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
