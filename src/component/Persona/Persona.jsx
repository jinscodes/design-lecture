import React, { useState, useEffect } from "react";
import ProfileImg from "../Profile/ProfileImg";
import AppImg from "./AppImg";
import Features from "./Features";
import Goals from "./Goals";
import Senario from "./Senario";
import Tags from "./Tags";

export default function Persona({
  img,
  name,
  basicInfo,
  tagsInfo,
  goalsInfo,
  senarioInfo,
}) {
  return (
    <div className="persona">
      <div className="persona-frame">
        <div className="profile-left">
          <ProfileImg img={img} />
          <h1>{name}</h1>
          <p className="slogan">{basicInfo.slogan}</p>
          <Features basicInfo={basicInfo} />
        </div>
        <div className="profile-right">
          <div className="tags">
            <Tags personality={tagsInfo} />
          </div>
          <div className="goal-appImg">
            <Goals goalsInfo={goalsInfo} />
            <AppImg />
          </div>
          <div className="bottom-senario">
            <Senario senarioInfo={senarioInfo} />
          </div>
        </div>
      </div>
    </div>
  );
}
