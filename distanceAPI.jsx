import React, { useState, useEffect } from "react";
import "./signup.css";

const DistanceCalculator = () => {
  const [place, setPlace] = useState("");
  const [place2, setPlace2] = useState("");
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    const calc = document.createElement("script");
    calc.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAagYhKsf953bG7ul1LSawNoNCxsE6CWMQ&libraries=places&callback=initMap`;

    document.head.appendChild(calc);

    return () => {
      document.head.removeChild(calc);
    };
  }, []);

  const calculateDistance = () => {
    const service = new window.google.maps.DistanceMatrixService();

    service.getDistanceMatrix(
      {
        origins: [place],
        destinations: [place2],
        travelMode: "DRIVING",
        unitSystem: window.google.maps.UnitSystem.IMPERIAL
      },
      (response) => {
        setDistance(response.rows[0].elements[0].distance.text);
      }
    );
  };

  return (
    <div>
      <input
        id="place"
        onChange={(e) => setPlace(e.target.value)}
        placeholder="Address 1"
      />

      <input
        id="place2"
        onChange={(e) => setPlace2(e.target.value)}
        placeholder="Address 2"
      />

      <button onClick={calculateDistance}>Calculate Distance</button>

      <h1>{distance}</h1>
    </div>
  );
};

export default DistanceCalculator;
