import axios from "./axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState([]); // Initialize with an empty array

  const getProducts = async () => {
    try {
      const { data } = await axios.get("/products");
      setProducts(data); // Set the products state with the fetched data
      console.log(data);
    } catch (error) {
      console.error("Error fetching products:", error); // Improved error message
    }
  };

  useEffect(() => {
    getProducts();
  }, []); // Run once on component mount

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default Context;
