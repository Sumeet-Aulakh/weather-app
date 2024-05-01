import { useEffect, useState } from "react";
import fetchWeather from "./fetchWeather.js";

const Dashboard = () => {
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    const data = fetchWeather();
    data.then((res) => {
      processData(res);
    });
  }, []);

  const processData = (data) => {
    for (let property in data) {
      console.log(property, data[property]);
    }
  };

  return (
    <div className="box-container ">
      <div className="box color-green" />
      <div className="box color-dark-lime" />
      <div className="box color-lime" />
      <div className="box color-khaki" />
      <div className="box color-white" />
      <div> {weatherData}</div>
    </div>
  );
};

export default Dashboard;
