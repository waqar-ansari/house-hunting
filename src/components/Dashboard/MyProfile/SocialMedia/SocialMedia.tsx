import { Col, Row } from "antd";
import styles from "./social-media.module.css";

const SocialMedia = () => {
  return (
    <div className={styles.ic_social_media_wrap}>
      <form action="#">
        <div className={styles.ic_form_wrap}>
          <Row
            gutter={[
              { xs: 24, sm: 24, md: 24, lg: 24 },
              { xs: 24, sm: 24, md: 24, lg: 24 },
            ]}
          >
            <Col xs={24} sm={12} md={12} lg={12}>
              <div className={styles.ic_input_group}>
                <label htmlFor="facebook_url">Facebook URL</label>
                <input
                  type="text"
                  id="facebook_url"
                  placeholder="Enter facebook url"
                />
              </div>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12}>
              <div className={styles.ic_input_group}>
                <label htmlFor="twitter_url">Twitter URL</label>
                <input
                  type="text"
                  id="twitter_url"
                  placeholder="Enter twitter url"
                />
              </div>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12}>
              <div className={styles.ic_input_group}>
                <label htmlFor="instagram_url">Instagram URL</label>
                <input
                  type="text"
                  id="instagram_url"
                  placeholder="Enter instagram url"
                />
              </div>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12}>
              <div className={styles.ic_input_group}>
                <label htmlFor="linkedin_url">Linkedin URL</label>
                <input
                  type="text"
                  id="linkedin_url"
                  placeholder="Enter linkedin url"
                />
              </div>
            </Col>
          </Row>
        </div>
        <div className={styles.ic_form_btn_wrap}>
          <button className={`ic_btn ic_btn_md ${styles.ic_cancel_btn}`}>
            Cancel
          </button>
          <button className="ic_btn ic_btn_md">Save Changes</button>
        </div>
      </form>
    </div>
  );
};

export default SocialMedia;
