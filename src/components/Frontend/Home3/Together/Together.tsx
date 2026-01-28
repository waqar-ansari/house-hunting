"use client";
import React, { useState } from "react";
import styles from "./together.module.css";
import { Col, Row } from "antd";
import icon1 from "@/images/together-icon1.svg";
import icon2 from "@/images/together-icon2.svg";
import icon3 from "@/images/together-icon3.svg";
import icon4 from "@/images/together-icon4.svg";
import icon5 from "@/images/together-icon5.svg";
import Image from "next/image";
import Slider from "react-slick";
import FsLightbox from "fslightbox-react";
import videoBanner from "@/images/video-banner-02.png";

const Together = () => {
  const [toggler, setToggler] = useState(false);
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className={`ic_section_space_top ${styles.ic_together}`}>
        <div className="ic_container">
          <Row justify={"center"}>
            <Col lg={12}>
              <div className="ic_sec_heading text_center">
                <h2 className="ic_title ic_white_color ">
                  Let’s work together
                </h2>
                <p className="ic_des ">
                  We’re ready to join forces with you. Share your vision, and
                  let’s turn ideas.
                </p>
              </div>
            </Col>
          </Row>
          <div className={styles.ic_together_icon}>
            <Slider {...settings}>
              <div>
                <div className={styles.ic_together_item}>
                  <Image src={icon1} alt="logo" />
                </div>
              </div>
              <div>
                <div className={styles.ic_together_item}>
                  <Image src={icon2} alt="logo" />
                </div>
              </div>
              <div>
                <div className={styles.ic_together_item}>
                  <Image src={icon3} alt="logo" />
                </div>
              </div>
              <div>
                <div className={styles.ic_together_item}>
                  <Image src={icon4} alt="logo" />
                </div>
              </div>
              <div>
                <div className={styles.ic_together_item}>
                  <Image src={icon5} alt="logo" />
                </div>
              </div>
              <div>
                <div className={styles.ic_together_item}>
                  <Image src={icon2} alt="logo" />
                </div>
              </div>
              <div>
                <div className={styles.ic_together_item}>
                  <Image src={icon3} alt="logo" />
                </div>
              </div>
              <div>
                <div className={styles.ic_together_item}>
                  <Image src={icon4} alt="logo" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section className={styles.ic_together_video}>
        <div className="ic_container">
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
    </>
  );
};

export default Together;
