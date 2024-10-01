"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
// import favorite from "../public/favorite.svg";
// import cart from "../public/cart.svg";
import { CldImage } from "next-cloudinary";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  //   const filter = useSelector((state) => state.filter.filter); // Get filter state from Redux

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const response = await fetch(`https://reka-app-admin.vercel.app/api/products/`, {
          cache: "no-store",
        });
        console.log(response);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.products); // Set the fetched products to the state
      } catch (error) {
        console.log("Error loading products:", error);
      }
    };

    fetchProductsData(); // Re-fetch the products whenever the filter changes
  }, []);

  return (
    <>
      {console.log(products)}
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product._id}
            className="flex flex-col max-h-[130rem] cursor-pointer max-w-80 hover:-translate-y-1 hover:scale-105 duration-300 bg-white border border-slate-200 shadow shadow-slate-950/5  overflow-hidden"
          >
            <div className="flex align-center p-2">
              <button className="relative left-[85%]">
                {/*  */}
                {/* <Image width={30} height={30} src={favorite} alt="" /> */}
              </button>
            </div>

            <Link href='/products/' className="flex justify-center">
              <CldImage
                priority
                cloudname={process.env.CLOUDINARY_CLOUD_NAME}
                publicid={product.images}
                alt="img"
                src={product.images}
                width="300"
                height="300"
                crop="scale"
              />
            </Link>

            <div className="flex-1 flex flex-col p-2">
              <div className="flex-1">
                <header className="mb-2 flex-2">
                  <h2 className="text-sm line-clamp-2 font-extrabold leading-snug">
                    <div className="text-slate-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300">
                      <Link href='/products'>{product.title}</Link>
                    </div>
                  </h2>
                </header>

                <div className="text-base line-clamp-2 font-extrabold text-slate-500 leading-snug">
                  <h2>R{product.price}</h2>
                </div>
              </div>
              <div className="flex mt-1 space-x-2">
                <div className="justify-start flex-1">
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="flex justify-end gap-3 space-x-2">
                <button>
                  {/* <Image className="w-8" width={100} height={100}src={cart} alt=""  /> */}
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No Products found for this category </p>
      )}
    </>
  );
};

export default ProductCard;
