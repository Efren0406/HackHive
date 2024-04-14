import React from "react";
import Navigation from "./Navigation";
import BarChart from "./chart";

function Home() {
  const data = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    values: [12, 19, 3, 5, 2, 3],
  };

  return (
    <div>
      <Navigation />
      <h1 className="text-4xl text-center mt-8">Home</h1>
      <BarChart data={data} />
    </div>
  );
}

export default Home;
