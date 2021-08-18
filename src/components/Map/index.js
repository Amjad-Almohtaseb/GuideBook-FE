import ReactMapGL, { Marker, Popup } from "react-map-gl";
import React, { useState } from "react";
import { MapKey } from "./MapKey";
import getCenter from "geolib/es/getCenter";

const Map = () => {
  const [selectedLocation, setSelectedLocation] = useState({});

  const guidesLocation = [
    {
      latitude: 41.00824,
      longitude: 28.978359,
      title: "Amjad",
      img: "https://cdn5.vectorstock.com/i/1000x1000/34/94/traveler-or-tourist-avatar-icon-image-vector-15543494.jpg",
    },
    {
      latitude: 41.01824,
      longitude: 28.948359,
      title: "Ibraheem",
      img: "https://cdn5.vectorstock.com/i/1000x1000/34/94/traveler-or-tourist-avatar-icon-image-vector-15543494.jpg",
    },
    {
      latitude: 41.02824,
      longitude: 28.878359,
      title: "Ahmad",
      img: "https://cdn5.vectorstock.com/i/1000x1000/34/94/traveler-or-tourist-avatar-icon-image-vector-15543494.jpg",
    },
    {
      latitude: 41.03824,
      longitude: 28.828359,
      title: "Laila",
      img: "https://cdn5.vectorstock.com/i/1000x1000/34/94/traveler-or-tourist-avatar-icon-image-vector-15543494.jpg",
    },
    {
      latitude: 41.05824,
      longitude: 28.898359,
      title: "Coded",
      img: "https://cdn5.vectorstock.com/i/1000x1000/34/94/traveler-or-tourist-avatar-icon-image-vector-15543494.jpg",
    },
    {
      latitude: 41.08824,
      longitude: 28.928359,
      title: "moayad",
      img: "https://cdn5.vectorstock.com/i/1000x1000/34/94/traveler-or-tourist-avatar-icon-image-vector-15543494.jpg",
    },
  ];

  const locations = guidesLocation.map((guide) => ({
    latitude: guide.latitude,
    longitude: guide.longitude,
  }));

  const center = getCenter(locations);

  // for city
  const [viewport, setViewport] = useState({
    width: "55%",
    height: "725px",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/ibrashaheen/cksgk86h25bxw17uqom0h83s3"
      mapboxApiAccessToken={MapKey}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {guidesLocation.map((pen) => (
        <div key={pen.latitud}>
          <Marker
            longitude={pen.longitude}
            latitude={pen.latitude}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p className=" cursor-pointer text-2xl animate-bounce"
            onClick={()=> setSelectedLocation(pen)}
            >🔰</p>
          </Marker>

          {selectedLocation.longitude === pen.longitude && (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              longitude={pen.longitude}
              latitude={pen.latitude}
            >
              <img src={pen.img} alt=""  className=" h-16 w-16"/>
              <p>{pen.title}</p>
            </Popup>
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
