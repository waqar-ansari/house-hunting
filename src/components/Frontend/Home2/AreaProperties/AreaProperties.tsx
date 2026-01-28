"use client";
import { Col, Row } from "antd";
import styles from "./area-properties.module.css";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { useRef } from "react";
import Slider from "react-slick";
import areaProperties1 from "@/images/area-properties-01.png";
import areaProperties2 from "@/images/area-properties-02.png";
import areaProperties3 from "@/images/area-properties-03.png";
import areaProperties4 from "@/images/area-properties-04.png";
import Image from "next/image";
import Link from "next/link";
const AreaProperties = () => {
  // slider ref
  const sliderRef = useRef<Slider | null>(null);

  //slider setting
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
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
    <section className="ic_section_space">
      <div className="ic_container">
        <Row justify={"space-between"} align={"bottom"}>
          <Col xxl={10} xl={11}>
            <div className="ic_sec_heading">
              <p className="ic_sub_title">Area Properties</p>
              <h2 className="ic_title ic_title_color ">
                Find Your Dream House Search By Area
              </h2>
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
        <div
          className={`${styles.ic_area_properties_slider} ic_area_properties_slider`}
        >
          <Slider ref={sliderRef} {...sliderSettings}>
            <div className={styles.ic_area_properties_item}>
              <div className={styles.ic_thumbnail}>
                <Image src={areaProperties1} alt="RealtyClan" />
              </div>
              <div className={styles.ic_content}>
                <p>California</p>
                <h5>Luxury Family home</h5>
                <Link href="#" className="ic_btn ic_btn_md_outline ic_btn_md">
                  View Property
                </Link>
              </div>
            </div>
            <div className={styles.ic_area_properties_item}>
              <div className={styles.ic_thumbnail}>
                <Image src={areaProperties2} alt="RealtyClan" />
              </div>
              <div className={styles.ic_content}>
                <p>Newyork</p>
                <h5>Luxury Family home</h5>
                <Link href="#" className="ic_btn ic_btn_md_outline ic_btn_md">
                  View Property
                </Link>
              </div>
            </div>
            <div className={styles.ic_area_properties_item}>
              <div className={styles.ic_thumbnail}>
                <Image src={areaProperties3} alt="RealtyClan" />
              </div>
              <div className={styles.ic_content}>
                <p>Dubai</p>
                <h5>Luxury Family home</h5>
                <Link href="#" className="ic_btn ic_btn_md_outline ic_btn_md">
                  View Property
                </Link>
              </div>
            </div>
            <div className={styles.ic_area_properties_item}>
              <div className={styles.ic_thumbnail}>
                <Image src={areaProperties4} alt="RealtyClan" />
              </div>
              <div className={styles.ic_content}>
                <p>Las Vagas</p>
                <h5>Luxury Family home</h5>
                <Link href="#" className="ic_btn ic_btn_md_outline ic_btn_md">
                  View Property
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default AreaProperties;
