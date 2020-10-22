import React from "react";

const person = (props) => {
  return (
    <div className="Person">
      <p>
        I am {props.name} and i am {props.age} old
      </p>
    </div>
  );
};

export default person;
