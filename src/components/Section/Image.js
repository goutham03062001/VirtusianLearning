import React from "react";
import style from "./section.module.css";
import styled from "styled-components";

const Image = ({ photo, name, price, companies }) => {

  return (
    <div className={style.Image_container}>
      <div className={style.top}>
        <img src={photo} alt="pic" className={style.pic}/>
      </div>

      <div className={style.bottom}>
        <p>{name}</p>
        <p className={style.productDisc}>&#8377; {price}</p>
        <p>{companies}</p>
      </div>
    </div>
  );
};

export default Image;
