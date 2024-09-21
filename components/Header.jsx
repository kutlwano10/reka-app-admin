"use client";
import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { MdSettings, MdSpaceDashboard } from "react-icons/md";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FaCartShopping } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { BsBarChartFill } from "react-icons/bs";
import { MdReviews } from "react-icons/md";
import { HiCash } from "react-icons/hi";

const Header = () => {
  const { data: session } = useSession();

  const handleSidebar = () => {
    const dropDown = document.getElementById("sidebar");
    dropDown.classList.contains("hidden")
      ? dropDown.classList.remove("hidden")
      : dropDown.classList.add("hidden");
  };

  if (session) {
    return (
      <header className="bg-white border-b sticky top-0">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link
                href="/"
                className=" text-[#87e64b] font-extrabold text-2xl  md:text-4xl"
              >
                Admin
              </Link>
            </div>

            <div className="flex md:items-center gap-4 md:gap-12">
              <div className="h-10 w-10">
                <img
                  className="h-full w-full rounded-full object-cover object-center"
                  src={session.user.image}
                  alt=""
                />
              </div>
              <div className=" md:relative md:block">
                <div className="">
                  <button
                    onClick={handleSidebar}
                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 overflow-hidden  border border-gray-300 shadow-inner"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  id="sidebar"
                  className="hidden w-80 absolute end-0 z-10 mt-4  divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
                  role="menu"
                >
                  <aside className=" flex h-screen bg-gray-50 shadow-lg  flex-col p-6">
                    {/* Logo */}
                    <Link
                      href="/"
                      className=" text-[#87e64b] font-extrabold text-2xl md:text-3xl mb-2"
                    >
                      Reka
                    </Link>
                    {/* Sidebar Links */}
                    <nav className="flex flex-col gap-6 text-gray-700">
                      <Link
                        href="/"
                        className="flex items-center space-x-2"
                      >
                        <MdSpaceDashboard size={30} />
                        <span>Dashboard</span>
                      </Link>
                      <Link
                        href="/products"
                        className="flex items-center space-x-2"
                      >
                        <HiMiniShoppingBag size={30} />
                        <span>Products</span>
                      </Link>
                      <Link
                        href="/orders"
                        className="flex items-center space-x-2"
                      >
                        <FaCartShopping size={30} />
                        <span>Orders</span>
                      </Link>
                      <Link
                        href="/customers"
                        className="flex items-center space-x-2"
                      >
                        <IoPeople size={30} />
                        <span>Customers</span>
                      </Link>
                      <Link
                        href="/reports"
                        className="flex items-center space-x-2"
                      >
                        <BsBarChartFill size={30} />
                        <span>Statistics</span>
                      </Link>
                      <Link
                        href="/reviews"
                        className="flex items-center space-x-2"
                      >
                        <MdReviews size={30} />
                        <span>Reviews</span>
                      </Link>
                      <Link
                        href="/transaction"
                        className="flex items-center space-x-2"
                      >
                        <HiCash size={30} />
                        <span>Transactions</span>
                      </Link>
                      <Link
                        href="settings"
                        className="flex items-center space-x-2"
                      >
                        <MdSettings size={30} />
                        <span>Settings</span>
                      </Link>
                      <div className="p-2">
                        <button
                          onClick={signOut}
                          type="submit"
                          className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                          role="menuitem"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                            />
                          </svg>
                          Logout
                        </button>
                      </div>
                    </nav>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
};

export default Header;
