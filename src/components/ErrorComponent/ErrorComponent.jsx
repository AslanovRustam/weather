import React from "react";
import s from "./errorComponent.module.css";

function ErrorComponent({ error }) {
  return <p className={s.error}>{error}</p>;
}

export default ErrorComponent;
