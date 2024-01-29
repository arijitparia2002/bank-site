import React from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import { card } from "../assets";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few steps.
      </h2>
      <p className={`${styles.paragraph} mt-5 max-w-[47-px]`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
        excepturi possimus molestiae aliquam similique quod facere fugiat velit,
        tempora officia eligendi delectus aut id quaerat sapiente quis deleniti
        est perferendis.
      </p>
      <Button styles="mt-10"/>
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card image" className="h-full w-full" />
    </div>
  </section>
);

export default CardDeal;
