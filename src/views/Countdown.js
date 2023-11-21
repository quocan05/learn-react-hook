import { useEffect, useState } from "react";

const Countdown = (props) => {
  const [count, setCount] = useState(5);
  useEffect(() => {
    if (count === 0) {
      props.alert();
      return;
    }

    const timer = setInterval(() => {
      setCount((count) => count - 1);
      console.log(count);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);
  return <div>are you gay? {count} s</div>;
};

export default Countdown;
