import React, { useEffect, useState } from "react";
import Counter from "./Counter.jsx";
import CounterDigit from "./CounterDigit.jsx";

// "Time" IN MY COMMENTS refers to the number of seconds since the page loaded. Not to be confused with the variable called "time", which in theory is the same thing. The "time" variable is passed in from Counter.jsx in the Components folder.

//create your first component
const Home = ({ time }) => {
  // New code
  // const [counter, setCounter] = useState(0);

  // New code
  // useEffect(() => {
  //   console.log("Hello from the useEffect");
  // }, []);

  const stringTime = time.toString(); // time as a string WITHOUT leading zeros
  let stringTimeWithZeros = stringTime; // time as a string WITH leading zeros
  let leadingZeros = 7 - stringTime.length; // how many leading zeros to display before the time if time has less than 6 digits
  // Keeps adding leading zeros until stringTimeWithZeros has 6 digits
  for (let i = 1; i < leadingZeros; i++) {
    stringTimeWithZeros = "0" + stringTimeWithZeros;
  }

  // Experimental code that caused an error saying setSeconds was not defined:
  // let timeDigits = [{}];
  // for (let i = 0; i < stringTimeWithZeros; i++) {
  //   timeDigits[i].digitID =
  //     "Digit" + (i + 1) + "of" + stringTimeWithZeros.length;
  //   timeDigits[i].digit = stringTimeWithZeros[i];
  // }

  return (
    <div className="container text-center">
      {/* Clock symbol: */}
      <span className="digit1 border bg-secondary p-3 m-2">&#128344;</span>

      {/* {stringTimeWithZeros.map((digitAsString, index) => {
        <div key="index">
          <CounterDigit digit={digitAsString} />
        </div>;
      })} */}

      <span className="digit1 border bg-secondary p-3 m-2">
        {stringTimeWithZeros[0]}
      </span>
      <span className="digit2 border bg-secondary p-3 m-2">
        {stringTimeWithZeros[1]}
      </span>
      <span className="digit2 border bg-secondary p-3 m-2">
        {stringTimeWithZeros[2]}
      </span>
      <span className="digit2 border bg-secondary p-3 m-2">
        {stringTimeWithZeros[3]}
      </span>
      <span className="digit2 border bg-secondary p-3 m-2">
        {stringTimeWithZeros[4]}
      </span>
      <span className="digit2 border bg-secondary p-3 m-2">
        {stringTimeWithZeros[5]}
      </span>
      <footer className="text-white fixed-bottom">
        <p>© 2025-2026 Hammond Studios. Coded by Sean Hammond.</p>
        <p>
          Contributors and mentors: Alejandro Sanchez, Ryan Castanier, Alexander
          Ayala-Palacin, Thomas Brito-Bronfield
        </p>
      </footer>
    </div>
  );
};

export default Home;
