"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CldUploadWidget } from "next-cloudinary";

const ProductForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [isUpLoading, setIsUpLoading] = useState(false);

  const router = useRouter();

  const uploadImagesQueue = {};

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "PresetNyana"); // unsigned preset

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      console.log(data.url);
      setImages(data.url); // The uploaded image URL
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!title || !description|| !images || !price) {
    //   alert("Insert details");
    //   return
    // }

    // console.log(formData)
    try {
      console.log(images);
      const res = await fetch("https://reka-app-admin.vercel.app/api/products", {
        method: "POST",
        headers: {
          "constent-type": "application/json",
        },
        body: JSON.stringify({ title, description, images, price, category }),
      });
      if (res.ok) {
        router.push("/products");
      } else {
        throw new Error("Failed to Create Product");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mx-auto max-w-screen-sm px-4">
          <div className="mx-auto my-4 ">
            <div>
              <label
                htmlFor="example1"
                className="mb-1 block text-lg font-medium text-gray-700"
              >
                Title
              </label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                id="example1"
                className="block w-full border rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3"
                placeholder="Product Title "
              />
            </div>
          </div>
          <div className="mx-auto my-4 ">
            <div>
              <label
                htmlFor="example1"
                className="mb-1 block text-lg font-medium text-gray-700"
              >
                Select Category
              </label>
              <select
                type="text"
                id="example1"
                className="block w-full  border rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3"
                placeholder="Product Category "
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Select">No Category Selected</option>
                <option value="Meat and Fish">Meat and Fish</option>
                <option value="Minerals">Minerals</option>
                <option value="Live Stock">Live Stock</option>
                <option value="Fruits and Veg">Fruits and Veg</option>
                <option value="Pets">Pets</option>
                <option value="Kasi Food">Kasi Food</option>
                <option value="Clean Water">Clean Water</option>
                <option value="Local Brands">Local Brands</option>
              </select>
            </div>
          </div>
          <div className="mx-auto my-4 ">
            <div>
              <label
                htmlFor="example1"
                className="mb-1 block text-lg font-medium text-gray-700"
              >
                Images
              </label>
              <div className="mx-auto ">
                <label className="flex w-full cursor-pointer appearance-none items-center justify-center rounded-md border-2 border-dashed border-gray-200 p-6 transition-all hover:border-primary-300">
                  <div className="space-y-1 text-center ">
                    <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                        />
                      </svg>
                    </div>
                    <div className="text-gray-600">
                      <a
                        href="#"
                        className="font-medium text-primary-500 hover:text-primary-700"
                      >
                        Click to upload
                      </a>{" "}
                      or drag and drop
                    </div>
                    <p className="text-sm text-gray-500">
                      SVG, PNG, JPG or GIF (max. 800x400px)
                    </p>
                  </div>
                  <input
                    id="example5"
                    type="file"
                    onChange={handleImageUpload}
                    className="sr-only"
                  />
                </label>
              </div>
              {/* for the Pictures to appear */}
                <div className="grid grid-cols-2 items-center gap-4 rounded">
                  {images.length > 0 ? (
                    <div className="relative group">
                      <img
                        className="object-cover h-32 w-44 rounded-md p-2"
                        src={images} // Assuming `images` is an array, display the first image
                        alt="image"
                      />
                      {/* Button is now positioned relative to the parent */}
                      <div className="absolute top-2 right-2 cursor-pointer group-hover:opacity-100 opacity-0 transition-opacity">
                        <button className="">D</button>
                      </div>
                    </div>
                  ) : null // Use null or an empty string instead of {''}
                  }
                </div>
              
            </div>
          </div>
          <div className="mx-auto my-4 ">
            <div>
              <label
                htmlFor="example1"
                className="mb-1 block text-lg font-medium text-gray-700"
              >
                Price
              </label>
              <input
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                id="example1"
                className="block w-full border rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3"
                placeholder="Product Price"
              />
            </div>
          </div>
          <div className="mx-auto my-4 ">
            <div>
              <label
                htmlFor="example1"
                className="mb-1 block text-lg font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                id="example1"
                className="block space-y-1  w-full border rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3"
                placeholder="Product description"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full inline-block rounded border border-[#87e64b] px-12 py-3 text-sm font-medium text-[#87e64b] hover:bg-[#87e64b] hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
          >
            Add Product
          </button>
        </div>
      </form>
    </>
  );
};

export default ProductForm;
