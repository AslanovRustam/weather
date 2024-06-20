import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCity } from "../../redux/location/locationSlice";
import { fetchWeatherByName } from "../../redux/weather/operations";
import s from "./form.module.css";

function FormComponent() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) {
      setError(true);
      return;
    }
    dispatch(setCity(query));
    dispatch(fetchWeatherByName(query));
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label>
        <input
          className={s.input}
          value={query}
          placeholder="type your city"
          onChange={handleSearch}
        />
        {error && <span className={s.error}>the field can not be empty</span>}
      </label>
      <button className={s.btn}>find</button>
    </form>
  );
}

export default FormComponent;
