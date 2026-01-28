"use client";
import { Col, Row } from "antd";
import Slider from "react-slick";
import styles from "./popular-place.module.css";
import Image from "next/image";
import popularPlaceImg1 from "@/images/popular-place-01.png";
import popularPlaceImg2 from "@/images/popular-place-02.png";
import popularPlaceImg3 from "@/images/popular-place-03.png";
import popularPlaceImg4 from "@/images/popular-place-04.png";
import popularPlaceImg5 from "@/images/popular-place-05.png";
import popularPlaceImg6 from "@/images/popular-place-06.png";

const PopularPlace = () => {
  //slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="ic_section_space">
      <div className="ic_container">
        <Row justify={"center"}>
          <Col xl={13} lg={15}>
            <div className="ic_sec_heading text_center">
              <p className="ic_sub_title">Popular Place</p>
              <h2 className="ic_title ic_title_color ">
                Find Places To Stay Nearby
              </h2>
              <p className="ic_des ic_body_color">
                Highlight the best of your properties by using the List Category
                shortcode. You can list specific properties categories, types,
                cities, areas.
              </p>
            </div>
          </Col>
        </Row>
        <div className={styles.ic_popular_place_wrapper}>
          <Slider {...sliderSettings}>
            <div className={styles.slider_item}>
              <div className={styles.ic_popular_place_item}>
                <div className={styles.ic_thumb}>
                  <Image
                    src={popularPlaceImg1}
                    alt="popular place"
                    className="ic_img_fluid"
                  />
                </div>
                <div className={styles.ic_content}>
                  <h6 className="ic_fw_600 ic_title_color">Jersey City</h6>
                  <p className="ic_body_color body_s">4 Hours Away</p>
                </div>
              </div>
            </div>
            <div className={styles.slider_item}>
              <div className={styles.ic_popular_place_item}>
                <div className={styles.ic_thumb}>
                  <Image
                    src={popularPlaceImg2}
                    alt="popular place"
                    className="ic_img_fluid"
                  />
                </div>
                <div className={styles.ic_content}>
                  <h6 className="ic_fw_600 ic_title_color">Galveston</h6>
                  <p className="ic_body_color body_s">1 Hours Away</p>
                </div>
              </div>
            </div>
            <div className={styles.slider_item}>
              <div className={styles.ic_popular_place_item}>
                <div className={styles.ic_thumb}>
                  <Image
                    src={popularPlaceImg3}
                    alt="popular place"
                    className="ic_img_fluid"
                  />
                </div>
                <div className={styles.ic_content}>
                  <h6 className="ic_fw_600 ic_title_color">San Francisco</h6>
                  <p className="ic_body_color body_s">3 Hours Away</p>
                </div>
              </div>
            </div>
            <div className={styles.slider_item}>
              <div className={styles.ic_popular_place_item}>
                <div className={styles.ic_thumb}>
                  <Image
                    src={popularPlaceImg4}
                    alt="popular place"
                    className="ic_img_fluid"
                  />
                </div>
                <div className={styles.ic_content}>
                  <h6 className="ic_fw_600 ic_title_color">
                    Dunao, California
                  </h6>
                  <p className="ic_body_color body_s">4 Hours Away</p>
                </div>
              </div>
            </div>
            <div className={styles.slider_item}>
              <div className={styles.ic_popular_place_item}>
                <div className={styles.ic_thumb}>
                  <Image
                    src={popularPlaceImg5}
                    alt="popular place"
                    className="ic_img_fluid"
                  />
                </div>
                <div className={styles.ic_content}>
                  <h6 className="ic_fw_600 ic_title_color">Manhattan</h6>
                  <p className="ic_body_color body_s">2 Hours Away</p>
                </div>
              </div>
            </div>
            <div className={styles.slider_item}>
              <div className={styles.ic_popular_place_item}>
                <div className={styles.ic_thumb}>
                  <Image
                    src={popularPlaceImg6}
                    alt="popular place"
                    className="ic_img_fluid"
                  />
                </div>
                <div className={styles.ic_content}>
                  <h6 className="ic_fw_600 ic_title_color">Upper East side</h6>
                  <p className="ic_body_color body_s">3 Hours Away</p>
                </div>
              </div>
            </div>
            <div className={styles.slider_item}>
              <div className={styles.ic_popular_place_item}>
                <div className={styles.ic_thumb}>
                  <Image
                    src={popularPlaceImg1}
                    alt="popular place"
                    className="ic_img_fluid"
                  />
                </div>
                <div className={styles.ic_content}>
                  <h6 className="ic_fw_600 ic_title_color">Jersey City</h6>
                  <p className="ic_body_color body_s">4 Hours Away</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default PopularPlace;
