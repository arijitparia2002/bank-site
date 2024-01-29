import React from "react";
import Button from "./Button";
import styles from "../style";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient rounded-[20px] box-shadow`}
  >
    <div className="flex flex-col flex-1">
      <h2 className={styles.heading2}>
        Let's Try Our Service Now! <br />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam,
        voluptatum?
      </p>
    </div>
    <div>
      <Button styles="" />
    </div>
  </section>
);

export default CTA;
