import React from "react";
import Card from "./card";

const CardList = ({ robots }) => {
  // if (true) {
  //   throw new Error('NOOOO');
  // }
  return (
    <div>
      {
        // Take the array of robot objects (robots), and create an array of <Card>'s
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
            />
          );
        })
      }
    </div>
  );
};

export default CardList;
