import React from "react";

const SearchBox = ({ value, onChange, className }) => {
  const getClassName = () => {
    let name = 'form-control my-3 ';
    if (className) name += className;
    return name;
  };

  return (
    <input
      type="text"
      name="query"
      className={getClassName()}
      placeholder="Search..."
      value={value}
      onChange={e => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
