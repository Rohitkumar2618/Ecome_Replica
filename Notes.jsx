// !For Async data rendering you need ti follow this step


// Steps : 1. Create Normal reducer file inside reducer folder --> ProductReducer.jsx




// ! 1. create ProductReducer.jsx ----> Inside reducersfolder


// !----------------------------------------------------------------------------------------------------------------
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { userdelete } from "./UserReducers";

const initialState = {
  products: [],
};

export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getproducts: (state, action) => {
      state.products = action.payload;
    },

    userdelete: (state, action) => {
      state.users.splice(action.payload, 1);
    },
  },
});

export default ProductSlice.reducer;
export const { getproducts } = ProductSlice.actions;

// ! ----------------------------------------------------------------------------------

2. add in store.jsx

//  ! 3. create actions name folder for async action perform inside it create a new file call ProductAction.jsx

// ! ProductAction.jsx 

// @  ------------------------------------------------------------------


import axios from "axios";
import { getproducts } from "../reducers/ProductReducer";

export const asyncgetproducts = () => async (dispatch, getstate) => {
  //   console.log(getstate());
  try {
    const response = await axios.get("https://fakestoreapi.com/products");

    dispatch(getproducts(response.data));
  } catch (error) {
    console.log(error);
  }
};


// -------------------------------------------------------------------------------


*** --->Note : when we want to create a async function we need to create a higher level function   <----- ***

4. pass inside the products.jsx --->   
using Dispatch function

// 5. Implementation of Products.jsx


//  ----------------------------------------------------

import React, { useEffect } from "react";

import { getproducts } from "../store/reducers/ProductReducer";

import { asyncgetproducts } from "../store/actions/ProductAction";

import { useDispatch, useSelector } from "react-redux";

import { userdelete } from "../store/reducers/UserReducers";

function Products() {
  const { products } = useSelector((state) => state.ProductReducer);

  //   console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncgetproducts());
  }, []);

  const DeleteHandeler = (index) => {
    dispatch(userdelete(index));
  };

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
                    onClick={() => DeleteHandeler(index)}
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


// ----------------------------------------------------------------

