import ReactMapGL, { Marker, Popup } from "react-map-gl";
import React, { useEffect, useState } from "react";
import { MapKey } from "./MapKey";
import getCenter from "geolib/es/getCenter";
import { useSelector } from "react-redux";

const Map = ({ foundGuides }) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  const cities = useSelector((state) => state.cities.cities);
  const searchInfo = useSelector((state) => state.guides.searchInfo);
  // const cityLocation = cities.find(
  //   (city) => city._id === searchInfo.city
  // ).location;

  let locations;
  let center;

  if (foundGuides) {
    locations = foundGuides.map((guide) => ({
      longitude: guide.location[0],
      latitude: guide.location[1],
    }));
    center = getCenter(locations);
  }

  useEffect(() => {
    setViewport({
      ...viewport,
      zoom: foundGuides.length === 0 ? 8 : 11,
      longitude: center.longitude || 35.1795933806353,
      latitude: center.latitude || 39.0604813685019,
    });
  }, [foundGuides]);

  // for city
  const [viewport, setViewport] = useState({
    width: "115%",
    height: "663px",
    longitude: 35.1795933806353,
    latitude: 39.0604813685019,
    zoom: 8,
  });
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/ibrashaheen/cksgk86h25bxw17uqom0h83s3"
      mapboxApiAccessToken={MapKey}
      // onClick={(event)=>console.log(event.lngLat)} //very important (solution key)
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {foundGuides.map((pen) => (
        <div key={pen.location[1]}>
          <Marker
            longitude={pen.location[0]}
            latitude={pen.location[1]}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              className=" cursor-pointer text-xl animate-bounce bg-yellow-300 h-8 w-10 rounded-full"
              onClick={() => setSelectedLocation(pen.location)}
            >
              ${pen.price}
            </p>
          </Marker>

          {selectedLocation[0] === pen.location[0] && ( //return it
            <Popup
              className=" z-10"
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              longitude={pen.location[0]}
              latitude={pen.location[1]}
            >
              <img src={pen.user.image} alt="" className=" h-20 w-full m-0 " />
              <p>{pen.user.fullname}</p>
            </Popup>
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
