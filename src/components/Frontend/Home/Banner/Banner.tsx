import { Col, Row } from "antd";
import styles from "./banner.module.css";
import bannerBigImg from "@/images/banner-big.png";
import bannerSmallImg from "@/images/banner-small.png";
import Image from "next/image";
import Search from "./Search";

const Banner = () => {
  return (
    <div className={styles.ic_banner_area}>
      <div className="ic_container">
        <Row>
          <Col lg={14} md={24} sm={24} xs={24}>
            <div className={styles.ic_banner_left}>
              <div className={styles.ic_content}>
                <h6 className={`ic_white_color ${styles.sub_title}`}>
                  Real Estate Agency
                </h6>
                <h1 className={`ic_white_color ${styles.title}`}>
                  Find Your Dream House by us
                </h1>
                <p className={`ic_white_color ${styles.description}`}>
                  We are recognized for exceeding client expectations and
                  delivering <br /> great results through dedication, ease of
                  process,
                </p>
              </div>
              <div className={styles.ic_search_wrapper}>
                <Search />
              </div>
              <div className={styles.ic_banner_info}>
                <div className={styles.ic_info_item}>
                  <h5 className="ic_white_color">1800+</h5>
                  <p className="ic_white_color">Complete Projects</p>
                </div>
                <div className={styles.ic_info_item}>
                  <h5 className="ic_white_color">250+</h5>
                  <p className="ic_white_color">Experts Worker</p>
                </div>
                <div className={styles.ic_info_item}>
                  <h5 className="ic_white_color">126+</h5>
                  <p className="ic_white_color">Award Winning</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={10} md={24} sm={24} xs={24}>
            <div className={styles.ic_banner_right}>
              <div className={styles.ic_banner_big_img}>
                <Image src={bannerBigImg} alt="RealtyClan" />
              </div>
              <div className={styles.ic_banner_small_img}>
                <Image src={bannerSmallImg} alt="RealtyClan" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Banner;
