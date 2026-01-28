"use client";
import React, { useState } from "react";
import styles from "./toplocation.module.css";
import { Col, Row } from "antd";
import img1 from "@/images/top-location1.png";
import img2 from "@/images/top-location2.png";
import img3 from "@/images/top-location3.png";
import img4 from "@/images/top-location4.png";
import img5 from "@/images/top-location5.png";
import img6 from "@/images/top-location6.png";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

const TopLocation = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <section className={`ic_section_space ${styles.ic_top_location}`}>
      <div className="ic_container">
        <Row justify="center">
          <Col xxl={12} xl={13}>
            <div className="ic_sec_heading text_center">
              <h2 className="ic_title ic_white_color">Top Location Property</h2>
              <p className="ic_des ic_white_color">
                We’re ready to join forces with you. Share your vision, and
                let’s turn ideas.
              </p>
            </div>
          </Col>
        </Row>
        <div className={styles.ic_top_location_item}>
          {[img1, img2, img3, img4, img5, img6].map((img, idx) => (
            <div
              key={`top-location-${idx}`}
              className={`${styles.imageWrapper} ${
                activeIndex === idx ? styles.active : ""
              }`}
              onMouseEnter={() => setActiveIndex(idx)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={img}
                  alt={`Image ${idx + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className={styles.overlay}>
                <div className={styles.ic_overlay_inf}>
                  <button>
                    <MdArrowOutward />
                  </button>
                  <div className={styles.ic_overlay_text}>
                    <h5 className="h5_2">London</h5>
                    <p className="body_s ic_fw_500">3 Listings</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopLocation;
