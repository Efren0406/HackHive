import React from "react";
import Navigation from "./Navigation";
import BarChart from "./chart";

function Home() {
  const totalWaste = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    values: [2345687, 1345678, 3000984, 2543789, 0, 0, 0, 0, 0, 0, 0, 0],
  };
  
  const kilogramsState = {
    labels: ["Aguascalientes", "Sonora", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    values: [0, 1345678, 3000984, 2543789, 2245878, 2148578, 2345678, 2000987, 1234878, 2010987, 2909812, 3909889],
  };

  return (
    <div className="flex flex-col">
      <Navigation />
      <p className="text-2xl font-bold text-center mt-8">Home</p>
      <div className="flex space-x-6 px-5">
        <div className="w-1/3">
          <BarChart data={kilogramsState} type={'pie'} colors={["red", "purple", "green", "yellow", "gray", "blue", "pink"]} border={'white'}/>
        </div>
        <div className="w-2/3">
          <BarChart data={totalWaste} type={'bar'} colors={"rgb(54,193,2, 0.2)"} border={'green'}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
