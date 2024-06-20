import React from "react";
import ClimbingBoxLoader from "react-spinners/ClipLoader";
import s from "./loader.module.css";

function Loader() {
  return (
    <div className={s.backdrop}>
      <ClimbingBoxLoader color="#adcb28" />
    </div>
  );
}

export default Loader;
