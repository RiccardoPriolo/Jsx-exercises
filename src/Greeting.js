import React from "react";

const Greet = (name) => {
  return <h1>Hello, {name}!</h1>;
};

const GreetingName = () => {
  return Greet("Paul");
};

export default GreetingName;
