import { Col, Row } from "antd";
import { BsClockHistory } from "react-icons/bs";
import { TbHome2, TbHomeHeart, TbMessage2Star } from "react-icons/tb";
import styles from "./widget.module.css";

const Widget = () => {
  return (
    <Row
      gutter={[
        { xs: 24, sm: 24, md: 24, lg: 24 },
        { xs: 24, sm: 24, md: 24, lg: 24 },
      ]}
    >
      <Col xs={24} sm={12} md={12} lg={12} xl={6}>
        <div className={styles.ic_widget_item}>
          <div className={styles.ic_content}>
            <p className="ic_title_color">All Properties</p>
            <h3 className={`${styles.ic_widget_heading} ic_title_color`}>
              589
            </h3>
          </div>
          <div className={styles.ic_icon}>
            <TbHome2 />
          </div>
        </div>
      </Col>
      <Col xs={24} sm={12} md={12} lg={12} xl={6}>
        <div className={styles.ic_widget_item}>
          <div className={styles.ic_content}>
            <p>Total Pending</p>
            <h3 className={`${styles.ic_widget_heading} ic_title_color`}>
              248
            </h3>
          </div>
          <div className={styles.ic_icon}>
            <BsClockHistory />
          </div>
        </div>
      </Col>
      <Col xs={24} sm={12} md={12} lg={12} xl={6}>
        <div className={styles.ic_widget_item}>
          <div className={styles.ic_content}>
            <p>Total Visitor Reviews</p>
            <h3 className={`${styles.ic_widget_heading} ic_title_color`}>
              896
            </h3>
          </div>
          <div className={styles.ic_icon}>
            <TbMessage2Star />
          </div>
        </div>
      </Col>
      <Col xs={24} sm={12} md={12} lg={12} xl={6}>
        <div className={styles.ic_widget_item}>
          <div className={styles.ic_content}>
            <p>Total Favorites</p>
            <h3 className={`${styles.ic_widget_heading} ic_title_color`}>
              289
            </h3>
          </div>
          <div className={styles.ic_icon}>
            <TbHomeHeart />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Widget;
