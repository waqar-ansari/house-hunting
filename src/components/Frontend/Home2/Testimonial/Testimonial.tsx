"use client";
import { Col, Row } from "antd";
import React from "react";
import styles from "./testimonial.module.css";
import Slider from "react-slick";
import { RiDoubleQuotesR } from "react-icons/ri";
import avaterImg1 from "@/images/testimonial-avater-01.png";
import avaterImg2 from "@/images/testimonial-avater-02.png";
import avaterImg3 from "@/images/testimonial-avater-03.png";
import Image from "next/image";

const Testimonial = () => {
  //slider setting
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 991,
        centerMode: false,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="ic_section_space_bottom">
      <div className="ic_container">
        <Row justify={"center"}>
          <Col xxl={14} xl={13}>
            <div className="ic_sec_heading text_center ">
              <p className="ic_sub_title">Testmonial</p>
              <h2 className="ic_title ic_title_color ">Clients Feedbacks</h2>
              <p className="ic_des ic_body_color">
                Highlight the best of your properties by using the List Category
                shortcode.
              </p>
            </div>
          </Col>
        </Row>
        <div className="ic_testimonial_slider2_wrapper">
          <Slider {...sliderSettings}>
            <div className="ic_testimonial_slider2_item">
              <div className={styles.ic_tes_content}>
                <div className={styles.ic_quote}>
                  <RiDoubleQuotesR />
                </div>
                <div className={`${styles.ic_user} ic_mb_16`}>
                  <Image src={avaterImg1} alt="avatar" />
                  <div className={styles.ic_name_designation}>
                    <h5 className="h5_2 ic_title_color">Johnson</h5>
                    <p className="ic_primary_color">Client Of Company</p>
                  </div>
                </div>
                <div className={styles.ic_des}>
                  <p className="ic_body_color">
                    Denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great
                  </p>
                </div>
              </div>
            </div>
            <div className="ic_testimonial_slider2_item">
              <div className={styles.ic_tes_content}>
                <div className={styles.ic_quote}>
                  <RiDoubleQuotesR />
                </div>
                <div className={`${styles.ic_user} ic_mb_16`}>
                  <Image src={avaterImg2} alt="avatar" />
                  <div className={styles.ic_name_designation}>
                    <h5 className="h5_2 ic_title_color">Johnson</h5>
                    <p className="ic_primary_color">Client Of Company</p>
                  </div>
                </div>
                <div className={styles.ic_des}>
                  <p className="ic_body_color">
                    Denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great
                  </p>
                </div>
              </div>
            </div>
            <div className="ic_testimonial_slider2_item">
              <div className={styles.ic_tes_content}>
                <div className={styles.ic_quote}>
                  <RiDoubleQuotesR />
                </div>
                <div className={`${styles.ic_user} ic_mb_16`}>
                  <Image src={avaterImg3} alt="avatar" />
                  <div className={styles.ic_name_designation}>
                    <h5 className="h5_2 ic_title_color">Johnson</h5>
                    <p className="ic_primary_color">Client Of Company</p>
                  </div>
                </div>
                <div className={styles.ic_des}>
                  <p className="ic_body_color">
                    Denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great
                  </p>
                </div>
              </div>
            </div>
            <div className="ic_testimonial_slider2_item">
              <div className={styles.ic_tes_content}>
                <div className={styles.ic_quote}>
                  <RiDoubleQuotesR />
                </div>
                <div className={`${styles.ic_user} ic_mb_16`}>
                  <Image src={avaterImg3} alt="avatar" />
                  <div className={styles.ic_name_designation}>
                    <h5 className="h5_2 ic_title_color">Johnson</h5>
                    <p className="ic_primary_color">Client Of Company</p>
                  </div>
                </div>
                <div className={styles.ic_des}>
                  <p className="ic_body_color">
                    Denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
