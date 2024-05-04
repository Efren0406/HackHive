import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Customer from "./Customer";

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [user, setUser] = useState("");

  const [newCustomer, setNewCustomer] = useState({
    name: "",
    email: "",
    needs: "",
    location: "",
    user_id: 0,
  });

  useEffect(() => {
    const localUser = localStorage.getItem("user");
    const userTo = JSON.parse(localUser);

    setUser(userTo);
    try {
      const getCustomers = async () => {
        const res = await fetch("http://localhost:3000/customers", {
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
          setCustomers(data);
        }
      };
      getCustomers();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleChange = (e) => {
    setNewCustomer({
      ...newCustomer,
      [e.target.name]: e.target.value,
    });
  };

  const addCustomer = (e) => {
    e.preventDefault();
    setNewCustomer({
      ...newCustomer,
      user_id: user.user_id,
    });
    try {
      const sendCustomer = async () => {
        const res = await fetch("http://localhost:3000/newCustomer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCustomer),
        });
      };
      sendCustomer();
      setCustomers([...customers, newCustomer]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-screen">
      <Navigation />
      <div className="flex flex-wrap justify-center items-center mt-2 gap-4">
        <h1 className="text-4xl text-center mt-8 font-bold border-[#36c102] border-b-4">
          Customers
        </h1>
        <form className="ss gap-2 flex flex-col ">
          <div className="flex gap-2 items-center">
            <label>Customer Name</label>
            <input
              type="text"
              name="name"
              className="text-input"
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-2 items-center">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="text-input"
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-2 items-center">
            <label>Needs</label>
            <textarea
              type="text"
              name="needs"
              className="text-input"
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-2 items-center">
            <label>Location</label>
            <input
              type="text"
              name="location"
              className="text-input"
              onChange={handleChange}
            />
          </div>

          <button className="submit-button mx-auto" onClick={addCustomer}>
            Add Customer
          </button>
        </form>
      </div>
      <div className="flex flex-wrap gap-2 pb-4">
        {customers.map((customer) => (
          <Customer key={customer.customer_id} customer={customer} />
        ))}
      </div>
    </div>
  );
}

export default Customers;
