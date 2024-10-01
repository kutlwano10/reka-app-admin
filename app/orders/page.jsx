import OrdersCard from "../../components/OrdersCard";
import React from "react";

const fetchProductsData = async () => {
  try {
    const response = await fetch(`https://reka-app-admin.vercel.app/api/orders/`, {
      cache: "no-store",
    });
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return await response.json();
  } catch (error) {
    console.log("Error loading products:", error);
  }
};

const Order = async () => {
  const orderedProducts = await fetchProductsData();
//   console.log(orderedProducts);
  return (
    <div>
      <h1>Orders List</h1>
      {orderedProducts && orderedProducts.bought.map((order) => {
        {console.log(order)}
      return  <OrdersCard key={order._id} order={order} />;
      })}
    </div>
  );
};

export default Order;
