import { useEffect, useState } from "react";
import fetchWeather from "./fetchWeather.js";

const WeatherAPI = (props) => {
  const [string, setString] = useState("not a string");
  const [location, setLocation] = useState({});
  const [current, setCurrent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = fetchWeather(props.city);
    data.then((res) => {
      setLocation(res.location);
      setCurrent(res.current);
      processData(res);
    });
  }, []);

  const processData = (data) => {
    setString(JSON.stringify(data));
    setLoading(false);
  };

  if (!loading) {
    console.log("Location", location);
    console.log("Current", current);
  }

  return (
    <div>
      <div className="box-container ">
        <div className="box color-green" />
        <div className="box color-dark-lime" />
        <div className="box color-lime" />
        <div className="box color-khaki" />
        <div className="box color-white" />
      </div>
      {Object.entries(location).map(([key, value]) => {
        return (
          <div key={key}>
            {key}: {JSON.stringify(value)}
          </div>
        );
      })}
      {Object.entries(current).map(([key, value]) => {
        return (
          <p key={key}>
            {key}: {JSON.stringify(value)}
          </p>
        );
      })}
    </div>
  );
};

export default WeatherAPI;
