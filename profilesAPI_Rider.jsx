import React, { useState, useEffect } from "react";
import "./signup.css";

const DistanceCalculator = () => {
  const place = "91367";
  const place2 = "90096";
  const place3 = "90071";
  const [map, setMap] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedOption, setSelectedOption] = useState("arrival");
  const [requestStatus, setRequestStatus] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAagYhKsf953bG7ul1LSawNoNCxsE6CWMQ&libraries=places&callback=initMap`;
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

    addMarker(newMap, place, "Home", "blue");
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
                // send to Backend
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

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
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
        <div>
          <button onClick={() => handleDaySelect("Monday")}>Monday</button>
          <button onClick={() => handleDaySelect("Tuesday")}>Tuesday</button>
          <button onClick={() => handleDaySelect("Wednesday")}>
            Wednesday
          </button>
          <button onClick={() => handleDaySelect("Thursday")}>Thursday</button>
          <button onClick={() => handleDaySelect("Friday")}>Friday</button>
          <button onClick={() => handleDaySelect("Saturday")}>Saturday</button>
          <button onClick={() => handleDaySelect("Sunday")}>Sunday</button>
        </div>
      </div>
      <div>
        <label>Select Option:</label>
        <div>
          <button onClick={() => handleOptionSelect("arrival")}>Arrival</button>
          <button onClick={() => handleOptionSelect("departure")}>
            Departure
          </button>
        </div>
      </div>

      <div id="map" style={{ height: "400px", width: "100%" }}></div>
      {requestStatus && <p>{requestStatus}</p>}
      <div>
        {requestStatus && (
          <div>
            <button onClick={handleAdditionalRequests}>
              Make Additional Requests
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DistanceCalculator;
