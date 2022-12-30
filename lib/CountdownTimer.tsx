import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "./useCountdown";

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <>
      <div className="flex justify-between font-bold">
        <DateTimeDisplay value={days} type={"Hari"} />
        <DateTimeDisplay value={hours} type={"Jam"} />
        <DateTimeDisplay value={minutes} type={"Menit"} />
        <DateTimeDisplay value={seconds} type={"Detik"} />
      </div>
    </>
  );
};

const CountdownTimer = ({ targetDate, setCount }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days < -1) {
    return <ShowCounter days={0} hours={0} minutes={0} seconds={0} />;
  } else if (days + hours + minutes + seconds <= 0) {
    return <ShowCounter days={0} hours={0} minutes={0} seconds={0} />;
    // return setCount(false);
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
