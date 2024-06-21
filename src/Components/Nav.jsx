import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ProductContext } from "../utils/Context";

const Nav = () => {
  // products aa gaye
  const { products } = useContext(ProductContext);

  //  ab unique caterories nikale andr se
  let distinct_category =
    // .reduce givee ---> accumulatur ,curr value

    //  ab ye categories  se distrinct kiya
    products && products.reduce((acc, cv) => [...acc, cv.category], []);

  // ab usme se unique values mean categories dega

  distinct_category = [...new Set(distinct_category)];

  // console.log(distinct_category);

  // To gererate Random color
  const color = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.random().toFixed(2); // Random alpha value with 2 decimal places

    return `rgba(${r}, ${g}, ${b}, ${a})`;
  };

  // console.log(color());

  return (
    <>
      <nav className="w-[15%] h-screen border-l border-blue-300 flex flex-col items-center pt-5">
        <a
          href="/create"
          className="px-5 py-3 border border-blue-300 rounded-md mb-2"
        >
          Add New Items
        </a>
        <hr className="h-3 w-full mt-2" />
        <h1 className="text-2xl mb-3 w-[80%]">Category</h1>
        <div className="w-[80%]">
          {/* Correctly render links for each distinct category */}
          {distinct_category.map((category, index) => (
            <Link
              key={index}
              to={`/?category=${category}`} // Assuming you want to pass category as a query parameter
              className="flex items-center mb-3"
            >
              <span
                className="rounded-full mr-2 w-[15px] h-[15px]"
                style={{
                  backgroundColor: color(),
                }}
              ></span>
              {category}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Nav;
