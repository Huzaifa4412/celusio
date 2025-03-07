"use client";
import React, { useEffect, useState } from "react";
import styles from "./Preloader.module.css";
import Image from "next/image";
import { font } from "@/utils/font";
const Preloader = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  });
  return (
    <>
      {loading && (
        <section id="preloader-section">
          <div id="preloader">
            <div id="ctn-preloader" className={`${styles.ctn_preloader}`}>
              <div className={`${styles.animation_preloader}`}>
                {/* <!-- Spinner --> */}
                {/* <div className={styles.spinner}></div> */}
                <Image
                  src="/logo.svg"
                  className="flex items-center invert justify-center"
                  width={200}
                  height={200}
                  alt="Logo"
                ></Image>
                <div className={`${styles.txt_loading}`}>
                  {"Celusio Solutions".split("").map((item, id) => {
                    return (
                      <span
                        data-text-preloader={item}
                        key={id}
                        className={` ${styles.letters_loading} text-amber-400 ${font.urbanist.className}`}
                      >
                        {item}
                      </span>
                    );
                  })}
                </div>
                {/* <!-- End: Text Loading --> */}
              </div>

              {/* <!-- Start: Preloader sides - Model 1 --> */}
              <div
                className={`${styles.loader_section} ${styles.section_left}`}
              ></div>
              <div
                className={`${styles.loader_section} ${styles.section_right}`}
              ></div>
              {/* <!-- End: Preloader sides - Model 1 --> */}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Preloader;
