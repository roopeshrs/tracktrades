import { useState } from "react";
import Header from "./components/Header";
import SecondaryHeader from "./components/SecondaryHeader";
import Table from "./components/Table";

function App() {
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  return (
    <div>
      <Header />
      <SecondaryHeader setIsBasketOpen={setIsBasketOpen} />
      <Table isBasketOpen={isBasketOpen} setIsBasketOpen={setIsBasketOpen} />
      {/**
        Header
          - Logo
          - menu
            - menu1
            - menu2
          - avatar section
        Filter
          - div
            - 2 MUI inputs
          - div
            - div
            - div
          - div
            - Filter
            - Basket
        Div
         - 2 buttons
        Table
    */}
    </div>
  
  );
}

export default App;
