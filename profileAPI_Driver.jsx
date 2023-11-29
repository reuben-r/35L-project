import React, { useState, useEffect } from "react";
import "./signup.css";

const DistanceCalculator = () => {
  const place = "91367";
  const place2 = "90096";
  const place3 = "90071";
  const [map, setMap] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAagYhKsf953bG7ul1LSawNoNCxsE6CWMQ&libraries=places&callback=initMap`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      initMap();
    };

    document.head.appendChild(script);

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
        } else {
          console.error(
            "Geocode was not successful for the following reason:",
            status,
          );
        }
      });
    }
  };

  const createMap = (center) => {
    const newMap = new window.google.maps.Map(document.getElementById("map"), {
      center: center,
      zoom: 12,
    });

    setMap(newMap);

    addMarker(newMap, place, "Home", "blue", "https://www.google.com");
    addMarker(newMap, place2, "Jacob", "green");
    addMarker(newMap, place3, "School", "yellow");
  };

  const [requestStatus, setRequestStatus] = useState(null); // State to track request status

  const addMarker = (map, location, label, color, link) => {
    if (location) {
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
                `Do you want to book a drive for ${label}?`,
              );
              if (shouldRequestRide) {
                setRequestStatus(`You have booked a Drive with ${label}`);
                // Perform any additional actions when the request is submitted
              }
            });
          }
        } else {
          console.error(
            "Geocode was not successful for the following reason:",
            status,
          );
        }
      });
    }
  };

  return (
    <div>
      <div id="map" style={{ height: "400px", width: "100%" }}></div>
      {requestStatus && <p>{requestStatus}</p>}
    </div>
  );
};

export default DistanceCalculator;
