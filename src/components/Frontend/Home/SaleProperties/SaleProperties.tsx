import { Col, Row } from "antd";
import styles from "./sale-properties.module.css";
import salePropertiesImg1 from "@/images/sell-properties-01.png";
import salePropertiesImg2 from "@/images/sell-properties-02.png";
import salePropertiesImg3 from "@/images/sell-properties-03.png";
import avatarImg from "@/images/avater.png";
import Image from "next/image";
import { MdFullscreen } from "react-icons/md";
import { FaBath, FaBed } from "react-icons/fa";
import { FaCarRear } from "react-icons/fa6";

const SaleProperties = () => {
  return (
    <section className={`ic_section_space ${styles.ic_sale_properties_area}`}>
      <div className="ic_container">
        <Row gutter={{ lg: 16 }}>
          <Col lg={12} className="gutter-row">
            <div className={styles.ic_sell_properties_left}>
              <Row
                gutter={[
                  { lg: 16, md: 16, sm: 16, xs: 16 },
                  { lg: 16, md: 16, sm: 16, xs: 16 },
                ]}
              >
                <Col lg={12} md={12} sm={12} xs={24} className="gutter-row">
                  <Image src={salePropertiesImg1} alt="sale properties" />
                </Col>
                <Col lg={12} md={12} sm={12} xs={24} className="gutter-row">
                  <Image src={salePropertiesImg2} alt="sale properties" />
                </Col>
                <Col lg={24} md={24} sm={24} xs={24} className="gutter-row">
                  <Image src={salePropertiesImg3} alt="sale properties" />
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={12} className="gutter-row">
            <div className={styles.ic_sell_properties_right}>
              <div className="ic_sec_heading ">
                <p className="ic_sub_title">Sale Properties</p>
                <h2 className="ic_title ic_title_color ">
                  Today Sells Properties
                </h2>
                <p className="ic_des ic_body_color">
                  {`There are many variations of passages of Lorem Ipsum available, but the majority
have suffered alteration in some form, by injected humour, or randomised words
which don't look even slightly believable. If you are going.`}
                </p>
              </div>
              <div className={`${styles.ic_properties_info_list} ic_mb_40`}>
                <ul>
                  <li className="ic_title_color">
                    Live Music Cocerts at Luviana
                  </li>
                  <li className="ic_title_color">
                    Our SecretIsland Boat Tour is Just for You
                  </li>
                  <li className="ic_title_color">
                    publishing packages and web page editors
                  </li>
                  <li className="ic_title_color">
                    Nemo enim ipsam voluptatem quia voluptas
                  </li>
                </ul>
              </div>
              <div className={`${styles.ic_properties_info} ic_mb_30`}>
                <div className={styles.ic_info_item}>
                  <p className={`body_s ic_title_color ${styles.ic_count}`}>
                    2110 <MdFullscreen />
                  </p>
                  <p className={`body_s ic_body_color ${styles.ic_title}`}>
                    square Ft
                  </p>
                </div>
                <div className={styles.ic_info_item}>
                  <p className={`body_s ic_title_color ${styles.ic_count}`}>
                    2110 <FaBed />
                  </p>
                  <p className={`body_s ic_body_color ${styles.ic_title}`}>
                    Bedrooms
                  </p>
                </div>
                <div className={styles.ic_info_item}>
                  <p className={`body_s ic_title_color ${styles.ic_count}`}>
                    2110 <FaBath />
                  </p>
                  <p className={`body_s ic_body_color ${styles.ic_title}`}>
                    Bathrooms
                  </p>
                </div>
                <div className={styles.ic_info_item}>
                  <p className={`body_s ic_title_color ${styles.ic_count}`}>
                    2110 <FaCarRear />
                  </p>
                  <p className={`body_s ic_body_color ${styles.ic_title}`}>
                    Car parking
                  </p>
                </div>
              </div>
              <div className={styles.ic_properties_user}>
                <div className={styles.ic_avatar}>
                  <Image src={avatarImg} alt="avatar" width={46} height={46} />
                </div>
                <div className={styles.ic_content}>
                  <p className="ic_fw_600 ic_title_color">Benjamin</p>
                  <a
                    href="mailto:benjamin@gmail.com"
                    className="ic_secondary_color"
                  >
                    benjamin@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default SaleProperties;
