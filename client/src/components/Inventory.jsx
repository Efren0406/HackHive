import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";

function Inventory() {
  const [inventory, setInventory] = useState([]);
  const [user, setUser] = useState("");

  const [newItem, setNewItem] = useState({
    itemName: "",
    quantity: 0,
    quality: 0,
    recived: "",
    expiration: "",
  });

  useEffect(() => {
    const localUser = localStorage.getItem("user");
    const userTo = JSON.parse(localUser);
    setUser(userTo);
    try {
      const getInventory = async () => {
        const res = await fetch("http://localhost:3000/inventory", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userTo),
        });

        if (res.status != 200) {
          // handle error con alert?
        } else {
          const data = await res.json();
          setInventory(data);
        }
      };
      getInventory();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleChange = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
    });
  };

  const addToInventory = (e) => {
    e.preventDefault();
    try {
      const sendItem = async () => {
        const res = await fetch("http://localhost:3000/inventory", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newItem),
        });
      };
      setInventory([...inventory, newItem]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-screen">
      <Navigation />
      <div className="flex flex-wrap justify-center items-center mt-2 gap-4">
        <h1 className="text-4xl text-center mt-8">Inventory</h1>
        <form className="w-fit gap-2 flex flex-col border px-4">
          <h2 className="text-center">Add to my inventory</h2>
          <div className="flex gap-2">
            <label>Item Name</label>
            <input
              type="text"
              name="itemName"
              className="text-input"
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-2">
            <label>Quantity</label>
            <input
              type="text"
              name="quantity"
              className="text-input"
              onChange={handleChange}
            />
            Kg.
          </div>
          <div className="flex gap-2">
            <label>Quality</label>
            <input
              type="text"
              name="quality"
              className="text-input"
              onChange={handleChange}
            />{" "}
            /10
          </div>
          <div className="flex gap-2">
            <label>Recived at</label>
            <input
              type="text"
              name="recived"
              className="text-input"
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-2">
            <label>Expires</label>
            <input
              type="text"
              name="expiration"
              className="text-input"
              onChange={handleChange}
            />
          </div>
          <button
            className="border bg-orange-400 rounded-md w-fit px-4 py-2 mx-auto"
            onClick={addToInventory}
          >
            Add
          </button>
        </form>
      </div>

      {inventory.map((item) => (
        <div
          key={item.name}
          className="border p-4 rounded-md mx-auto w-fit mt-4"
        >
          <h2>{item.name}</h2>
          <p>Quantity: {item.quantity}</p>
          <p>Quality: {item.quality}</p>
          <p>Expiration: {item.expiration} </p>
          <p>Recived: {item.recived} </p>
        </div>
      ))}
    </div>
  );
}

export default Inventory;
