"use client";
import React, { useRef } from "react";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import styles from "./inquery-listing.module.css";
import Slider from "react-slick";
import PropertyItem from "@/components/Share/PropertyItem/PropertyItem";
import propertyImg1 from "@/images/property-01.png";
import avatarImg1 from "@/images/avatar-01.png";
import avatarImg2 from "@/images/avatar-02.png";

const InquiryListing = () => {
  // slider ref
  // slider ref
  const sliderRef = useRef<Slider | null>(null);
  //slider setting
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  //slider next prev handler
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  return (
    <div className={styles.ic_inquiry_listing}>
      <div className={`${styles.ic_title} ic_mb_20`}>
        <h5 className="h5_2 ic_title_color ic_fw_600">All Listing</h5>
        <div className={styles.ic_next_prev_btn}>
          <button onClick={handlePrev}>
            <IoArrowBackOutline />
          </button>
          <button onClick={handleNext}>
            <IoArrowForwardOutline />
          </button>
        </div>
      </div>
      <div>
        <Slider ref={sliderRef} {...sliderSettings}>
          <div>
            <PropertyItem
              propertyInfo={{
                thumbnail: propertyImg1,
                avatarImg: avatarImg1,
                title: "Ready home for sale",
                type: "For sale",
                price: 800.59,
                info: {
                  size: "1200",
                  beds: "2",
                  baths: "1",
                },
                location: "4517 Washington Ave. Manchester",
                propertyType: "Modern House",
              }}
            />
          </div>
          <div>
            <PropertyItem
              propertyInfo={{
                thumbnail: propertyImg1,
                avatarImg: avatarImg2,
                title: "Ready home for sale",
                type: "For sale",
                price: 800.59,
                info: {
                  size: "1200",
                  beds: "2",
                  baths: "1",
                },
                location: "4517 Washington Ave. Manchester",
                propertyType: "Modern House",
              }}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default InquiryListing;
