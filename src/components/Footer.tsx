import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} flex-col ${styles.paddingY}`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="logo"
          className="w-[266px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} max-w-[310px] mt-4`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink, index) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="font-popins font-medium text-[18px] leading-[27px] text-white mb-4">
              {footerlink.title}
            </h4>
            <ul className="list-none">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-popins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 && "mb-4"
                  }`}
                >
                  <a href={link.link} className={`${styles.paragraph} `}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between flex-col md:flex-row items-center pt-6 border-t-[1px] border-gray-500">
      <p className="font-popins font-medium text-[18px] leading-[27px] text-white mb-4 text-center">
        2021 Arijit Paria © All rights reserved.{" "}
      </p>
      <div className="flex flex-row mt-6 md:mt-0">
        {socialMedia.map((social, index) => (
          <img
            src={social.icon}
            alt={social.id}
            key={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${socialMedia.length - 1 !== index && `mr-6`}`}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
