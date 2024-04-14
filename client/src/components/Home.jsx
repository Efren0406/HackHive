import React from "react";
import Navigation from "./Navigation";
import BarChart from "./chart";

function Home() {
  const data = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    values: [2345687, 1345678, 3000984, 2543789, 2245878, 2148578, 2345678, 2000987, 1234878, 2010987, 2909812, 3909889],
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
