import React from "react";

const Scroll = (props) => {
  // console.log(props);
  return (
    <div style={props.style}>
      {props.children}
    </div>
  );
};

export default Scroll;
