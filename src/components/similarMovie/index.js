import React from "react";

const SimilarMovie =  ({ similar }) => {
  return (
    <>
      <p>Review By: {similar.title} </p>
      <p>{similar.release_date} </p>
    </>
  );
};
export default SimilarMovie