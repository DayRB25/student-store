import * as React from "react";
import "./SearchAndFilter.css";
import { useState } from "react";

export default function SearchAndFilter({
  filter,
  handleFilterChange,
  search,
  handleChangeSearch,
}) {
  /////
  // state determining visibility of filters
  /////
  const [displayFilters, setDisplayFilters] = useState(true);

  /////
  // function to negate (flip) current state of filter visibility
  /////
  const handleFilterVisibilityToggle = () => {
    setDisplayFilters((prevDisplayFilter) => !prevDisplayFilter);
  };

  return (
    <div className="searchandfilter">
      <div className="searchandfiltercontent">
        <div className="search">
          <input
            type="text"
            placeholder="Enter Item Name"
            value={search}
            onChange={handleChangeSearch}
          ></input>
          <button>
            <img
              className="searchIcon"
              alt="magnifying glass"
              src="src/assetts/magnifying-glass.png"
            />
          </button>
        </div>
        <div className="filter">
          <i
            className="material-icons"
            id="filter-icon"
            onClick={handleFilterVisibilityToggle}
          >
            menu
          </i>
          <ul
            className={
              displayFilters ? "filter-options" : "filter-options closed"
            }
          >
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
