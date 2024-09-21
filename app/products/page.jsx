import React from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";

const Products = () => {
  return (
    <>
      <header className="bg-white px-[8%]">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 sm:text-2xl">
                All Products
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/products/new"
                className="inline-flex items-center justify-center gap-1.5 rounded border border-[#87e64b] bg-white px-5 py-3 text-[#87e64b] transition hover:text-[#87e64b] focus:outline-none focus:ring"
                type="button"
              >
                <span className="text-sm font-medium"> Add Product </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <hr className="my-1 h-px border-0 bg-gray-300" />

      <div className=" px-[8%] md:px-0 max-w-xl md:mx-auto grid gap-4 grid-cols-2 lg:grid-cols-5 justify-center md:grid-cols-3 lg:mx-[9%] items-center lg:max-w-none my-4">
        <ProductCard />
      </div>
    </>
  );
};

export default Products;
