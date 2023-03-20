import React from "react";

export default function SearchBox({ searchField, searchChange }) {
  return (
    <div>
      <input
        className="pa2 ba b--green bg-lightest-blue ma2"
        type="text"
        placeholder="Search a Country"
        value={searchField}
        onChange={searchChange}
      />
    </div>
  );
}
