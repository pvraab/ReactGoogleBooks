import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.types array
function SearchType(props) {
  return (
    <div>
      <h1>Search Types</h1>
      <h2>Again</h2>
      <h2>{props.typeSearch}</h2>
    </div>
  );
}

export default SearchType;
