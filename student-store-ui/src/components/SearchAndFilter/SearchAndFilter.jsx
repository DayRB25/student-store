import * as React from "react";
import "./SearchAndFilter.css";

export default function SearchAndFilter({ filter, handleFilterChange }) {
  return (
    <div className="searchandfilter">
      <div className="searchandfiltercontent">
        <div className="filter">
          <i className="material-icons" id="filter-icon">
            menu
          </i>
          <ul className="filter-options">
            <li
              className={filter === "all" ? "active" : undefined}
              onClick={() => handleFilterChange("all")}
            >
              All Categories
            </li>
            <li
              className={filter === "clothing" ? "active" : undefined}
              onClick={() => handleFilterChange("clothing")}
            >
              Clothing
            </li>
            <li
              className={filter === "food" ? "active" : undefined}
              onClick={() => handleFilterChange("food")}
            >
              Food
            </li>
            <li
              className={filter === "accessories" ? "active" : undefined}
              onClick={() => handleFilterChange("accessories")}
            >
              Accessories
            </li>
            <li
              className={filter === "tech" ? "active" : undefined}
              onClick={() => handleFilterChange("tech")}
            >
              Tech
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
