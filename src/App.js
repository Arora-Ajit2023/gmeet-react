import React from "react";
import "./App.css";
import Card from "./Component/Card/Card";
import Footer from "./Component/Footer/Footer";
import { cardDetails } from "./Data/Data";

function App() {
  cardDetails.forEach((item) => {});
  return (
    <>
      <div className="card-style">
        {cardDetails.map((cardItem) => {
          return <Card name={cardItem.name} key={cardItem.id} />;
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
