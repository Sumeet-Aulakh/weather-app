const fetchWeather = async () => {
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=7e5703dfe9fd476faed193211243004&q=London&aqi=no`
  );
  const data = await res.json();

  return data;
};

export default fetchWeather;
