import React from "react";

function Filter({ filterHandle }) {
  return (
    <div className="filters">
      <button className="filter__btn" value="All" onClick={filterHandle}>
        All
      </button>
      <button
        className="filter__btn"
        value="Entertainment"
        onClick={filterHandle}>
        Entertainment
      </button>
      <button className="filter__btn" value="Technology" onClick={filterHandle}>
        Technology
      </button>
      <button className="filter__btn" value="Sports" onClick={filterHandle}>
        Sports
      </button>
    </div>
  );
}

export default Filter;
