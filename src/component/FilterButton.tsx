import React from "react";

interface FileterButtonsProps {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const FilterButtons: React.FC<FileterButtonsProps> = ({ setFilter }) => {
  return (
    <></>
    // <div className="btn-container">
    //   <button onClick={() => setFilter("All")}>すべて</button>
    //   <button onClick={() => setFilter("notComplete")}>未完了</button>
    //   <button onClick={() => setFilter("Complete")}>完了</button>
    // </div>
  );
};

export default FilterButtons;
