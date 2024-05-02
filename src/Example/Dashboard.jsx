import { useState } from "react";
import WeatherAPI from "./WeatherAPI";

const Dashboard = () => {
  const [city, setCity] = useState("Winnipeg");

  return (
    <div>
      <WeatherAPI city={city} />
    </div>
  );
};

export default Dashboard;
