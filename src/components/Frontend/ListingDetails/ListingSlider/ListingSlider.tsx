"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./listing-slider.module.css";
import Slider from "react-slick";
import Image from "next/image";
import sliderImg1 from "@/images/listing-slider-01.png";
import sliderThumb1 from "@/images/listing-slider-thumb-01.png";
import sliderThumb2 from "@/images/listing-slider-thumb-02.png";
import sliderThumb3 from "@/images/listing-slider-thumb-03.png";
import sliderThumb4 from "@/images/listing-slider-thumb-04.png";
import sliderThumb5 from "@/images/listing-slider-thumb-05.png";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

const ListingSlider = () => {
  //component state & Ref
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);

  //slider settings

  const sliderSettings2 = {
    asNavFor: nav1 ?? undefined,
    ref: sliderRef2,
    dots: false,
    speed: 500,
    slidesToShow: 5,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  //slider useEffect
  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  const handleNext = () => {
    if (sliderRef2.current) {
      sliderRef2.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef2.current) {
      sliderRef2.current.slickPrev();
    }
  };

  return (
    <div className={styles.ic_listing_slider_wrap}>
      <Slider asNavFor={nav2 ?? undefined} ref={sliderRef1}>
        <div className={styles.ic_listing_slider_item}>
          <div className={styles.ic_thumb}>
            <Image src={sliderImg1} alt="listing" />
          </div>
        </div>
        <div className={styles.ic_listing_slider_item}>
          <div className={styles.ic_thumb}>
            <Image src={sliderImg1} alt="listing" />
          </div>
        </div>
        <div className={styles.ic_listing_slider_item}>
          <div className={styles.ic_thumb}>
            <Image src={sliderImg1} alt="listing" />
          </div>
        </div>
        <div className={styles.ic_listing_slider_item}>
          <div className={styles.ic_thumb}>
            <Image src={sliderImg1} alt="listing" />
          </div>
        </div>
        <div className={styles.ic_listing_slider_item}>
          <div className={styles.ic_thumb}>
            <Image src={sliderImg1} alt="listing" />
          </div>
        </div>
        <div className={styles.ic_listing_slider_item}>
          <div className={styles.ic_thumb}>
            <Image src={sliderImg1} alt="listing" />
          </div>
        </div>
      </Slider>
      <div className={styles.ic_thumb_slider_wrap}>
        <div className={styles.ic_prev_btn}>
          <button onClick={handlePrev}>
            <IoArrowBackOutline />
          </button>
        </div>
        <div className={styles.ic_thumb_slider}>
          <Slider
            {...sliderSettings2}
            asNavFor={nav1 ?? undefined}
            ref={sliderRef2}
          >
            <div className={styles.ic_listing_thumb_item}>
              <Image src={sliderThumb1} alt="slider thumb" />
            </div>
            <div>
              <div className={styles.ic_listing_thumb_item}>
                <Image src={sliderThumb2} alt="slider thumb" />
              </div>
            </div>
            <div>
              <div className={styles.ic_listing_thumb_item}>
                <Image src={sliderThumb3} alt="slider thumb" />
              </div>
            </div>
            <div>
              <div className={styles.ic_listing_thumb_item}>
                <Image src={sliderThumb4} alt="slider thumb" />
              </div>
            </div>
            <div>
              <div className={styles.ic_listing_thumb_item}>
                <Image src={sliderThumb5} alt="slider thumb" />
              </div>
            </div>
            <div>
              <div className={styles.ic_listing_thumb_item}>
                <Image src={sliderThumb1} alt="slider thumb" />
              </div>
            </div>
          </Slider>
        </div>
        <div className={styles.ic_next_btn}>
          <button onClick={handleNext}>
            <IoArrowForwardOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingSlider;
