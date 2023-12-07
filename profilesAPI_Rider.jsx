import React, { useState, useEffect } from "react";
import "./signup.css";

const DistanceCalculator = () => {
  const place = "91367";
  const place2 = "90096";
  const place3 = "90071";
  const [map, setMap] = useState(null);
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedOption, setSelectedOption] = useState("arrival");
  const [requestStatus, setRequestStatus] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=KEY&libraries=places&callback=initMap`;
    script.async = true;
    script.defer = true;

    document.head.appendChild(script);

    window.initMap = () => {
      initMap();
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const initMap = () => {
    const geocoder = new window.google.maps.Geocoder();

    if (place) {
      geocoder.geocode({ address: place }, (results, status) => {
        if (status === "OK" && results[0]) {
          const location = results[0].geometry.location;
          createMap(location);
        }
      });
    }
  };

  const createMap = (center) => {
    const newMap = new window.google.maps.Map(document.getElementById("map"), {
      center: center,
      zoom: 10,
    });

    setMap(newMap);

    addMarker(newMap, place, "Home", "blue", "https://www.google.com");
    addMarker(newMap, place2, "Jacob", "green");
    addMarker(newMap, place3, "School", "yellow");
  };

  const addMarker = (map, location, label, color, link) => {
    if (map) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: location }, (results, status) => {
        if (status === "OK" && results[0]) {
          const marker = new window.google.maps.Marker({
            position: results[0].geometry.location,
            map,
            title: label,
            icon: `http://maps.google.com/mapfiles/ms/icons/${color}-dot.png`,
          });

          if (label !== "Home" && label !== "School") {
            marker.addListener("click", () => {
              const shouldRequestRide = window.confirm(
                `Do you want to request a ${
                  selectedOption === "arrival" ? "ride to" : "ride from"
                } ${label} on ${selectedDay}?`,
              );
              if (shouldRequestRide) {
                setRequestStatus(
                  `Request to ${label} on ${selectedDay} submitted`,
                );
                // Send to Backend
              } else {
                setSelectedDay(null);
                setSelectedOption("arrival");
                setRequestStatus(null);
              }
            });
          }
        }
      });
    }
  };

  const handleDaySelect = (day) => {
    setSelectedDay(day);
  };

  const handleOptionSelect = (event) => {
    setSelectedOption(event);
  };

  const handleAdditionalRequests = () => {
    setSelectedDay(null);
    setSelectedOption("arrival");
    setRequestStatus(null);
  };

  return (
    <div>
      <div>
        <label>Select Day:</label>
        <select onChange={(e) => handleDaySelect(e.target.value)}>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
      </div>
      <div>
        <label>Select Option:</label>
        <select onChange={(e) => handleOptionSelect(e.target.value)}>
          <option value="arrival">Arrival</option>
          <option value="departure">Departure</option>
        </select>
      </div>
      {requestStatus && (
        <div>
          <button onClick={handleAdditionalRequests}>
            Make Additional Requests
          </button>
        </div>
      )}
      <div id="map" style={{ height: "400px", width: "100%" }}></div>
      {requestStatus && <p>{requestStatus}</p>}
    </div>
  );
};

export default DistanceCalculator;
