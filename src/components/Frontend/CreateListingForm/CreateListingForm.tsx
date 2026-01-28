"use client";
import { Checkbox, Col, Radio, Row, Select, Space } from "antd";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import styles from "./create-listing.module.css";
const CreateListingForm = () => {
  //component state
  const [fileContents, setFileContents] = useState<string[]>([]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);
      const newFileContents: string[] = [];
      fileArray.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          newFileContents.push(e.target?.result as string);
          // Update the state after all files are processed
          if (newFileContents.length === fileArray.length) {
            setFileContents((prevContents) => [
              ...prevContents,
              ...newFileContents,
            ]);
          }
        };
        if (file.type.startsWith("image/")) {
          reader.readAsDataURL(file);
        } else {
          alert("File type not supported. Please upload an image.");
        }
      });
    }
  };

  //handle remove image

  const handleRemoveImage = (index: number) => {
    const newFileContents = fileContents.filter((_, i) => i !== index);
    setFileContents(newFileContents);
  };

  return (
    <div className={styles.ic_create_listing_form_wrap}>
      <form action="#">
        <div className={styles.ic_create_listing_form_item}>
          <div className={styles.ic_title}>
            <h5 className="h5_2 ic_title_color">General Section</h5>
          </div>
          <div className={styles.ic_form_content}>
            <div className={styles.ic_form_group}>
              <label className={styles.ic_form_label}>
                Select Listing Type:
              </label>
              <Radio.Group>
                <Space direction="vertical">
                  <Radio value="general">
                    <p className="ic_fw_500 ic_title_color">General</p>
                  </Radio>
                  <Radio value="featured">
                    <span className="ic_fw_500 ic_title_color">Featured</span>
                    <span className="body_s ic_title_color">
                      (Top of the Search result and listings pages for a number
                      days and it requires an additional payment.)
                    </span>
                  </Radio>
                </Space>
              </Radio.Group>
            </div>
            <div className={styles.ic_form_group}>
              <label className={styles.ic_form_label}>Title</label>
              <input
                type="text"
                className={styles.ic_form_control}
                placeholder="Enter your title"
              />
            </div>
            <div className={styles.ic_form_group}>
              <label className={styles.ic_form_label}>Sale Price</label>
              <Select
                placeholder="Select price range"
                className={`${styles.ic_form_select} ic_form_select_global`}
                options={[
                  { value: "100-200", label: "100-200" },
                  { value: "300-400", label: "300-400" },
                  { value: "500-600", label: "500-600" },
                  { value: "700-1000", label: "700-1000" },
                ]}
              />
            </div>
            <div className={styles.ic_form_group}>
              <label className={styles.ic_form_label}>Description</label>
              <textarea
                className={`${styles.ic_form_control} ${styles.ic_textarea}`}
                placeholder="Type description"
              ></textarea>
            </div>
            <div className={styles.ic_form_group}>
              <label className={styles.ic_form_label}>Tagline</label>
              <input
                type="text"
                className={styles.ic_form_control}
                placeholder="Type tagline"
              />
            </div>
            <div className={styles.ic_form_group}>
              <label className={styles.ic_form_label}>Tag</label>
              <Select
                placeholder="Select tag"
                className={`${styles.ic_form_select} ic_form_select_global`}
                options={[
                  { value: "tag1", label: "Tag-1" },
                  { value: "tag2", label: "Tag-2" },
                  { value: "tag3", label: "Tag-3" },
                ]}
              />
            </div>
          </div>
        </div>
        <div className={styles.ic_create_listing_form_item}>
          <div className={styles.ic_title}>
            <h5 className="h5_2 ic_title_color">Images & Video</h5>
          </div>
          <div className={styles.ic_form_content}>
            <div className={styles.ic_form_group}>
              <div className={styles.ic_file_upload}>
                <div className="ic_mb_20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                  >
                    <path
                      d="M30 31.4645L40.6065 42.071L37.071 45.6065L32.5 41.0375V55H27.5V41.0325L22.9289 45.6065L19.3934 42.071L30 31.4645ZM30 5C38.9835 5 46.386 11.769 47.3852 20.4849C53.2145 22.0789 57.5 27.414 57.5 33.75C57.5 40.922 52.009 46.8115 45.0015 47.444L45 42.5C45 34.2158 38.2842 27.5 30 27.5C21.904 27.5 15.3061 33.914 15.0103 41.9378L15 42.5L15.001 47.444C7.9924 46.813 2.5 40.923 2.5 33.75C2.5 27.414 6.7856 22.0789 12.6162 20.4853C13.614 11.769 21.0165 5 30 5Z"
                      fill="#5C727D"
                    />
                  </svg>
                </div>
                <div className={styles.ic_upload_btn}>
                  <button className="ic_btn ic_btn_lg">Select File</button>
                  <input
                    type="file"
                    accept="image/*"
                    multiple={true}
                    onChange={handleFileChange}
                  />
                </div>
                <div>
                  {fileContents.length > 0 && (
                    <div className={styles.ic_preview_wrap}>
                      {fileContents.map((content, index) => (
                        <div key={index} className={styles.ic_preview_item}>
                          <Image
                            src={content}
                            alt={`Uploaded ${index}`}
                            width={100}
                            height={100}
                          />
                          <span
                            onClick={() => handleRemoveImage(index)}
                            className={styles.ic_close}
                          >
                            <IoIosCloseCircle />
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.ic_form_group}>
              <label className={styles.ic_form_label}>Video</label>
              <input
                type="text"
                className={styles.ic_form_control}
                placeholder="Only Youtube & video URLs."
              />
            </div>
          </div>
        </div>
        <div className={styles.ic_create_listing_form_item}>
          <div className={styles.ic_title}>
            <h5 className="h5_2 ic_title_color">Property Details</h5>
          </div>
          <div className={styles.ic_form_content}>
            <div className={styles.ic_form_group}>
              <label className={styles.ic_form_label}>Beds</label>
              <Select
                placeholder="Select beds"
                className={`${styles.ic_form_select} ic_form_select_global`}
                options={[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                  { value: "4", label: "4" },
                  { value: "5", label: "5" },
                ]}
              />
            </div>
            <div className={styles.ic_form_group}>
              <label className={styles.ic_form_label}>Bathrooms</label>
              <Select
                placeholder="Select bathrooms"
                className={`${styles.ic_form_select} ic_form_select_global`}
                options={[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                  { value: "4", label: "4" },
                  { value: "5", label: "5" },
                ]}
              />
            </div>
            <div className={styles.ic_form_group}>
              <label className={styles.ic_form_label}>Garages</label>
              <Select
                placeholder="Select bathrooms"
                className={`${styles.ic_form_select} ic_form_select_global`}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                ]}
              />
            </div>
            <div className={styles.ic_form_group}>
              <label className={styles.ic_form_label}>Person</label>
              <Select
                placeholder="Select person"
                className={`${styles.ic_form_select} ic_form_select_global`}
                options={[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                  { value: "4", label: "4" },
                  { value: "5", label: "5" },
                ]}
              />
            </div>
            <div className={styles.ic_form_group}>
              <label className={styles.ic_form_label}>Area (sq ft)</label>
              <input
                type="text"
                className={styles.ic_form_control}
                placeholder="Type sqft"
              />
            </div>
          </div>
        </div>
        <div className={styles.ic_create_listing_form_item}>
          <div className={styles.ic_title}>
            <h5 className="h5_2 ic_title_color">Amenities</h5>
          </div>
          <div className={styles.ic_form_content}>
            <Row
              gutter={[
                { lg: 10, md: 20, sm: 16, xs: 10 },
                { lg: 24, md: 20, sm: 16, xs: 10 },
              ]}
            >
              <Col sm={8} xs={24}>
                <Checkbox>
                  <span className="body_s ic_title_color">
                    Air Conditioning
                  </span>
                </Checkbox>
              </Col>
              <Col sm={8} xs={24}>
                <Checkbox>
                  <span className="body_s ic_title_color">
                    Buil-In Wardrobes
                  </span>
                </Checkbox>
              </Col>
              <Col sm={8} xs={24}>
                <Checkbox>
                  <span className="body_s ic_title_color">
                    Air Conditioning
                  </span>
                </Checkbox>
              </Col>
              <Col sm={8} xs={24}>
                <Checkbox>
                  <span className="body_s ic_title_color">
                    Buil-In Wardrobes
                  </span>
                </Checkbox>
              </Col>
              <Col sm={8} xs={24}>
                <Checkbox>
                  <span className="body_s ic_title_color">Fencing</span>
                </Checkbox>
              </Col>
              <Col sm={8} xs={24}>
                <Checkbox>
                  <span className="body_s ic_title_color">
                    Buil-In Wardrobes
                  </span>
                </Checkbox>
              </Col>
              <Col sm={8} xs={24}>
                <Checkbox>
                  <span className="body_s ic_title_color">Clinic</span>
                </Checkbox>
              </Col>
              <Col sm={8} xs={24}>
                <Checkbox>
                  <span className="body_s ic_title_color">Internet</span>
                </Checkbox>
              </Col>
              <Col sm={8} xs={24}>
                <Checkbox>
                  <span className="body_s ic_title_color">Park</span>
                </Checkbox>
              </Col>
              <Col sm={8} xs={24}>
                <Checkbox>
                  <span className="body_s ic_title_color">Dishwasher</span>
                </Checkbox>
              </Col>
              <Col sm={8} xs={24}>
                <Checkbox>
                  <span className="body_s ic_title_color">
                    Supermarket/Store
                  </span>
                </Checkbox>
              </Col>
              <Col sm={8} xs={24}>
                <Checkbox>
                  <span className="body_s ic_title_color">Dishwasher</span>
                </Checkbox>
              </Col>
            </Row>
          </div>
        </div>
        <div className={styles.ic_create_listing_form_item}>
          <div className={styles.ic_title}>
            <h5 className="h5_2 ic_title_color">Contact Information</h5>
          </div>
          <div className={styles.ic_form_content}>
            <div className={styles.ic_form_group}>
              <label className={styles.ic_form_label}>Zip/Post Code</label>
              <input
                type="text"
                className={styles.ic_form_control}
                placeholder="Type zip/post code"
              />
            </div>
            <div className={styles.ic_form_group}>
              <label className={styles.ic_form_label}>Phone</label>
              <input
                type="number"
                className={styles.ic_form_control}
                placeholder="Type phone"
              />
            </div>
            <div className={styles.ic_form_group}>
              <label className={styles.ic_form_label}>Fax</label>
              <input
                type="number"
                className={styles.ic_form_control}
                placeholder="Type fax"
              />
            </div>
            <div className={styles.ic_form_group}>
              <label className={styles.ic_form_label}>Email</label>
              <input
                type="email"
                className={styles.ic_form_control}
                placeholder="Type email"
              />
            </div>
            <div className={styles.ic_form_group}>
              <label className={styles.ic_form_label}>Website</label>
              <input
                type="text"
                className={styles.ic_form_control}
                placeholder="Type website url"
              />
            </div>
            <div className={styles.ic_form_group}>
              <label className={styles.ic_form_label}>Social Info</label>
              <input
                type="text"
                className={styles.ic_form_control}
                placeholder="Type social url"
              />
            </div>
          </div>
        </div>
        <div className={styles.ic_create_listing_form_item}>
          <div className={styles.ic_title}>
            <h5 className="h5_2 ic_title_color">Map</h5>
          </div>
          <div className={styles.ic_form_content}>
            <div className={styles.ic_form_group}>
              <label className={styles.ic_form_label}>Address</label>
              <input
                type="text"
                className={styles.ic_form_control}
                placeholder="Type listing address"
              />
            </div>
            <div className={styles.ic_form_group}>
              <div className={styles.ic_address_map}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25279991722!2d-74.1444877707482!3d40.69763123338159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1720514614887!5m2!1sen!2sbd"
                  width="100%"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ic_create_listing_form_item}>
          <div className={styles.ic_title}>
            <h5 className="h5_2 ic_title_color">Your Email</h5>
          </div>
          <div className={styles.ic_form_content}>
            <div className={styles.ic_form_group}>
              <label className={styles.ic_form_label}>Address</label>
              <input
                type="email"
                className={styles.ic_form_control}
                placeholder="Type email address"
              />
            </div>
            <div className={styles.ic_form_group}>
              <Checkbox>
                <p className="ic_title_color">
                  I agree to the privacy & policy
                </p>
              </Checkbox>
              <Checkbox>
                <p className="ic_title_color">
                  I agree with all terms & conditions
                </p>
              </Checkbox>
            </div>
          </div>
        </div>

        <div className={styles.ic_save_preview_btn}>
          <button type="submit" className="ic_btn ic_btn_xl">
            Save & Preview
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateListingForm;
