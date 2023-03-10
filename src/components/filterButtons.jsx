import React from "react";

function FilterButton(props) {
  return (
    <button
      type="button"
      className="px-4 py-3 w-1/3 rounded-md font-bold  bg-slate-300 hover:bg-slate-200"
      onClick={() => props.setFilter(props.name)}
    >
      {props.name}
    </button>
  );
}

export default FilterButton;
