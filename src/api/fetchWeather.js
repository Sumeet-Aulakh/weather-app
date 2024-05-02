const fetchWeather = async (city) => {
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=7e5703dfe9fd476faed193211243004&q=${city}&aqi=no`
  );

  if (!res.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  return res.json();
};

export default fetchWeather;
