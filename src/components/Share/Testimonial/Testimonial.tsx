"use client";

import { Col, Row } from "antd";
import React, { useRef } from "react";
import Slider from "react-slick";
import styles from "./testimonial.module.css";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import testimonialImg1 from "@/images/testimonial-01.png";
import testimonialImg2 from "@/images/testimonial-02.png";
import testimonialImg3 from "@/images/testimonial-03.png";
import avaterImg1 from "@/images/testimonial-avater-01.png";
import avaterImg2 from "@/images/testimonial-avater-02.png";
import avaterImg3 from "@/images/testimonial-avater-03.png";
import Image from "next/image";
import { RiDoubleQuotesR } from "react-icons/ri";

const Testimonial = () => {
  // slider ref
  const sliderRef = useRef<Slider | null>(null);

  //slider setting
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
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

  //slider next prev handler
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  return (
    <section className="ic_section_space_bottom">
      <div className="ic_container">
        <Row justify={"space-between"} align={"bottom"}>
          <Col xxl={12} xl={13}>
            <div className="ic_sec_heading">
              <p className="ic_sub_title">Testimonial</p>
              <h2 className="ic_title ic_title_color ">What Our Client Say?</h2>
              <p className="ic_des ic_body_color">
                Highlight the best of your properties by using the List Category
                shortcode.
              </p>
            </div>
          </Col>
          <Col lg={3}>
            <div className={`${styles.ic_next_prev_btn} ic_mb_40`}>
              <button onClick={handlePrev}>
                <IoArrowBackOutline />
              </button>
              <button onClick={handleNext}>
                <IoArrowForwardOutline />
              </button>
            </div>
          </Col>
        </Row>
        <div className={styles.ic_testimonial_slider_wrap}>
          <Slider ref={sliderRef} {...sliderSettings}>
            <div className={styles.ic_testimonial_item}>
              <div className={styles.ic_tes_thumbnail}>
                <Image src={testimonialImg1} alt="testimonial" />
              </div>
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
            <div className={styles.ic_testimonial_item}>
              <div className={styles.ic_tes_thumbnail}>
                <Image src={testimonialImg2} alt="testimonial" />
              </div>
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
            <div className={styles.ic_testimonial_item}>
              <div className={styles.ic_tes_thumbnail}>
                <Image src={testimonialImg3} alt="testimonial" />
              </div>
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
            <div className={styles.ic_testimonial_item}>
              <div className={styles.ic_tes_thumbnail}>
                <Image src={testimonialImg1} alt="testimonial" />
              </div>
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
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
