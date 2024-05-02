import { useEffect, useState } from "react";
import fetchWeather from "../api/fetchWeather";

const Card = (props) => {
  const [location, setLocation] = useState({});
  const [current, setCurrent] = useState({});
  const [isDay, setIsDay] = useState(1);
  const [icon_number, setIcon_number] = useState(0);

  useEffect(() => {
    const data = fetchWeather(props.city).then((res) => {
      processResponse(res);
    });
  }, []);

  const processResponse = (res) => {
    setLocation(res.location);
    setCurrent(res.current);
    let conditions = "" + res.current.condition.icon;
    setIcon_number(
      conditions.substring(conditions.length - 7, conditions.length - 4)
    );
    setIsDay(res.current.is_day);
  };

  return (
    <div className="card">
      <div className="card-left">
        <h4>{location.name}</h4>
        <h4>{location.region}</h4>
        <h4>{location.localtime}</h4>
      </div>
      <div className="card-right">
        <h4>{current.temp_c}°C</h4>
        <h4>{current.temp_f}°F</h4>
        {icon_number != 0 ? (
          <img
            src={`../icons/${isDay == 1 ? "day" : "night"}/${icon_number}.png`}
            alt="weather-icon"
          />
        ) : null}
        <h4>FEELS LIKE: {current.feelslike_c}°C</h4>
        <h4>{current.feelslike_f}°F</h4>
      </div>
    </div>
  );
};

export default Card;
