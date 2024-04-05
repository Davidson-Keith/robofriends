import React from "react";

const Card = ({ id, name, email, bs }) => {// destructure props. instead of (props), use ({ id, name, email })
  // const { id, name, email } = props; // destructure
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
      <img alt="robots" src={`https://robohash.org/${id}?size=300x300`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        {/*<p>{bs}</p>*/}
      </div>
    </div>
  );
};

export default Card;

