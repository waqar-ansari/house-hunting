"use client";
import { Col, Row } from "antd";
import React from "react";
import styles from "./clientreview.module.css";
import Slider from "react-slick";
import avaterImg1 from "@/images/testimonial-avater-01.png";
import avaterImg2 from "@/images/testimonial-avater-02.png";
import avaterImg3 from "@/images/testimonial-avater-03.png";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const ClientReview = () => {
  //slider setting
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
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
    <section className="ic_section_space ic_client_review">
      <div className="ic_container">
        <Row justify={"center"}>
          <Col xxl={14} xl={13}>
            <div className="ic_sec_heading text_center ">
              <p className="ic_sub_title">Customers Says</p>
              <h2 className="ic_title ic_title_color ">
                What Our Customers Says
              </h2>
              <p className="ic_des ic_title_light_color">
                Their satisfaction drives us to continually deliver outstanding
                service and quality.
              </p>
            </div>
          </Col>
        </Row>
        <div className="ic_testimonial_slider2_wrapper">
          <Slider {...sliderSettings}>
            <div className="ic_testimonial_slider2_item">
              <div className={styles.ic_tes_content}>
                <div className={`${styles.ic_user} ic_mb_16`}>
                  <Image src={avaterImg1} alt="avatar" />
                  <div className={styles.ic_name_designation}>
                    <h5 className="h5_2 ic_title_color">Johnson</h5>
                    <p className="ic_title_light_color ">Client Of Company</p>
                  </div>
                </div>
                <div className={`${styles.ic_des} ic_mb_35`}>
                  <p className="ic_title_light_color">
                    Denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great
                  </p>
                </div>
                <div className={styles.ic_ratting}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
            <div className="ic_testimonial_slider2_item">
              <div className={styles.ic_tes_content}>
                <div className={`${styles.ic_user} ic_mb_16`}>
                  <Image src={avaterImg2} alt="avatar" />
                  <div className={styles.ic_name_designation}>
                    <h5 className="h5_2 ic_title_color">Johnson</h5>
                    <p className="ic_title_light_color ">Client Of Company</p>
                  </div>
                </div>
                <div className={`${styles.ic_des} ic_mb_35`}>
                  <p className="ic_title_light_color">
                    Denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great
                  </p>
                </div>
                <div className={styles.ic_ratting}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
            <div className="ic_testimonial_slider2_item">
              <div className={styles.ic_tes_content}>
                <div className={`${styles.ic_user} ic_mb_16`}>
                  <Image src={avaterImg3} alt="avatar" />
                  <div className={styles.ic_name_designation}>
                    <h5 className="h5_2 ic_title_color">Johnson</h5>
                    <p className="ic_title_light_color">Client Of Company</p>
                  </div>
                </div>
                <div className={`${styles.ic_des} ic_mb_35`}>
                  <p className="ic_title_light_color">
                    Denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great
                  </p>
                </div>
                <div className={styles.ic_ratting}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
            <div className="ic_testimonial_slider2_item">
              <div className={styles.ic_tes_content}>
                <div className={`${styles.ic_user} ic_mb_16`}>
                  <Image src={avaterImg3} alt="avatar" />
                  <div className={styles.ic_name_designation}>
                    <h5 className="h5_2 ic_title_color">Johnson</h5>
                    <p className="ic_title_light_color">Client Of Company</p>
                  </div>
                </div>
                <div className={`${styles.ic_des} ic_mb_35`}>
                  <p className="ic_title_light_color">
                    Denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great
                  </p>
                </div>
                <div className={styles.ic_ratting}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
