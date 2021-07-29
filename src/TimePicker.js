import { render } from "@testing-library/react";
import { useState, useEffect } from "react";

const TimePicker = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);

  useEffect(() => {
    if (hour > 23) {
      setHour(0);
    }
    if (hour < 0) {
      setHour(23);
    }
    if (minute > 59) {
      setMinute(0);
      setHour(hour + 1);
    }
    if (minute < 0) {
      setMinute(59);
      setHour(hour - 1);
    }
  }, [hour, minute]);

  return (
    <div className="time-picker-container">
      <div>
      {hour}
        <button onClick={() => setHour(hour + 1)}>+</button>
        <button onClick={() => setHour(hour - 1)}>-</button>
      </div>
      <div>
      {minute}
        <button onClick={() => setMinute(minute + 1)}>+</button>
        <button onClick={() => setMinute(minute - 1)}>-</button>
      </div>
    </div>
  );
};

export default TimePicker;
