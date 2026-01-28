"use client";
import { Col, Row } from "antd";
import React, { useState } from "react";
import styles from "./video.module.css";
import videoBanner from "@/images/video-banner-02.png";
import Image from "next/image";
import FsLightbox from "fslightbox-react";

const Video = () => {
  //component state
  const [toggler, setToggler] = useState(false);
  return (
    <section className={`ic_section_space ${styles.ic_video_area}`}>
      <div className="ic_container">
        <Row justify={"center"}>
          <Col xxl={14} xl={13}>
            <div className="ic_sec_heading text_center position_relative">
              <p className="ic_sub_title">Our Video</p>
              <h2 className="ic_title ic_title_color ">
                Making living spaces More Beautiful
              </h2>
              <p className="ic_des ic_body_color">
                Over 29,000 people work for us in more than 70 countries all
                over the This breadth of global coverage, combined with
                specialist services
              </p>
            </div>
          </Col>
        </Row>
        <div className={styles.ic_video_wrapper}>
          <div className={styles.ic_video_banner}>
            <Image src={videoBanner} alt="video banner" />
          </div>
          <div className={styles.ic_video_play_btn}>
            <button
              className={styles.ic_play_btn}
              onClick={() => setToggler(!toggler)}
            ></button>
          </div>
          <FsLightbox
            toggler={toggler}
            sources={["https://www.youtube.com/watch?v=3nQNiWdeH2Q"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Video;
