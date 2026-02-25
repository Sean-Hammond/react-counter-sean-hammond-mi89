const CounterDigit = ({time, digit}) => {
  return (
    <span className="digit1 border bg-secondary p-3 m-2">{time[digit]}</span>
  );
};

export default CounterDigit;
