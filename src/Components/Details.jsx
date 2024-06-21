import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(data);
      } catch (error) {
        console.log("Error fetching product:", error);
      }
    };

    getSingleProduct();
  }, [id]);

  return (
    <div className="w-[70%] m-auto p-[5%] border border-solid rounded-md flex">
      {product ? (
        <>
          <img
            className="object-contain h-[80%] w-[40%] rounded-lg"
            src={product.image}
            alt={product.title}
          />
          <div className="w-[60%] p-6">
            <h1 className="text-4xl font-semibold">{product.title}</h1>
            <h3 className="text-gray-600 mt-2">{product.category}</h3>
            <h2 className="mt-4 text-2xl font-semibold">${product.price}</h2>
            <p className="text-sm mt-4">{product.description}</p>
            <div className="flex justify-between mt-6">
              <Link
                to={`/edit/${product.id}`}
                className="px-5 py-2 rounded border border-blue-300 text-blue-300 hover:scale-105"
              >
                Edit
              </Link>
              <Link
                to={`/delete/${product.id}`}
                className="px-5 py-2 rounded border border-red-300 text-red-300 hover:scale-105"
              >
                Delete
              </Link>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Details;
