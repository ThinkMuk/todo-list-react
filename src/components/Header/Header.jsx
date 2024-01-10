import React from "react";

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header>
      <ul>
        {filters.map((value, idx) => (
          <button key={idx} onClick={() => onFilterChange(value)}>
            {value}
          </button>
        ))}
      </ul>
    </header>
  );
}
