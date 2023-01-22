import React from "react";
import style from "./section.module.css";
import Image from "./Image";
import monitor from "./Assets/monitor.png";
import mobile from "./Assets/mobile.jpg";
import camera from "./Assets/camera.jpg";
import dryer from "./Assets/dryer.png";
import styled from "styled-components";
import firstBackgroundPhoto from "./Assets/FirstBackgroundImage.webp";
import SecondBackgroundPhoto from "./Assets/SecondBackgroundImage.webp";
const FirstBackgroundImage = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  background-image: url(${firstBackgroundPhoto});
  background-position: center;
  background-size: cover;
`;

const SecondBackgroundImage = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  background-image: url(${SecondBackgroundPhoto});
  background-position: center;
  background-size: cover;
`;

const Section = () => {
  return (
    <>
      <Helper
        firstImage={monitor}
        secondImage={camera}
        thirdImage={dryer}
        fourthImage={mobile}
        BackgroundImage={FirstBackgroundImage}
      />
      <br />
      <Helper
        firstImage={mobile}
        secondImage={monitor}
        thirdImage={dryer}
        fourthImage={camera}
        BackgroundImage={SecondBackgroundImage}
      />
    </>
  );
};

const Helper = ({
  firstImage,
  secondImage,
  thirdImage,
  fourthImage,
  BackgroundImage,
}) => {
  return (
    <>
      <div className={style.section_wrapper}>
        <div className={style.section_left}>
          <div className={style.section_left_top}>
            <h2>Best Of </h2>
            <h2>Electronics</h2>
            <button className={style.btn}>View All</button>
          </div>
          <BackgroundImage />
        </div>

        <div className={style.section_right}>
          <Image photo={firstImage} name="Printers" price="8000" companies="Philips realme"/>
          <Image photo={secondImage} name="TV" price="4000" companies="samsung redmi"/>
          <Image photo={thirdImage} name="Best of Hair Dryers" price="600" companies="Philips realme" />
          <Image photo={fourthImage} name="camera" price="300" companies="Sony nicon"/>
        </div>
      </div>
    </>
  );
};
export default Section;
