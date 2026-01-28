import React from "react";
import styles from "./fecility.module.css";
import { Col, Row } from "antd";
import Image from "next/image";
import icon1 from "@/images/facility-icon1.svg";
import icon1color from "@/images/facility-icon1-color.svg";
import icon2 from "@/images/facility-icon2.svg";
import icon2color from "@/images/facility-icon2-color.svg";
import icon3 from "@/images/facility-icon3.svg";
import icon3color from "@/images/facility-icon3-color.svg";
import icon4 from "@/images/facility-icon4.svg";
import icon4color from "@/images/facility-icon4-color.svg";
import icon5 from "@/images/facility-icon5.svg";
import icon5color from "@/images/facility-icon5-color.svg";
import icon6 from "@/images/facility-icon6.svg";
import icon6color from "@/images/facility-icon6-color.svg";

const Facility = () => {
  return (
    <section className={`ic_section_space ${styles.ic_facility}`}>
      <div className="ic_container">
        <Row justify={"center"}>
          <Col xxl={12} xl={13} lg={15}>
            <div className="ic_sec_heading text_center">
              <p className="ic_sub_title">Core Feature</p>
              <h2 className="ic_title ic_title_color ">
                Core Feature Facility
              </h2>
              <p className="ic_des ic_body_color">
                From intuitive user interfaces to seamless integrations and
                advanced
              </p>
            </div>
          </Col>
        </Row>
        <Row justify="center" gutter={[24, 24]} className="ic_mb_30">
          <Col sm={12} lg={8}>
            <div className={styles.ic_facility_item}>
              <div className={`ic_mb_30 ${styles.ic_icon}`}>
                <Image src={icon1} alt="icon" />
                <Image
                  src={icon1color}
                  alt="icon"
                  className={styles.ic_color_icon}
                />
              </div>
              <h4 className="ic_mb_24">Prime location</h4>
              <p>
                Our property is located in a prime area that offers unmatched
                accessibility, visibility, and value.{" "}
              </p>
            </div>
          </Col>
          <Col sm={12} lg={8}>
            <div className={styles.ic_facility_item}>
              <div className={`ic_mb_30 ${styles.ic_icon}`}>
                <Image src={icon2} alt="icon" />
                <Image
                  src={icon2color}
                  alt="icon"
                  className={styles.ic_color_icon}
                />
              </div>
              <h4 className="ic_mb_24">Modern living</h4>
              <p>
                The quality of real state and materials used in the building is
                crucial Features building. our modern living spaces combine
                sleek
              </p>
            </div>
          </Col>
          <Col sm={12} lg={8}>
            <div className={styles.ic_facility_item}>
              <div className={`ic_mb_30 ${styles.ic_icon}`}>
                <Image src={icon3} alt="icon" />
                <Image
                  src={icon3color}
                  alt="icon"
                  className={styles.ic_color_icon}
                />
              </div>
              <h4 className="ic_mb_24">Eco friendly</h4>
              <p>
                Our eco-friendly approach is designed to reduce environmental
                impact while enhancing your quality of life.
              </p>
            </div>
          </Col>
          <Col sm={12} lg={8}>
            <div className={styles.ic_facility_item}>
              <div className={`ic_mb_30 ${styles.ic_icon}`}>
                <Image src={icon4} alt="icon" />
                <Image
                  src={icon4color}
                  alt="icon"
                  className={styles.ic_color_icon}
                />
              </div>
              <h4 className="ic_mb_24">Modern technology</h4>
              <p>
                Our spaces are equipped with cutting-edge technology to enhance
                comfort, convenience, and security. from smart home automation
              </p>
            </div>
          </Col>
          <Col sm={12} lg={8}>
            <div className={styles.ic_facility_item}>
              <div className={`ic_mb_30 ${styles.ic_icon}`}>
                <Image src={icon5} alt="icon" />
                <Image
                  src={icon5color}
                  alt="icon"
                  className={styles.ic_color_icon}
                />
              </div>
              <h4 className="ic_mb_24">Easy accessibility</h4>
              <p>
                Enjoy seamless connectivity with our conveniently located
                property that ensures easy access to major roads, schools
              </p>
            </div>
          </Col>
          <Col sm={12} lg={8}>
            <div className={styles.ic_facility_item}>
              <div className={`ic_mb_30 ${styles.ic_icon}`}>
                <Image src={icon6} alt="icon" />
                <Image
                  src={icon6color}
                  alt="icon"
                  className={styles.ic_color_icon}
                />
              </div>
              <h4 className="ic_mb_24">Security cameras</h4>
              <p>
                Our state-of-the-art security cameras are strategically placed
                to ensure continuous monitoring of the premises.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Facility;
