import React from "react";

const LoadMore = ({ handleClick }) => {
  return (
    <div className="d-flex justify-content-center my-5">
      <button onClick={handleClick}>Load More</button>
    </div>
  );
};

export default LoadMore;
