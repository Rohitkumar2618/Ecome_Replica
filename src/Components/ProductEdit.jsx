import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import WarningCard from "./WarningCard";

const ProductEdit = () => {
  const { products, setProducts } = useContext(ProductContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const existingProduct = products.find((p) => p.id === id);
    if (existingProduct) {
      setProduct(existingProduct);
      setTitle(existingProduct.title);
      setImage(existingProduct.image);
      setDescription(existingProduct.description);
      setPrice(existingProduct.price);
      setCategory(existingProduct.category);
    }
  }, [id, products]);

  const handleEdit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...product,
      title,
      image,
      description,
      price,
      category,
    };

    const updatedProducts = products.map((p) =>
      p.id === id ? updatedProduct : p
    );

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    navigate(`/details/${id}`);
  };

  if (!product) {
    return (
      <div>
        <WarningCard />
      </div>
    );
  }

  return (
    <form
      className="flex flex-col items-center p-[5%] w-screen h-screen"
      onSubmit={handleEdit}
    >
      <h1 className="w-1/2 mb-5 text-3xl">Edit Product</h1>
      <input
        type="url"
        placeholder="Image URL"
        className="text-1xl bg-zinc-100 rounded p-3 mb-3 w-1/2"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="Title"
        className="text-1xl bg-zinc-100 rounded p-3 mb-3 w-1/2"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="Category"
          className="text-1xl bg-zinc-100 rounded p-3 mb-3 w-[48%]"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="Price"
          className="text-1xl bg-zinc-100 rounded p-3 mb-3 w-[48%]"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        className="text-1xl bg-zinc-100 rounded p-3 mb-3 w-1/2"
        placeholder="Enter Product Description Here"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        rows={10}
      ></textarea>

      <button
        className="px-5 py-2 border border-blue-300 rounded mb-2"
        type="submit"
      >
        Save Changes
      </button>
    </form>
  );
};

export default ProductEdit;
