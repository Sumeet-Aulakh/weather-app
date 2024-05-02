import { useEffect, useState } from "react";
import fetchWeather from "../api/fetchWeather";

const Card = (props) => {
  const [location, setLocation] = useState({});
  const [current, setCurrent] = useState({});

  useEffect(() => {
    const data = fetchWeather(props.city).then((res) => {
      console.log(res);
      setLocation(res.location);
      setCurrent(res.current);
    });
  }, []);

  return (
    <div className="card">
      <div className="card-left">
        <h4>NAME: {location.name}</h4>
        <h4>REGION: {location.region}</h4>
        <h4>COUNTRY: {location.country}</h4>
        <h4>LAT:{location.lat}</h4>
        <h4>LON: {location.lon}</h4>
        <h4>LOCAL TIME:{location.localtime}</h4>
      </div>
      <div className="card-right">
        <h4>LAST UPDATED: {current.last_updated}</h4>
        <h4>TEMP: {current.last_temp_c}°C</h4>
        <h4>{current.last_temp_f}°F</h4>
        <h4>TEXT: {JSON.stringify(current.condition)}</h4>
        <h4>FEELS LIKE: {current.feelslike_c}°C</h4>
        <h4>{current.feelslike_f}°F</h4>
      </div>
    </div>
  );
};

export default Card;
