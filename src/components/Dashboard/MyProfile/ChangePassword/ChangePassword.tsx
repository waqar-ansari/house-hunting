import { Col, Row } from "antd";
import styles from "./change-password.module.css";

const ChangePassword = () => {
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
            <Col xs={24}>
              <div className={styles.ic_input_group}>
                <label htmlFor="old_password">Old Password</label>
                <input
                  type="password"
                  id="old_password"
                  placeholder="Enter old password"
                />
              </div>
            </Col>
            <Col xs={24} sm={12} lg={12}>
              <div className={styles.ic_input_group}>
                <label htmlFor="old_password">New Password</label>
                <input
                  type="password"
                  id="new_password"
                  placeholder="Enter new password"
                />
              </div>
            </Col>
            <Col xs={24} sm={12} lg={12}>
              <div className={styles.ic_input_group}>
                <label htmlFor="confirm_password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm_password"
                  placeholder="Enter confirm password"
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

export default ChangePassword;
