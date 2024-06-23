// import React, { useContext, useState } from "react";
// import { ProductContext } from "../utils/Context";
// import { nanoid } from "nanoid";
// import { useNavigate } from "react-router";

// const Create = () => {
//   const { products, setProducts } = useContext(ProductContext);

//   const [title, setTitle] = useState("");
//   const [image, setImage] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [category, setCategory] = useState("");

//   const navigate = useNavigate();

//   // Handle form submit
//   const addProductHandler = (e) => {
//     e.preventDefault();

//     if (
//       title.trim().length < 5 ||
//       image.trim().length < 5 ||
//       category.trim().length < 5 ||
//       price.trim().length < 1 ||
//       description.trim().length < 5
//     ) {
//       alert(
//         "Each field must have at least 5 characters, except for the price which must have at least 1 character."
//       );
//       return; // Prevent form submission if validation fails
//     }

//     const product = {
//       id: nanoid(),
//       title,
//       image,
//       category,
//       price,
//       description,
//     };

//     // Append the new product to the existing products array
//     setProducts((prevProducts) => [...prevProducts, product]);

//     localStorage.setItem("products", JSON.stringify(product));

//     navigate("/");

//     // Clear form fields after submission
//     setTitle("");
//     setImage("");
//     setCategory("");
//     setPrice("");
//     setDescription("");

//     console.log([...products, product]); // Log the updated products array
//   };

//   return (
//     <div>
//       <form
//         className="flex flex-col items-center p-[5%] w-screen h-screen"
//         onSubmit={addProductHandler}
//       >
//         <h1 className="w-1/2 mb-5 text-3xl">Add New Product</h1>
//         <input
//           type="url"
//           placeholder="Image URL"
//           className="text-1xl bg-zinc-100 rounded p-3 mb-3 w-1/2"
//           onChange={(e) => setImage(e.target.value)}
//           value={image}
//         />
//         <input
//           type="text"
//           placeholder="Title"
//           className="text-1xl bg-zinc-100 rounded p-3 mb-3 w-1/2"
//           onChange={(e) => setTitle(e.target.value)}
//           value={title}
//         />
//         <div className="w-1/2 flex justify-between">
//           <input
//             type="text"
//             placeholder="Category"
//             className="text-1xl bg-zinc-100 rounded p-3 mb-3 w-[48%]"
//             onChange={(e) => setCategory(e.target.value)}
//             value={category}
//           />
//           <input
//             type="number"
//             placeholder="Price"
//             className="text-1xl bg-zinc-100 rounded p-3 mb-3 w-[48%]"
//             onChange={(e) => setPrice(e.target.value)}
//             value={price}
//           />
//         </div>
//         <textarea
//           className="text-1xl bg-zinc-100 rounded p-3 mb-3 w-1/2"
//           placeholder="Enter Product Description Here"
//           onChange={(e) => setDescription(e.target.value)}
//           value={description}
//           rows={10}
//         ></textarea>

//         <button
//           className="px-5 py-2 border border-blue-300 rounded mb-2"
//           type="submit"
//         >
//           Add New Items
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Create;

import React, { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router";

const Create = () => {
  const { setProducts } = useContext(ProductContext);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  // Handle form submit
  const addProductHandler = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert(
        "Each field must have at least 5 characters, except for the price which must have at least 1 character."
      );
      return; // Prevent form submission if validation fails
    }

    const product = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };

    // Append the new product to the existing products array
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts, product];
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      return updatedProducts;
    });

    navigate("/");

    // Clear form fields after submission
    setTitle("");
    setImage("");
    setCategory("");
    setPrice("");
    setDescription("");
  };

  return (
    <div>
      <form
        className="flex flex-col items-center p-[5%] w-screen h-screen"
        onSubmit={addProductHandler}
      >
        <h1 className="w-1/2 mb-5 text-3xl">Add New Product</h1>
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
          Add New Items
        </button>
      </form>
    </div>
  );
};

export default Create;
