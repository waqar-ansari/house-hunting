"use client";
import avatar from "@/images/avatar.png";
import { Col, Row } from "antd";
import Image from "next/image";
import { useState } from "react";
import { RiUploadCloud2Line } from "react-icons/ri";
import styles from "./profile-info.module.css";

const ProfileInformation = () => {
  //component state
  const [file, setFile] = useState<string | null>(null);
  //handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setFile(reader.result as string);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div>
      <Row
        gutter={[
          { xs: 24, sm: 24, md: 24, lg: 24 },
          { xs: 24, sm: 24, md: 24, lg: 24 },
        ]}
      >
        <Col xs={24} sm={24} md={24} lg={8}>
          <h6 className="ic_fw_600 ic_body_color ic_mb_10">Profile Image</h6>
          <div className={styles.ic_profile_img}>
            <div className={styles.ic_avatar}>
              <Image src={file || avatar} width={64} height={64} alt="Avatar" />
            </div>
            <div className={styles.ic_upload_btn}>
              <span className={styles.icon}>
                <RiUploadCloud2Line />
              </span>
              <p className="ic_primary_color">Click to upload</p>
              <input
                type="file"
                accept="image/*"
                multiple={false}
                onChange={handleFileChange}
              />
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={16}>
          <h6 className="ic_fw_600 ic_body_color ic_mb_10">Personal Info</h6>
          <div className={styles.ic_personal_info}>
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
                      <label htmlFor="first_name">First Name</label>
                      <input
                        type="text"
                        id="first_name"
                        placeholder="First Name"
                      />
                    </div>
                  </Col>
                  <Col xs={24} sm={12} md={12} lg={12}>
                    <div className={styles.ic_input_group}>
                      <label htmlFor="last_name">Last Name</label>
                      <input
                        type="text"
                        id="last_name"
                        placeholder="Last Name"
                      />
                    </div>
                  </Col>
                  <Col xs={24} sm={12} md={12} lg={12}>
                    <div className={styles.ic_input_group}>
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" placeholder="Email" />
                    </div>
                  </Col>
                  <Col xs={24} sm={12} md={12} lg={12}>
                    <div className={styles.ic_input_group}>
                      <label htmlFor="phone">Phone</label>
                      <input type="phone" id="phone" placeholder="Phone" />
                    </div>
                  </Col>
                  <Col xs={24}>
                    <div className={styles.ic_input_group}>
                      <label htmlFor="bio">Bio</label>
                      <textarea
                        id="bio"
                        placeholder="Write about your self"
                      ></textarea>
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
        </Col>
      </Row>
    </div>
  );
};

export default ProfileInformation;
