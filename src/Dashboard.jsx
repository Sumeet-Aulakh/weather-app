import { useEffect, useState } from "react";
import fetchWeather from "./fetchWeather.js";

const Dashboard = () => {
  const [weatherData, setWeatherData] = useState();
  const [location, setLocation] = useState("Winnipeg");
  const [temperature, setTemperature] = useState(null);

  const data = [];

  useEffect(() => {
    const data = fetchWeather(location);
    data.then((res) => {
      processData(res);
    });
  }, []);

  const processData = (data) => {
    setLocation(data.location.name);
    setTemperature(data.current.temp_c);
  };

  return (
    <div className="box-container ">
      <div className="box color-green" />
      <div className="box color-dark-lime" />
      <div className="box color-lime" />
      <div className="box color-khaki" />
      <div className="box color-white" />
      <input
        type="text"
        value={location}
        // onChange={(e) => setLocation(e.target.value)}
      />
      <button> Check Weather </button>
      <div>
        {" "}
        Location {location}: {temperature}°C{" "}
      </div>
    </div>
  );
};

export default Dashboard;
