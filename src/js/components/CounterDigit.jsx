import Home from "./Home";

const CounterDigit = (digit) => {
  return (
    <span className="digit1 border bg-secondary p-3 m-2">
        {stringTimeWithZeros[digit]}
      </span>
  );
};

export default CounterDigit;
