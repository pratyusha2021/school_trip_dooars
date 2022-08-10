import React from "react";
import './App.css';

import Header from "./components/Header.js";
import Slider from "./components/Slider.js";
import { SliderData } from "./components/Slider.js";
import Planning from "./components/Planning";
import DataTable from "./components/DataTable";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider slides={ SliderData }/>
      <Planning />
      <DataTable />
      <Footer />
    </div>
  );
}

export default App;
