"use client";
import { Col, Row } from "antd";
import React, { useState } from "react";
import styles from "./apartment-sketch.module.css";
import sketchImg from "@/images/sketch-property.png";
import Image from "next/image";

const ApartmentSketch = () => {
  //component state
  const [apartmentTab, setApartmentTab] = useState<string>("deluxePortion");
  //tab handler
  const handleTab = (tab: string): void => {
    setApartmentTab(tab);
  };
  return (
    <section className="ic_section_space">
      <div className="ic_container">
        <Row justify={"center"}>
          <Col xxl={12} xl={13}>
            <div className="ic_sec_heading text_center">
              <p className="ic_sub_title">Apartment Sketch</p>
              <h2 className="ic_title ic_title_color ">
                See Our Living Space Of Flat
              </h2>
              <p className="ic_des ic_body_color">
                Highlight the best of your properties by using the List Category
                shortcode.
              </p>
            </div>
          </Col>
        </Row>
        <div className={`${styles.ic_apartment_sketch_tab} ic_mb_40`}>
          <button
            onClick={() => handleTab("deluxePortion")}
            className={apartmentTab === "deluxePortion" ? styles.active : ""}
          >
            Deluxe Portion
          </button>
          <button
            onClick={() => handleTab("penthouse")}
            className={apartmentTab === "penthouse" ? styles.active : ""}
          >
            Penthouse
          </button>
          <button
            onClick={() => handleTab("garden")}
            className={apartmentTab === "garden" ? styles.active : ""}
          >
            Top Garden
          </button>
          <button
            onClick={() => handleTab("doubleHeight")}
            className={apartmentTab === "doubleHeight" ? styles.active : ""}
          >
            Double Height
          </button>
          <button
            onClick={() => handleTab("studio")}
            className={apartmentTab === "studio" ? styles.active : ""}
          >
            The Studio
          </button>
        </div>
        {apartmentTab === "deluxePortion" && (
          <div className={styles.ic_apartment_sketch_tab_content}>
            <Row
              justify={"space-between"}
              gutter={[{ lg: 24 }, { lg: 24 }]}
              align={"middle"}
            >
              <Col xxl={12} xl={13} lg={12}>
                <div className={styles.ic_left_content}>
                  <div className={`${styles.ic_title} ic_mb_30`}>
                    <h4 className="ic_title_color ic_mb_16">Deluxe Portion</h4>
                    <p className="ic_body_color">
                      Quisque ultricies eros vel laoreet malesuada. Phasellus
                      aliquam augue elit, nec porttitor purus fringilla ac.
                      Suspendisse ac ex pharetra, semper orci at, porttitor
                      purus. Duis fringilla dolor ut ante sagittis condimentum.
                    </p>
                  </div>
                  <div className={styles.ic_info_box}>
                    <div className={styles.ic_item}>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_left_text}`}
                      >
                        Total Area
                      </p>
                      <span className={styles.ic_line}></span>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_right_text}`}
                      >
                        2400 Sq.ft
                      </p>
                    </div>
                    <div className={styles.ic_item}>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_left_text}`}
                      >
                        Bedroom
                      </p>
                      <span className={styles.ic_line}></span>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_right_text}`}
                      >
                        140 Sq.ft
                      </p>
                    </div>
                    <div className={styles.ic_item}>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_left_text}`}
                      >
                        Bathroom
                      </p>
                      <span className={styles.ic_line}></span>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_right_text}`}
                      >
                        40 Sq.ft
                      </p>
                    </div>
                    <div className={styles.ic_item}>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_left_text}`}
                      >
                        Belcony
                      </p>
                      <span className={styles.ic_line}></span>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_right_text}`}
                      >
                        Allowed
                      </p>
                    </div>
                    <div className={styles.ic_item}>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_left_text}`}
                      >
                        Lounge
                      </p>
                      <span className={styles.ic_line}></span>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_right_text}`}
                      >
                        650 Sq.ft
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xxl={10} xl={11} lg={12}>
                <div className={styles.ic_sketch_img}>
                  <Image
                    src={sketchImg}
                    className="ic_img_fluid"
                    alt="sketch"
                  />
                </div>
              </Col>
            </Row>
          </div>
        )}
        {apartmentTab === "penthouse" && (
          <div className={styles.ic_apartment_sketch_tab_content}>
            <Row justify={"space-between"} align={"middle"}>
              <Col lg={12}>
                <div className={styles.ic_left_content}>
                  <div className={`${styles.ic_title} ic_mb_30`}>
                    <h4 className="ic_title_color ic_mb_16">Penthouse</h4>
                    <p className="ic_body_color">
                      Quisque ultricies eros vel laoreet malesuada. Phasellus
                      aliquam augue elit, nec porttitor purus fringilla ac.
                      Suspendisse ac ex pharetra, semper orci at, porttitor
                      purus. Duis fringilla dolor ut ante sagittis condimentum.
                    </p>
                  </div>
                  <div className={styles.ic_info_box}>
                    <div className={styles.ic_item}>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_left_text}`}
                      >
                        Total Area
                      </p>
                      <span className={styles.ic_line}></span>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_right_text}`}
                      >
                        2400 Sq.ft
                      </p>
                    </div>
                    <div className={styles.ic_item}>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_left_text}`}
                      >
                        Bedroom
                      </p>
                      <span className={styles.ic_line}></span>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_right_text}`}
                      >
                        140 Sq.ft
                      </p>
                    </div>
                    <div className={styles.ic_item}>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_left_text}`}
                      >
                        Bathroom
                      </p>
                      <span className={styles.ic_line}></span>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_right_text}`}
                      >
                        40 Sq.ft
                      </p>
                    </div>
                    <div className={styles.ic_item}>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_left_text}`}
                      >
                        Belcony
                      </p>
                      <span className={styles.ic_line}></span>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_right_text}`}
                      >
                        Allowed
                      </p>
                    </div>
                    <div className={styles.ic_item}>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_left_text}`}
                      >
                        Lounge
                      </p>
                      <span className={styles.ic_line}></span>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_right_text}`}
                      >
                        650 Sq.ft
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={10}>
                <div className={styles.ic_sketch_img}>
                  <Image
                    src={sketchImg}
                    className="ic_img_fluid"
                    alt="sketch"
                  />
                </div>
              </Col>
            </Row>
          </div>
        )}
        {apartmentTab === "garden" && (
          <div className={styles.ic_apartment_sketch_tab_content}>
            <Row justify={"space-between"} align={"middle"}>
              <Col lg={12}>
                <div className={styles.ic_left_content}>
                  <div className={`${styles.ic_title} ic_mb_30`}>
                    <h4 className="ic_title_color ic_mb_16">Top Garden</h4>
                    <p className="ic_body_color">
                      Quisque ultricies eros vel laoreet malesuada. Phasellus
                      aliquam augue elit, nec porttitor purus fringilla ac.
                      Suspendisse ac ex pharetra, semper orci at, porttitor
                      purus. Duis fringilla dolor ut ante sagittis condimentum.
                    </p>
                  </div>
                  <div className={styles.ic_info_box}>
                    <div className={styles.ic_item}>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_left_text}`}
                      >
                        Total Area
                      </p>
                      <span className={styles.ic_line}></span>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_right_text}`}
                      >
                        2400 Sq.ft
                      </p>
                    </div>
                    <div className={styles.ic_item}>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_left_text}`}
                      >
                        Bedroom
                      </p>
                      <span className={styles.ic_line}></span>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_right_text}`}
                      >
                        140 Sq.ft
                      </p>
                    </div>
                    <div className={styles.ic_item}>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_left_text}`}
                      >
                        Bathroom
                      </p>
                      <span className={styles.ic_line}></span>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_right_text}`}
                      >
                        40 Sq.ft
                      </p>
                    </div>
                    <div className={styles.ic_item}>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_left_text}`}
                      >
                        Belcony
                      </p>
                      <span className={styles.ic_line}></span>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_right_text}`}
                      >
                        Allowed
                      </p>
                    </div>
                    <div className={styles.ic_item}>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_left_text}`}
                      >
                        Lounge
                      </p>
                      <span className={styles.ic_line}></span>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_right_text}`}
                      >
                        650 Sq.ft
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={10}>
                <div className={styles.ic_sketch_img}>
                  <Image
                    className="ic_img_fluid"
                    src={sketchImg}
                    alt="sketch"
                  />
                </div>
              </Col>
            </Row>
          </div>
        )}
        {apartmentTab === "doubleHeight" && (
          <div className={styles.ic_apartment_sketch_tab_content}>
            <Row justify={"space-between"} align={"middle"}>
              <Col lg={12}>
                <div className={styles.ic_left_content}>
                  <div className={`${styles.ic_title} ic_mb_30`}>
                    <h4 className="ic_title_color ic_mb_16">Double Height</h4>
                    <p className="ic_body_color">
                      Quisque ultricies eros vel laoreet malesuada. Phasellus
                      aliquam augue elit, nec porttitor purus fringilla ac.
                      Suspendisse ac ex pharetra, semper orci at, porttitor
                      purus. Duis fringilla dolor ut ante sagittis condimentum.
                    </p>
                  </div>
                  <div className={styles.ic_info_box}>
                    <div className={styles.ic_item}>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_left_text}`}
                      >
                        Total Area
                      </p>
                      <span className={styles.ic_line}></span>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_right_text}`}
                      >
                        2400 Sq.ft
                      </p>
                    </div>
                    <div className={styles.ic_item}>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_left_text}`}
                      >
                        Bedroom
                      </p>
                      <span className={styles.ic_line}></span>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_right_text}`}
                      >
                        140 Sq.ft
                      </p>
                    </div>
                    <div className={styles.ic_item}>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_left_text}`}
                      >
                        Bathroom
                      </p>
                      <span className={styles.ic_line}></span>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_right_text}`}
                      >
                        40 Sq.ft
                      </p>
                    </div>
                    <div className={styles.ic_item}>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_left_text}`}
                      >
                        Belcony
                      </p>
                      <span className={styles.ic_line}></span>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_right_text}`}
                      >
                        Allowed
                      </p>
                    </div>
                    <div className={styles.ic_item}>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_left_text}`}
                      >
                        Lounge
                      </p>
                      <span className={styles.ic_line}></span>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_right_text}`}
                      >
                        650 Sq.ft
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={10}>
                <div className={styles.ic_sketch_img}>
                  <Image
                    className="ic_img_fluid"
                    src={sketchImg}
                    alt="sketch"
                  />
                </div>
              </Col>
            </Row>
          </div>
        )}
        {apartmentTab === "studio" && (
          <div className={styles.ic_apartment_sketch_tab_content}>
            <Row justify={"space-between"} align={"middle"}>
              <Col lg={12}>
                <div className={styles.ic_left_content}>
                  <div className={`${styles.ic_title} ic_mb_30`}>
                    <h4 className="ic_title_color ic_mb_16">The Studio</h4>
                    <p className="ic_body_color">
                      Quisque ultricies eros vel laoreet malesuada. Phasellus
                      aliquam augue elit, nec porttitor purus fringilla ac.
                      Suspendisse ac ex pharetra, semper orci at, porttitor
                      purus. Duis fringilla dolor ut ante sagittis condimentum.
                    </p>
                  </div>
                  <div className={styles.ic_info_box}>
                    <div className={styles.ic_item}>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_left_text}`}
                      >
                        Total Area
                      </p>
                      <span className={styles.ic_line}></span>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_right_text}`}
                      >
                        2400 Sq.ft
                      </p>
                    </div>
                    <div className={styles.ic_item}>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_left_text}`}
                      >
                        Bedroom
                      </p>
                      <span className={styles.ic_line}></span>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_right_text}`}
                      >
                        140 Sq.ft
                      </p>
                    </div>
                    <div className={styles.ic_item}>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_left_text}`}
                      >
                        Bathroom
                      </p>
                      <span className={styles.ic_line}></span>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_right_text}`}
                      >
                        40 Sq.ft
                      </p>
                    </div>
                    <div className={styles.ic_item}>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_left_text}`}
                      >
                        Belcony
                      </p>
                      <span className={styles.ic_line}></span>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_right_text}`}
                      >
                        Allowed
                      </p>
                    </div>
                    <div className={styles.ic_item}>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_left_text}`}
                      >
                        Lounge
                      </p>
                      <span className={styles.ic_line}></span>
                      <p
                        className={`ic_fw_500 ic_white_color ${styles.ic_right_text}`}
                      >
                        650 Sq.ft
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={10}>
                <div className={styles.ic_sketch_img}>
                  <Image
                    className="ic_img_fluid"
                    src={sketchImg}
                    alt="sketch"
                  />
                </div>
              </Col>
            </Row>
          </div>
        )}
      </div>
    </section>
  );
};

export default ApartmentSketch;
