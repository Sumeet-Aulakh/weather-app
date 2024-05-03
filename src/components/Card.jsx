import { useEffect, useState } from "react";
import fetchWeather from "../api/fetchWeather";

const Card = (props) => {
  const [location, setLocation] = useState({});
  const [current, setCurrent] = useState({});
  const [isDay, setIsDay] = useState(1);
  const [icon_number, setIcon_number] = useState(0);
  const [time, setTime] = useState("");

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
    setTime(res.location.localtime);
    setIsDay(res.current.is_day);
  };

  return (
    <div className="card-div">
      <div className="card">
        <div className="card-name">{location.name}</div>
        <div className="card-time">{time.substring(10)}</div>
        <div className="card-temp-c">{current.temp_c}°</div>
        <div className="card-temp-f hidden">{current.temp_f}°</div>
        {icon_number != 0 ? (
          <img
            src={`../icons/${isDay == 1 ? "day" : "night"}/${icon_number}.png`}
            alt="weather-icon"
            className="card-icon"
          />
        ) : null}
        <div className="card-feelslike-c hidden">
          FEELS LIKE: {current.feelslike_c}°
        </div>
        <div className="card-feelslike-c hidden">{current.feelslike_f}°</div>
      </div>
    </div>
  );
};

export default Card;
