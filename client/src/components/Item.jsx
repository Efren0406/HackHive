import React from "react";

function Item({ item }) {
  return (
    <div
      key={item.id}
      className="min-w-40 border p-4 rounded-md mx-auto w-fit mt-4 bg-[#36c102] text-white"
    >
      <h2 className="font-bold text-xl">{item.name}</h2>
      <p className="flex justify-between">
        <span>Quantity:</span> {item.quantity}
      </p>
      <p className="flex justify-between">
        <span>Quality:</span> {item.quality}
      </p>
      <p className="flex justify-between">
        <span>Expiration date:</span> {item.expiration}
      </p>
      <p className="flex justify-between">
        <span>Recived:</span> {item.recived}{" "}
      </p>
    </div>
  );
}

export default Item;
