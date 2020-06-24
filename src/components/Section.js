import React from "react";

const Section = ({ data }) => {
  return (
    <>
      <div className="header-white">
        <header>
          <div className="wrapper">
            <img alt="Logo Deliveroo" src="assets/deliveroo-logo.png" />
          </div>
        </header>
        <main>
          <div className="wrapper">
            <div>
              <h1>{data.restaurant.name}</h1>
              <p>{data.restaurant.description}</p>
            </div>
            <img src={data.restaurant.picture} alt={data.restaurant.name}></img>
          </div>
        </main>
      </div>
    </>
  );
};

export default Section;
