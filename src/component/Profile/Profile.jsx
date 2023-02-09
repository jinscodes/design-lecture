import React from "react";
import { useState, useEffect } from "react";
import ProfileHover from "./ProfileHover";
import ProfileImg from "./ProfileImg";
import Persona from "../Persona/Persona";

export default function Profile({ id, img, isNew, info }) {
  const [isHovering, setIsHovering] = useState(false);
  const [isHiding, setIsHiding] = useState(false);
  const [basicInfo, setBasicInfo] = useState([]); // persona contents
  const [sumInfo, setSumInfo] = useState([]); // card contents
  const [tagsInfo, setTagsInfo] = useState([]); // tags contents
  const [goalsInfo, setGoalsInfo] = useState([]); // goals contents
  const [senarioInfo, setSenarioInfo] = useState();

  useEffect(() => {
    setSumInfo(info.basic_info.sum_info);
    setBasicInfo(info.basic_info);
    setTagsInfo(info.tags);
    setGoalsInfo(info.goals);
    setSenarioInfo(info.senario);
  }, [info.basic_info, info.tags, info.goals, info.senario]);

  return (
    <div className="profile_frame">
      <div
        className="profile"
        onMouseEnter={() => {
          setIsHovering((prev) => !prev);
        }}
        onMouseLeave={() => {
          setIsHovering((prev) => !prev);
        }}
        onClick={() => {
          setIsHiding((prev) => !prev);
        }}
      >
        <ProfileImg img={img} isNew={isNew} />
        <h1>{sumInfo.name}</h1>
        <p>{sumInfo.title}</p>
        <p>{sumInfo.descript}</p>
        {isHovering === true ? (
          <ProfileHover title="Click to Open Persona" />
        ) : (
          ""
        )}
      </div>
      {isHiding === true ? (
        <Persona
          img={img}
          name={sumInfo.name}
          basicInfo={basicInfo}
          tagsInfo={tagsInfo}
          goalsInfo={goalsInfo}
          senarioInfo={senarioInfo}
        />
      ) : (
        ""
      )}
    </div>
  );
}
