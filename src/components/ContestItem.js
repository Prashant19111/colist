import React from "react";

export const ContestItem = (props) => {
  return (
    <>
    <tr>
      <td>{props.title}</td>
      <td>{props.start}</td>
      <td>{props.duration}</td>
    </tr>
    </>
  );
};
