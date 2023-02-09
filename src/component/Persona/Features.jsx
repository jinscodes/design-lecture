import React from "react";

export default function Features({ basicInfo }) {
  return (
    <ul className="features">
      <li>
        <span className="title-color">나이:</span> {basicInfo.age}
      </li>
      <li>
        <span className="title-color">직업:</span> {basicInfo.work}
      </li>
      <li>
        <span className="title-color">사는 곳:</span> {basicInfo.location}
      </li>
      <li>
        <span className="title-color">가족관계:</span> {basicInfo.family}
      </li>
      <li>
        <span className="title-color">성격:</span> {basicInfo.personality}
      </li>
      <li>
        <span className="title-color">좋아하는 것:</span> {basicInfo.favorite}
      </li>
      <li>
        <span className="title-color">니즈:</span> {basicInfo.needs}
      </li>
      <li>
        <span className="title-color">자주 사용하는 앱:</span> {basicInfo.app}
      </li>
      <li>
        <span className="title-color">학업:</span> {basicInfo.study}
      </li>
    </ul>
  );
}
