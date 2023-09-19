import React from "react";
import "./addToFavourite.css";

// interface Props {
//   status: boolean
//   click : ()=>void;
// }

const AddToFavourite = ({ status }) => {
  if (status === false)
    return (
      <button type="button" class="btn btn-outline-danger mybtn">
        Add To List
      </button>
    );
  return (
    <button type="button" class="btn btn-outline-danger mybtn">
      Remove From List
    </button>
  );
};

export default AddToFavourite;
