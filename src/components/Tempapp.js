import React, { useEffect, useState } from "react";
import "./css/style.css";
const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ef50f38e16ec3ed1ecc34754014edc68`;
      const res = await fetch(url);
      console.log(res);
      const response = await res.json();
      console.log(".......", response);
      setCity(response.main);
    };
    fetchApi();
  }, [search]);
  let d = new Date();
  let date = d.getDate();
  let year = d.getFullYear();
  let month = d.toLocaleString("default", { month: "long" });
  let day = d.toLocaleString("default", { weekday: "long" });

  let time = d.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return (
    <>
      <div className="container">
        <div className="box">
          <div className="inputData">
            <input
              type="search"
              className="inputFeild"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          {!city ? (
            <p>No Data Found </p>
          ) : (
            <div>
              <div className="info">
                <h2 className="location">
                  <i className="fas fa-street-view" />
                  {search}
                </h2>
                <h1 className="temp">{city.temp}°C</h1>
                <p className="card-text">
                  {/* <span>{day}</span> */}
                  <p> {time}</p>
                  <span>{month}</span>
                  <span> {date}</span>
                  <span>{year}</span><br/>
                  
                </p>
                <h5 className="tempmin_max">
                  Min : {city.temp_min}°C | Max : {city.temp_max}°C
                </h5>
              </div>
              <div className="wave1"></div>
              <div className="wave2"></div>
              <div className="wave3"></div>
              <div className="wave3"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Tempapp;
