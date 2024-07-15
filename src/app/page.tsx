"use client";
import React, { useEffect } from "react";

function CoffeeClock() {
  type ClockDegrees = {
    secondsDegree: number;
    minutesDegree: number;
    hoursDegree: number;
  };

  useEffect(() => {
    const updateClock = () => {
      // "test"
      const coffeeClockElement = document.querySelector(
        ".coffee-clock"
      ) as HTMLElement;
      console.clear();
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      const degrees: ClockDegrees = {
        secondsDegree: (360 / 60) * seconds,
        minutesDegree: (360 / 60) * minutes + ((360 / 60) * seconds) / 60,
        hoursDegree:
          (360 / 12) * (hours % 12 || 12) + ((360 / 60) * minutes) / 60,
      };

      console.log(degrees);

      coffeeClockElement.style.setProperty(
        "--angle-hour",
        `${degrees.hoursDegree}deg`
      );
      coffeeClockElement.style.setProperty(
        "--angle-minute",
        `${degrees.minutesDegree}deg`
      );
      coffeeClockElement.style.setProperty(
        "--angle-second",
        `${degrees.secondsDegree}deg`
      );
    };

    const intervalId = setInterval(updateClock, 60000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="coffee-clock">
      <div className="plate"></div>
      <div className="cup"></div>
      <div className="handle">
        <div></div>
      </div>
      <div className="coffee"></div>
      <div className="spoon">
        <div></div>
      </div>
    </div>
  );
}

export default CoffeeClock;
