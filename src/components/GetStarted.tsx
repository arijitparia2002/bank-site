import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} bg-primary w-full h-full rounded-full flex-col`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-popins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient mr-2">Get</span>
        </p>
        <img
          src={arrowUp}
          alt="arrowup"
          className="w-[23px] h-[23px] object-contain"
        />
      </div>
      <p className="font-popins font-medium text-[18px] leading-[23px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
