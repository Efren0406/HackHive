import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Item from "./Item";

function Inventory() {
  const [inventory, setInventory] = useState([]);
  const [user, setUser] = useState("");

  const [newItem, setNewItem] = useState({
    name: "",
    quantity: 0,
    quality: 0,
    recived: "",
    expiration: "",
    user_id: 1,
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
    setNewItem({
      ...newItem,
      user_id: user.user_id,
    });
    try {
      const sendItem = async () => {
        const res = await fetch("http://localhost:3000/newItem", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newItem),
        });
      };
      sendItem();
      setInventory([...inventory, newItem]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-screen">
      <Navigation />
      <div className="flex flex-wrap justify-center items-center mt-2 gap-4">
        <h1 className="text-4xl text-center mt-8 font-bold">Inventory</h1>
        <form className="ss gap-2 flex flex-col ">
          <h2 className="text-center font-bold text-xl">Add to my inventory</h2>
          <div className="flex gap-2 items-center">
            <label>Item Name</label>
            <input
              type="text"
              name="name"
              className="text-input"
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-2 items-center">
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              className="text-input"
              onChange={handleChange}
            />
            Kg.
          </div>
          <div className="flex gap-2 items-center">
            <label>Quality</label>
            <input
              type="number"
              name="quality"
              className="text-input"
              onChange={handleChange}
            />
            /10
          </div>
          <div className="flex gap-2 items-center">
            <label>Recived at</label>
            <input
              type="date"
              name="recived"
              className="text-input"
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-2 items-center">
            <label>Expires</label>
            <input
              type="date"
              name="expiration"
              className="text-input"
              onChange={handleChange}
            />
          </div>
          <button className="submit-button mx-auto" onClick={addToInventory}>
            Add
          </button>
        </form>
      </div>
      <div className="flex flex-wrap gap-2">
        {inventory.map((item) => (
          <Item item={item} />
        ))}
      </div>
    </div>
  );
}

export default Inventory;
