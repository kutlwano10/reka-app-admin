import React from 'react'

const OrdersCard = ({order}) => {
  return (

    <div className="border rounded-lg shadow-md p-4 m-4">
        
      <h2 className="text-lg font-bold mb-2">Order ID: {order._id}</h2>
      <div className="mb-2">
        <h3 className="text-md font-semibold">Product Name: {order.name}</h3>
        <p>Location: {order.address}</p>
        {/* <p className="text-green-600 font-bold">Price: R{order.price.toFixed(2)}</p> */}
      </div>
      <div>
        {/* <p className={`text-sm ${order.status === 'Delivered' ? 'text-green-500' : 'text-red-500'}`}>
          Status: {order.status}
        </p> */}
      </div>
    </div>
  )
}

export default OrdersCard
