import React, { Component } from "react";

function TimeDay() {
  const date = new Date();
  const hours = date.getHours();
  let timeofDay;

  if (hours > 5 && hours < 12) {
    timeofDay = "Mornind";
  } else if (hours >= 12 && hours < 17) {
    timeofDay = "afternoon";
  } else {
    timeofDay = "night";
  }

  return (
    <div>
      <h1>Good {timeofDay}</h1>
    </div>
  );
}

export default TimeDay;
