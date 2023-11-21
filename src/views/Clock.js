import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    let currentTime = setInterval(() => {
      let timenow = new Date();
      let datetext =
        timenow.getHours() +
        ":" +
        timenow.getMinutes() +
        ":" +
        timenow.getSeconds();
      setTime(datetext);
    }, 1000);

    return () => {
      clearInterval(currentTime);
    };
  }, [time]);
  return (
    <div>
      Vietnam time:
      <div>{time}</div>
    </div>
  );
};
export default Clock;
