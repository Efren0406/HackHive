import React from "react";

function Item({ item }) {
  return (
    <div
      key={item.id}
      className="min-w-40 border p-4 rounded-md mx-auto w-fit mt-4"
    >
      <h2 className="font-bold text-xl">{item.name}</h2>
      <p>Quantity: {item.quantity}</p>
      <p>Quality: {item.quality}</p>
      <p>Expiration: {item.expiration} </p>
      <p>Recived: {item.recived} </p>
    </div>
  );
}

export default Item;
