import React from "react";

function Customer({ customer }) {
  return (
    <div
      key={customer.id}
      className="min-w-40 border p-4 rounded-md mx-auto w-fit mt-4 bg-[#36c102] text-white"
    >
      <h2 className="font-bold text-xl text-center">{customer.name}</h2>
      <p className="flex justify-between">
        <span>Email:</span> {customer.email}
      </p>
      <p className="flex justify-between">
        <span>Needs:</span> {customer.needs}
      </p>
      <p className="flex justify-between gap-2">
        <span>Location:</span> {customer.location}
      </p>
    </div>
  );
}

export default Customer;
