import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";
import { ProductContext } from "../utils/Context";

const Details = () => {
  const { products, setProducts } = useContext(ProductContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the product exists in the context
    const existingProduct = products.find((p) => p.id === id);
    if (existingProduct) {
      setProduct(existingProduct);
      setLoading(false);
    } else {
      // Fetch the product from the API if not found in context
      const fetchProduct = async () => {
        try {
          const { data } = await axios.get(
            `https://fakestoreapi.com/products/${id}`
          );
          setProduct(data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching product:", error);
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [id, products]);

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="w-[70%] m-auto p-[5%] border border-solid rounded-md flex">
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
    </div>
  );
};

export default Details;
