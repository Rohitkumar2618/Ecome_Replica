// Importing From Others

import React, { useEffect } from "react";

import { asyncgetproducts } from "../store/actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";

function Products() {
  //
  const { products } = useSelector((state) => state.ProductReducer);

  //   console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncgetproducts());
  }, []);

  return (
    <>
      <div className="m-auto container p-10 mt-5 bg-red-100">
        <h1 className="text-2xl font-bold text-red-900">Product List</h1>

        <ul>
          {products &&
            products.map((user, index) => (
              <li key={user.id}>
                <div className="flex">
                  {" "}
                  <h1 className="font-semibold text-1xl  font-[gilroy]">
                    {" "}
                    {user.title} :
                  </h1>
                  <h1 className="mx-3  font-bold "> {user.id}</h1>
                  <span
                    // onClick={() => DeleteHandeler(index)}
                    className="text-red-500 font-black cursor-pointer"
                  >
                    {" "}
                    X
                  </span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default Products;
