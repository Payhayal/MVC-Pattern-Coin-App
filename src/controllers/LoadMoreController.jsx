import React from "react";
import LoadMore from "../views/LoadMore";
import { useSearchParams } from "react-router-dom";

const LoadMoreController = () => {
  const [params, setParams] = useSearchParams();

  const handleClick = () => {
    // get current page
    // +params.get("page") = Number(params.get("page"))>>They are same. When you add `+` you make it number.
    const pageNumber = +params.get("page");
    // Add 1 to the number of pages in the url
    setParams({ page: pageNumber + 1 });
  };

  return <LoadMore handleClick={handleClick} />;
};

export default LoadMoreController;
