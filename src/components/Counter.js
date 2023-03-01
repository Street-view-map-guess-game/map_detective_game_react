import React from "react";
import { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import styles from "../styles/mapStyle.module.css";

function Counter({ start, end }) {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <CountUp startVal={start} end={end} start={viewPortEntered ? null : 0}>
      {({ countUpRef }) => {
        return (
          <ReactVisibilitySensor
            active={!viewPortEntered}
            onChange={(isVisible) => {
              if (isVisible) {
                setViewPortEntered(true);
              }
            }}
            delayedCall>
            <span className={styles.counterVal} ref={countUpRef} />
          </ReactVisibilitySensor>
        );
      }}
    </CountUp>
  );
}

export default Counter;
