"use client";

import { RiCheckFill, RiMapPinLine } from "react-icons/ri";
import styles from "./listing-details.module.css";
import propertyBannerImg from "@/images/property-video-banner.png";
import { Col, Flex, Row } from "antd";
import Image from "next/image";
import { useState } from "react";
import FsLightbox from "fslightbox-react";

const ListingDetails = () => {
  //component state
  const [toggler, setToggler] = useState(false);
  return (
    <div className={`${styles.ic_listing_details_wrap} ${styles.ic_mt_40}`}>
      <div className={`${styles.ic_title_description} ${styles.ic_mb_40}`}>
        <div className={`${styles.ic_title_price} ic_mb_20`}>
          <div className={styles.ic_title}>
            <h3 className="ic_title_color ic_mb_10">Luxury Family home</h3>
            <Flex gap="small" align="center">
              <span className="ic_primary_color">
                <RiMapPinLine />
              </span>
              <span className="body_s ic_secondary_color">
                {" "}
                4517 Washington
              </span>
            </Flex>
          </div>
          <div className={styles.ic_price}>
            <h5 className="h5_2 ic_fw_600 ic_primary_color">$750.00</h5>
          </div>
        </div>
        <div className={styles.ic_description}>
          <h4 className="ic_title_color ic_mb_15">Description</h4>
          <p className="ic_body_color">
            {`There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc`}
          </p>
        </div>
      </div>
      <div className={styles.ic_mb_40}>
        <h4 className={"ic_title_color ic_mb_20"}>Property Detail</h4>
        <div className={styles.ic_property_details}>
          <div className={styles.ic_property_details_item}>
            <div className={styles.ic_item}>
              <p className="ic_body_color">Type:</p>
              <p className="ic_title_color">Real estate</p>
            </div>
            <div className={styles.ic_item}>
              <p className="ic_body_color">Rooms:</p>
              <p className="ic_title_color">4</p>
            </div>
            <div className={styles.ic_item}>
              <p className="ic_body_color">Living rooms:</p>
              <p className="ic_title_color">2</p>
            </div>
            <div className={styles.ic_item}>
              <p className="ic_body_color">Area:</p>
              <p className="ic_title_color">1250</p>
            </div>
            <div className={styles.ic_item}>
              <p className="ic_body_color">Year built:</p>
              <p className="ic_title_color">1992</p>
            </div>
          </div>
          <div className={styles.ic_property_details_item}>
            <div className={styles.ic_item}>
              <p className="ic_body_color">Plot size:</p>
              <p className="ic_title_color">400x200x200</p>
            </div>
            <div className={styles.ic_item}>
              <p className="ic_body_color">Bedrooms:</p>
              <p className="ic_title_color">4</p>
            </div>
            <div className={styles.ic_item}>
              <p className="ic_body_color">Bathrooms:</p>
              <p className="ic_title_color">2</p>
            </div>
            <div className={styles.ic_item}>
              <p className="ic_body_color">Kitchens:</p>
              <p className="ic_title_color">1</p>
            </div>
            <div className={styles.ic_item}>
              <p className="ic_body_color">Orienten:</p>
              <p className="ic_title_color">North</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ic_mb_40}>
        <h4 className={"ic_title_color ic_mb_20"}>Facts and Features</h4>
        <Row
          gutter={[
            { lg: 30, md: 25, sm: 20, xs: 20 },
            { lg: 30, md: 25, sm: 20, xs: 20 },
          ]}
        >
          <Col lg={6} md={8} sm={8} xs={12}>
            <div className={styles.ic_facts_features_item}>
              <div className={styles.ic_icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                >
                  <rect
                    width="50"
                    height="50"
                    rx="6"
                    fill="#FF5A3C"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M17 22L25 16L33 22H17ZM17 34H26V30H17V34ZM28 34H33V30H28V34ZM17 28H22V24H17V28ZM24 28H33V24H24V28Z"
                    fill="#FF5A3C"
                  />
                </svg>
              </div>
              <div className={styles.ic_content}>
                <p className="body_s ic_title_color">Living Room</p>
                <p className="body_s ic_body_color">20 x 16 sq feet</p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={8} sm={8} xs={12}>
            <div className={styles.ic_facts_features_item}>
              <div className={styles.ic_icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                >
                  <rect
                    width="50"
                    height="50"
                    rx="6"
                    fill="#FF5A3C"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M27.172 16C27.702 16 28.211 16.21 28.586 16.586L33.414 21.414C33.789 21.789 34 22.298 34 22.828V30H36V32H27.874C27.429 33.726 25.864 35 24 35C22.136 35 20.57 33.726 20.126 32H16C15.448 32 15 31.552 15 31V18C15 16.895 15.895 16 17 16H27.172ZM24 29C22.895 29 22 29.895 22 31C22 32.105 22.895 33 24 33C25.105 33 26 32.105 26 31C26 29.895 25.105 29 24 29ZM27.172 18H17V30H20.126C20.57 28.275 22.136 27 24 27C25.864 27 27.43 28.275 27.874 30H32V22.828L27.172 18ZM27 20V26H19V20H27ZM25 22H21V24H25V22Z"
                    fill="#FF5A3C"
                  />
                </svg>
              </div>
              <div className={styles.ic_content}>
                <p className="body_s ic_title_color">Garage</p>
                <p className="body_s ic_body_color">20 x 16 sq feet</p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={8} sm={8} xs={12}>
            <div className={styles.ic_facts_features_item}>
              <div className={styles.ic_icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                >
                  <rect
                    width="50"
                    height="50"
                    rx="6"
                    fill="#FF5A3C"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M19 33L21 28H24V23.975C21.45 23.8917 19.3127 23.5167 17.588 22.85C15.8627 22.1833 15 21.4 15 20.5C15 19.5333 15.975 18.7083 17.925 18.025C19.875 17.3417 22.2333 17 25 17C27.7833 17 30.1457 17.3417 32.087 18.025C34.029 18.7083 35 19.5333 35 20.5C35 21.4 34.1377 22.1833 32.413 22.85C30.6877 23.5167 28.55 23.8917 26 23.975V28H29L31 33H29L27.8 30H22.2L21 33H19ZM25 22C26.6167 22 28.1417 21.8583 29.575 21.575C31.0083 21.2917 32.0583 20.9333 32.725 20.5C32.0583 20.0667 31.0083 19.7083 29.575 19.425C28.1417 19.1417 26.6167 19 25 19C23.3833 19 21.8583 19.1417 20.425 19.425C18.9917 19.7083 17.9417 20.0667 17.275 20.5C17.9417 20.9333 18.9917 21.2917 20.425 21.575C21.8583 21.8583 23.3833 22 25 22Z"
                    fill="#FF5A3C"
                  />
                </svg>
              </div>
              <div className={styles.ic_content}>
                <p className="body_s ic_title_color">Dining Area</p>
                <p className="body_s ic_body_color">10 x 10 sq feet</p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={8} sm={8} xs={12}>
            <div className={styles.ic_facts_features_item}>
              <div className={styles.ic_icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                >
                  <rect
                    width="50"
                    height="50"
                    rx="6"
                    fill="#FF5A3C"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M35 24V33H33V30H17V33H15V17H17V27H25V20H31C32.0609 20 33.0783 20.4214 33.8284 21.1716C34.5786 21.9217 35 22.9391 35 24ZM33 27V24C33 23.4696 32.7893 22.9609 32.4142 22.5858C32.0391 22.2107 31.5304 22 31 22H27V27H33ZM21 24C21.2652 24 21.5196 23.8946 21.7071 23.7071C21.8946 23.5196 22 23.2652 22 23C22 22.7348 21.8946 22.4804 21.7071 22.2929C21.5196 22.1054 21.2652 22 21 22C20.7348 22 20.4804 22.1054 20.2929 22.2929C20.1054 22.4804 20 22.7348 20 23C20 23.2652 20.1054 23.5196 20.2929 23.7071C20.4804 23.8946 20.7348 24 21 24ZM21 26C20.2044 26 19.4413 25.6839 18.8787 25.1213C18.3161 24.5587 18 23.7956 18 23C18 22.2044 18.3161 21.4413 18.8787 20.8787C19.4413 20.3161 20.2044 20 21 20C21.7956 20 22.5587 20.3161 23.1213 20.8787C23.6839 21.4413 24 22.2044 24 23C24 23.7956 23.6839 24.5587 23.1213 25.1213C22.5587 25.6839 21.7956 26 21 26Z"
                    fill="#FF5A3C"
                  />
                </svg>
              </div>
              <div className={styles.ic_content}>
                <p className="body_s ic_title_color">Bedroom</p>
                <p className="body_s ic_body_color">5 x 5 sq feet</p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={8} sm={8} xs={12}>
            <div className={styles.ic_facts_features_item}>
              <div className={styles.ic_icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                >
                  <rect
                    width="50"
                    height="50"
                    rx="6"
                    fill="#FF5A3C"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M34.75 22H32.5C32.5 21.8011 32.421 21.6103 32.2803 21.4697C32.1397 21.329 31.9489 21.25 31.75 21.25H25.75C25.5511 21.25 25.3603 21.329 25.2197 21.4697C25.079 21.6103 25 21.8011 25 22H19V17.875C19 17.5766 19.1185 17.2905 19.3295 17.0795C19.5405 16.8685 19.8266 16.75 20.125 16.75C20.4234 16.75 20.7095 16.8685 20.9205 17.0795C21.1315 17.2905 21.25 17.5766 21.25 17.875C21.25 18.0739 21.329 18.2647 21.4697 18.4053C21.6103 18.546 21.8011 18.625 22 18.625C22.1989 18.625 22.3897 18.546 22.5303 18.4053C22.671 18.2647 22.75 18.0739 22.75 17.875C22.75 17.1788 22.4734 16.5111 21.9812 16.0188C21.4889 15.5266 20.8212 15.25 20.125 15.25C19.4288 15.25 18.7611 15.5266 18.2688 16.0188C17.7766 16.5111 17.5 17.1788 17.5 17.875V22H15.25C14.8522 22 14.4706 22.158 14.1893 22.4393C13.908 22.7206 13.75 23.1022 13.75 23.5V26.5C13.75 27.8924 14.3031 29.2277 15.2877 30.2123C16.2723 31.1969 17.6076 31.75 19 31.75V33.25C19 33.4489 19.079 33.6397 19.2197 33.7803C19.3603 33.921 19.5511 34 19.75 34C19.9489 34 20.1397 33.921 20.2803 33.7803C20.421 33.6397 20.5 33.4489 20.5 33.25V31.75H29.5V33.25C29.5 33.4489 29.579 33.6397 29.7197 33.7803C29.8603 33.921 30.0511 34 30.25 34C30.4489 34 30.6397 33.921 30.7803 33.7803C30.921 33.6397 31 33.4489 31 33.25V31.75C32.3924 31.75 33.7277 31.1969 34.7123 30.2123C35.6969 29.2277 36.25 27.8924 36.25 26.5V23.5C36.25 23.1022 36.092 22.7206 35.8107 22.4393C35.5294 22.158 35.1478 22 34.75 22ZM31 22.75V25.75H26.5V22.75H31ZM34.75 26.5C34.75 26.9925 34.653 27.4801 34.4645 27.9351C34.2761 28.39 33.9999 28.8034 33.6516 29.1517C33.3034 29.4999 32.89 29.7761 32.4351 29.9645C31.9801 30.153 31.4925 30.25 31 30.25H19C18.0054 30.25 17.0516 29.8549 16.3483 29.1517C15.6451 28.4484 15.25 27.4946 15.25 26.5V23.5H25V26.5C25 26.6989 25.079 26.8897 25.2197 27.0303C25.3603 27.171 25.5511 27.25 25.75 27.25H31.75C31.9489 27.25 32.1397 27.171 32.2803 27.0303C32.421 26.8897 32.5 26.6989 32.5 26.5V23.5H34.75V26.5Z"
                    fill="#FF5A3C"
                  />
                </svg>
              </div>
              <div className={styles.ic_content}>
                <p className="body_s ic_title_color">Bathroom</p>
                <p className="body_s ic_body_color">5 x 5 sq feet</p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={8} sm={8} xs={12}>
            <div className={styles.ic_facts_features_item}>
              <div className={styles.ic_icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                >
                  <rect
                    width="50"
                    height="50"
                    rx="6"
                    fill="#FF5A3C"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M21.6219 34.5395C21.7083 34.6331 21.7542 34.757 21.7497 34.8843C21.7452 35.0116 21.6906 35.1319 21.5979 35.2192L20.5553 36.1941C20.4623 36.2806 20.3386 36.3266 20.2116 36.322C20.0847 36.3174 19.9647 36.2626 19.8781 36.1696L13.8065 29.6262C13.7203 29.5326 13.6744 29.4086 13.679 29.2814C13.6836 29.1541 13.7382 29.0338 13.831 28.9466L14.875 27.9731C14.9211 27.9302 14.9752 27.8969 15.0341 27.8749C15.0931 27.8529 15.1558 27.8427 15.2187 27.845C15.2816 27.8473 15.3435 27.8619 15.4007 27.8881C15.4579 27.9143 15.5095 27.9515 15.5523 27.9976L21.6219 34.5395ZM29.3691 22.2275C29.4554 22.3212 29.5012 22.4451 29.4966 22.5724C29.492 22.6997 29.4374 22.82 29.3446 22.9072L22.783 29.0368C22.6899 29.1233 22.5663 29.1693 22.4393 29.1647C22.3123 29.1601 22.1924 29.1053 22.1057 29.0123L20.5395 27.3222C20.4532 27.2286 20.4074 27.1046 20.412 26.9774C20.4166 26.8501 20.4712 26.7298 20.564 26.6426L27.1241 20.513C27.1702 20.4701 27.2242 20.4367 27.2831 20.4147C27.3421 20.3928 27.4048 20.3826 27.4676 20.3849C27.5305 20.3872 27.5923 20.4018 27.6495 20.428C27.7067 20.4542 27.7581 20.4914 27.8009 20.5374L29.3691 22.2275ZM23.8544 32.453C24.0339 32.6464 24.0229 32.9522 23.8299 33.1326L22.7859 34.107C22.7398 34.1499 22.6858 34.1833 22.6268 34.2053C22.5678 34.2273 22.5051 34.2374 22.4422 34.2351C22.3793 34.2329 22.3175 34.2182 22.2602 34.192C22.203 34.1659 22.1515 34.1287 22.1086 34.0826L16.0405 27.5392C15.9541 27.4456 15.9082 27.3217 15.9127 27.1944C15.9172 27.0672 15.9717 26.9468 16.0645 26.8595L17.1065 25.8856C17.1996 25.7991 17.3233 25.7531 17.4503 25.7577C17.5772 25.7623 17.6972 25.8171 17.7838 25.9101L23.8544 32.453ZM33.9646 22.4622C34.0508 22.556 34.0966 22.6799 34.0919 22.8072C34.0872 22.9345 34.0325 23.0548 33.9397 23.1419L32.8961 24.1163C32.803 24.2029 32.6794 24.249 32.5523 24.2445C32.4252 24.24 32.3051 24.1853 32.2184 24.0923L26.1493 17.5504C26.0628 17.4569 26.0168 17.3329 26.0213 17.2056C26.0258 17.0783 26.0804 16.9579 26.1733 16.8707L27.2197 15.8939C27.2657 15.8511 27.3197 15.8177 27.3787 15.7957C27.4376 15.7737 27.5003 15.7636 27.5631 15.7659C27.626 15.7681 27.6878 15.7828 27.745 15.809C27.8022 15.8351 27.8537 15.8723 27.8965 15.9184L33.9646 22.4622ZM36.1937 20.379C36.2799 20.4729 36.3257 20.5968 36.3211 20.7241C36.3165 20.8515 36.262 20.9718 36.1693 21.0592L35.1277 22.0331C35.0817 22.076 35.0277 22.1094 34.9688 22.1315C34.9098 22.1535 34.8472 22.1637 34.7843 22.1614C34.7214 22.1592 34.6596 22.1446 34.6024 22.1185C34.5452 22.0923 34.4937 22.0552 34.4509 22.0091L28.3827 15.4643C28.2965 15.3706 28.2506 15.2466 28.2551 15.1193C28.2596 14.992 28.3141 14.8716 28.4067 14.7842L29.4493 13.8083C29.4952 13.7654 29.5491 13.7319 29.608 13.7099C29.6669 13.6878 29.7296 13.6776 29.7924 13.6799C29.8552 13.6821 29.917 13.6967 29.9742 13.7229C30.0314 13.749 30.0828 13.7862 30.1256 13.8323L36.1937 20.379Z"
                    fill="#FF5A3C"
                  />
                </svg>
              </div>
              <div className={styles.ic_content}>
                <p className="body_s ic_title_color">Gym Area</p>
                <p className="body_s ic_body_color">15 x 10 sq feet</p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={8} sm={8} xs={12}>
            <div className={styles.ic_facts_features_item}>
              <div className={styles.ic_icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                >
                  <rect
                    width="50"
                    height="50"
                    rx="6"
                    fill="#FF5A3C"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M32 33H18V34C18 34.2652 17.8946 34.5196 17.7071 34.7071C17.5196 34.8946 17.2652 35 17 35H16C15.7348 35 15.4804 34.8946 15.2929 34.7071C15.1054 34.5196 15 34.2652 15 34V26.5L13.757 26.19C13.5408 26.1358 13.3488 26.011 13.2117 25.8352C13.0745 25.6595 13 25.4429 13 25.22V24.5C13 24.3674 13.0527 24.2402 13.1464 24.1464C13.2402 24.0527 13.3674 24 13.5 24H15L17.48 18.212C17.6343 17.852 17.891 17.5452 18.2181 17.3298C18.5452 17.1143 18.9283 16.9997 19.32 17H30.68C31.0713 17 31.4541 17.1149 31.7808 17.3303C32.1075 17.5458 32.3638 17.8523 32.518 18.212L35 24H36.5C36.6326 24 36.7598 24.0527 36.8536 24.1464C36.9473 24.2402 37 24.3674 37 24.5V25.22C37 25.4429 36.9255 25.6595 36.7883 25.8352C36.6512 26.011 36.4592 26.1358 36.243 26.19L35 26.5V34C35 34.2652 34.8946 34.5196 34.7071 34.7071C34.5196 34.8946 34.2652 35 34 35H33C32.7348 35 32.4804 34.8946 32.2929 34.7071C32.1054 34.5196 32 34.2652 32 34V33ZM33 31V26H17V31H33ZM18.477 24H31.523C31.6863 23.9999 31.8471 23.9598 31.9914 23.8832C32.1357 23.8066 32.2589 23.6958 32.3505 23.5605C32.442 23.4253 32.4991 23.2697 32.5166 23.1073C32.5341 22.9449 32.5116 22.7807 32.451 22.629L31 19H19L17.549 22.629C17.4884 22.7807 17.4659 22.9449 17.4834 23.1073C17.5009 23.2697 17.558 23.4253 17.6495 23.5605C17.7411 23.6958 17.8643 23.8066 18.0086 23.8832C18.1529 23.9598 18.3137 23.9999 18.477 24ZM18 27C20.317 27 21.879 27.755 22.686 29.264C22.7268 29.3402 22.7471 29.4257 22.7451 29.5121C22.743 29.5985 22.7185 29.6829 22.6741 29.757C22.6297 29.8311 22.5668 29.8925 22.4916 29.9351C22.4164 29.9777 22.3314 30 22.245 30H19C18.7348 30 18.4804 29.8946 18.2929 29.7071C18.1054 29.5196 18 29.2652 18 29V27ZM32 27V29C32 29.2652 31.8946 29.5196 31.7071 29.7071C31.5196 29.8946 31.2652 30 31 30H27.755C27.6687 29.9999 27.5838 29.9774 27.5088 29.9347C27.4337 29.892 27.3709 29.8307 27.3266 29.7566C27.2823 29.6825 27.258 29.5981 27.2559 29.5118C27.2539 29.4255 27.2742 29.3401 27.315 29.264C28.12 27.754 29.682 27 32 27Z"
                    fill="#FF5A3C"
                  />
                </svg>
              </div>
              <div className={styles.ic_content}>
                <p className="body_s ic_title_color">Parking</p>
                <p className="body_s ic_body_color">15 x 10 sq feet</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className={styles.ic_mb_40}>
        <h4 className={"ic_title_color ic_mb_20"}>Amenities</h4>
        <Row
          gutter={[
            { lg: 24, md: 20, sm: 20, xs: 20 },
            { lg: 24, md: 20, sm: 20, xs: 20 },
          ]}
        >
          <Col sm={8} xs={12}>
            <div className={styles.ic_amenities_item}>
              <span className={styles.icon}>
                <RiCheckFill />
              </span>
              <p className="body_s ic_title_color">Air Conditioning</p>
            </div>
          </Col>
          <Col sm={8} xs={12}>
            <div className={styles.ic_amenities_item}>
              <span className={styles.icon}>
                <RiCheckFill />
              </span>
              <p className="body_s ic_title_color">Buil-In Wardrobes</p>
            </div>
          </Col>
          <Col sm={8} xs={12}>
            <div className={styles.ic_amenities_item}>
              <span className={styles.icon}>
                <RiCheckFill />
              </span>
              <p className="body_s ic_title_color">Air Conditioning</p>
            </div>
          </Col>
          <Col sm={8} xs={12}>
            <div className={styles.ic_amenities_item}>
              <span className={styles.icon}>
                <RiCheckFill />
              </span>
              <p className="body_s ic_title_color">Buil-In Wardrobes</p>
            </div>
          </Col>
          <Col sm={8} xs={12}>
            <div className={styles.ic_amenities_item}>
              <span className={styles.icon}>
                <RiCheckFill />
              </span>
              <p className="body_s ic_title_color">Fencing</p>
            </div>
          </Col>
          <Col sm={8} xs={12}>
            <div className={styles.ic_amenities_item}>
              <span className={styles.icon}>
                <RiCheckFill />
              </span>
              <p className="body_s ic_title_color">Buil-In Wardrobes</p>
            </div>
          </Col>
          <Col sm={8} xs={12}>
            <div className={styles.ic_amenities_item}>
              <span className={styles.icon}>
                <RiCheckFill />
              </span>
              <p className="body_s ic_title_color">Clinic</p>
            </div>
          </Col>
          <Col sm={8} xs={12}>
            <div className={styles.ic_amenities_item}>
              <span className={styles.icon}>
                <RiCheckFill />
              </span>
              <p className="body_s ic_title_color">Internet</p>
            </div>
          </Col>
          <Col sm={8} xs={12}>
            <div className={styles.ic_amenities_item}>
              <span className={styles.icon}>
                <RiCheckFill />
              </span>
              <p className="body_s ic_title_color">Park</p>
            </div>
          </Col>
          <Col sm={8} xs={12}>
            <div className={styles.ic_amenities_item}>
              <span className={styles.icon}>
                <RiCheckFill />
              </span>
              <p className="body_s ic_title_color">Dishwasher</p>
            </div>
          </Col>
          <Col sm={8} xs={12}>
            <div className={styles.ic_amenities_item}>
              <span className={styles.icon}>
                <RiCheckFill />
              </span>
              <p className="body_s ic_title_color">Supermarket/Store</p>
            </div>
          </Col>
          <Col sm={8} xs={12}>
            <div className={styles.ic_amenities_item}>
              <span className={styles.icon}>
                <RiCheckFill />
              </span>
              <p className="body_s ic_title_color">Dishwasher</p>
            </div>
          </Col>
        </Row>
      </div>
      <div className={styles.ic_mb_40}>
        <h4 className={"ic_title_color ic_mb_20"}>Location</h4>
        <div className={styles.ic_location_map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25279991722!2d-74.1444877707482!3d40.69763123338159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1720601597411!5m2!1sen!2sbd"
            width="100%"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className={styles.ic_mb_40}>
        <h4 className={"ic_title_color ic_mb_20"}>Property Video</h4>
        <div className={styles.ic_property_video}>
          <Image src={propertyBannerImg} alt="video banner" />
          <div className={styles.ic_video_play_btn}>
            <button
              className={styles.ic_play_btn}
              onClick={() => setToggler(!toggler)}
            ></button>
          </div>
        </div>
        <FsLightbox
          toggler={toggler}
          sources={["https://www.youtube.com/watch?v=3nQNiWdeH2Q"]}
        />
      </div>
    </div>
  );
};

export default ListingDetails;
