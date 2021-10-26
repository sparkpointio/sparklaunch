import React, { useEffect, useState } from "react";

function Timer() {
  const calculateTimeLeft = () => {
    const year = new Date().getFullYear();
    const difference = +new Date(`${year}-11-01 00:00:00`) - +new Date();
    // const difference = +new Date(`${year}-${project.endDate}`) - +new Date();
    // const difference = new Date("Jul 27, 2021 17:00:00").getTime();
    let timeLeft = {};
    

    if (difference > 0) {
      timeLeft = {
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60),

      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
        <span style={{color: '#FFFFFF'}}>
        {timeLeft[interval]}{interval}{" "}
      </span>
    );
  });

  // return Ownly is Live after countdown expires
  return (
    <div>
      {timerComponents.length ? timerComponents : <span> Live!</span>}
    </div>
  );
}

export default Timer;