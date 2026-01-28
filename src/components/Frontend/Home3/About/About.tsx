import React from "react";
import { Col, Row } from "antd";
import Image from "next/image";
import styles from "./about.module.css";

import icon1 from "@/images/about-icon1.svg";
import icon2 from "@/images/about-icon2.svg";
import icon3 from "@/images/about-icon3.svg";
import icon4 from "@/images/about-icon4.svg";
import img1 from "@/images/about-right-img.png";
import Link from "next/link";

const About = () => {
  return (
    <section className="ic_section_space">
      <div className="ic_container">
        <div className={styles.ic_about_main}>
          <Row gutter={[24, 24]} align="middle">
            <Col xs={24} md={24} lg={12}>
              <div className={styles.ic_about_left}>
                <div
                  className={`ic_sec_heading ic_mb_30 ${styles.ic_about_heading_top}`}
                >
                  <p className="ic_sub_title">About Us</p>
                  <h2 className="ic_title ic_title_color">
                    We Provide Right Choice of Properties
                  </h2>
                  <p className="ic_des ic_body_color">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words. We believe in
                    more than just buying and selling properties—we believe in
                    turning dreams into reality.
                  </p>
                </div>

                <div className={`ic_mb_35 ${styles.ic_about_inf_bottom}`}>
                  <div className={styles.ic_about_item_main}>
                    <div className={`ic_mb_20 ${styles.ic_about_item}`}>
                      <div className={`ic_flex_center ${styles.ic_about_icon}`}>
                        <Image src={icon1} alt="Client Centric Approach" />
                      </div>
                      <p>Client Centric Approach</p>
                    </div>
                    <div className={styles.ic_about_item}>
                      <div className={`ic_flex_center ${styles.ic_about_icon}`}>
                        <Image src={icon3} alt="Marketing and Promotion" />
                      </div>
                      <p>Marketing and Promotion</p>
                    </div>
                  </div>

                  <div className={styles.ic_about_item_main}>
                    <div className={`ic_mb_20 ${styles.ic_about_item}`}>
                      <div className={`ic_flex_center ${styles.ic_about_icon}`}>
                        <Image src={icon2} alt="Best Home Layout" />
                      </div>
                      <p>Best Home Layout</p>
                    </div>
                    <div className={styles.ic_about_item}>
                      <div className={`ic_flex_center ${styles.ic_about_icon}`}>
                        <Image src={icon4} alt="Representing Buyers" />
                      </div>
                      <p>Representing Buyers</p>
                    </div>
                  </div>
                </div>
                <div>
                  <Link href="#" className="ic_btn ic_btn_xl">
                    Know More
                  </Link>
                </div>
              </div>
            </Col>

            <Col xs={24} md={24} lg={12}>
              <div className={styles.ic_about_right}>
                <Image
                  src={img1}
                  alt="About Image"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default About;
