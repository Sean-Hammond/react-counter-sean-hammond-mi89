import React, { useEffect, useState } from "react";
import Counter from "./Counter.jsx";
import CounterDigit from "./CounterDigit.jsx";

//create your first component
const Home = ({ time }) => {
  // New code
  const [counter, setCounter] = useState(time);

  useEffect(() => {
    console.log("Console log inside useEffect");
  }, [counter]);

  const stringTime = counter.toString(); // time as a string WITHOUT leading zeros
  let stringTimeWithZeros = stringTime; // time as a string WITH leading zeros

  // how many leading zeros to display before the time if time has less than 6 digits:
  let leadingZeros = 7 - stringTime.length;
  // Keeps adding leading zeros until stringTimeWithZeros has 6 digits:
  for (let i = 1; i < leadingZeros; i++) {
    stringTimeWithZeros = "0" + stringTimeWithZeros;
  }
  // Simpler way to do this according to Thomas B:
  // const sixDigits = String(Math.max(0, time)).padStart(6, "0").slice(-6); const digits = sixDigits.split(""); // ... };

  let arrayTimeWithZeros = stringTimeWithZeros.split("");

  return (
    <div className="container text-center">
      {/* Clock symbol: */}
      <span className="digit1 border bg-secondary p-3 m-2">&#128344;</span>
      {arrayTimeWithZeros.map((digitAsString, index) => (
        <span
          key={"digit" + index + "of" + arrayTimeWithZeros.length}
          className="digit1 border bg-secondary p-3 m-2"
        >
          {digitAsString}
        </span>
      ))}
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
