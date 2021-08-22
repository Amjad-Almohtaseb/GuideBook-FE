import ReactMapGL, { Marker, Popup } from "react-map-gl";
import React, { useState } from "react";
import { MapKey } from "./MapKey";
import getCenter from "geolib/es/getCenter";
import { useSelector } from "react-redux";

const Map = ({foundGuides}) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  const cities = useSelector(state => state.cities.cities)
  const searchInfo = useSelector(state => state.guides.searchInfo)
  const cityLocation= cities.find(city=> city._id === searchInfo.city).location
  console.log(searchInfo)
  console.log(cityLocation)
  
  // const cityLocation = foundGuides[0].city.location


  // const cityLocation = foundGuides.map((guide) => ({
  //   latitude: guide.city.location[1],
  //   longitude: guide.city.location[0],
  // }));



  const locations = foundGuides.map((guide) => ({
    latitude: guide.location[1],
    longitude: guide.location[0],
  }));

  const center = getCenter(locations);

  // for city
  const [viewport, setViewport] = useState({
    width: "115%",
    height: "663px",
    latitude: center.latitude || cityLocation[1],
    longitude: center.longitude || cityLocation[0],
    zoom: 11,
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
            <p className=" cursor-pointer text-2xl animate-bounce bg-white h-10 w-12 rounded-full"
            onClick={()=> setSelectedLocation(pen.location)}
            >${pen.price}</p>
          </Marker>

          {selectedLocation[0] === pen.location[0] && ( //return it 
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              longitude={pen.location[0]}
              latitude={pen.location[1]}
            >
              <img src={pen.user.image} alt=""  className=" h-16 w-16"/>
              <p>{pen.user.fullname}</p>
            </Popup>
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
