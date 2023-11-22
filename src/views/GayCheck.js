import React, { useEffect, useState } from "react";

export const GayCheck = (props) => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count === 0) {
      alertGay();
      //props.alert;
      return;
    }
    console.log("call useEffect.");

    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  const alertGay = () => {
    alert("too late, you are gay! ");
  };

  return (
    <div>
      <div>GayCheck, Quick answer if you not gay :)</div>
      <div>Are you gay? You only have {count}s left :))) </div>
    </div>
  );
};
