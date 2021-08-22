import React from "react";
import { useSelector } from "react-redux";
import Map from "../Map";
import GuideItem from "./GuideItem";

const GuideList = () => {
  const foundGuides = useSelector((state) => state.guides.foundguides);
  const guideList = foundGuides.map((guide) => (
    // <GuideItem guide={guide} key={guide._id} />
   <> <GuideItem guide={guide} key={guide._id} /> <hr className=" w-3/4 mx-auto"/></>

  ));
  return (
    <div className="">

      <div className=" guides">{guideList}</div>


        <div className="absolute mapbox">
          <Map foundGuides={foundGuides} />
        </div>


    </div>
  );
};

export default GuideList;
