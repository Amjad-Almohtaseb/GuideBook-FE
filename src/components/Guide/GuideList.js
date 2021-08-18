import React from "react";
import { useSelector } from "react-redux";
import Map from "../Map";
import GuideItem from "./GuideItem";

const GuideList = () => {
  const foundGuides = useSelector((state) => state.guides.foundguides);
  const guideList = foundGuides.map((guide) => (
    <GuideItem guide={guide} key={guide._id} />
  ));
  return (
    <div className="">

      <div className=" guides absolute">{guideList}</div>

      <div className="" >
        <section className="h-96">
          <Map />
        </section>
      </div>

    </div>
  );
};

export default GuideList;
