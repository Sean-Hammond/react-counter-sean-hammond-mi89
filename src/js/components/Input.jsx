import { useEffect, useState } from "react";

export const Input = ({checkTime}) => {
  const [alertTime, setAlertTime] = useState("never");

  function changeAlertTime(changeTimeTo) {
    setAlertTime(changeTimeTo);
  }

  function buttonChangeAlertTime(changeTimeTo) {
    return (
      <button
        className="btn btn-danger mx-2"
        onClick={() => changeAlertTime(changeTimeTo)}
        key={changeTimeTo}
      >
        {changeTimeTo}
      </button>
    );
  }

  const alertOptions = [60, 120, 300, 600, "never"];

  useEffect(() => {
    console.log("Input useEffect");
  }, []);
  return (
    <span className="alert-label">
      <input
        type="text"
        className="pt-6"
        value={alertTime}
        onChange={(e) => {
          // Update state only if the value changes
          const newValue = e.target.value;
          setAlertTime(newValue);
        }}
      />{" "}
      <span className="alert-label">
        {alertTime === "never" ? "" : "seconds"}
      </span>
      <br />
      {alertOptions.map((alertOption, index) =>
        buttonChangeAlertTime(alertOption),
      )}
      <div>{alertTime === checkTime ? "ALERT!!!" : ""}</div>
    </span>
  );
};
