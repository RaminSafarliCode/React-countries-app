import React from "react";

function Country(props) {
  const { img, name } = props;
  return (
    <article
      className="country"
      onClick={() => {
        alert(name);
      }}
    >
      <img src={img} alt="" />
      <h2>{name}</h2>
    </article>
  );
}

export default Country;
