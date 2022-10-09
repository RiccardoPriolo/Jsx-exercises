import React from "react";

const Sum = (a, b) => {
  const sum = (a, b) => a + b;
  return <h2>{sum(a, b)}</h2>;
};

const SumNumber = () => {
  return Sum(1, 1);
};

export default SumNumber;
