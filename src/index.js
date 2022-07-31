import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import { countries } from "./countries";
import Country from "./Country";

function CountriesList() {
  return (
    <main>
      <section className="title">
        <h1 className="header">World Countries</h1>
        <p className="subtext">Press to the countries</p>
      </section>
      <section className="countriesList">
        {countries.map((country) => {
          const { img, name } = country;
          return <Country {...country}></Country>;
        })}
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<CountriesList />);
