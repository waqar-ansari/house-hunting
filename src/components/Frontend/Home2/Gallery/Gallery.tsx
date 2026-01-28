"use client";
import styles from "./gallery.module.css";
import galleryImg1 from "@/images/gallery-01.png";
import galleryImg2 from "@/images/gallery-02.png";
import galleryImg3 from "@/images/gallery-03.png";
import galleryImg4 from "@/images/gallery-04.png";
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import Slider from "react-slick";

const Gallery = () => {
  //slider setting
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="ic_section_space_bottom ic_gallery_area_wrap">
      <Slider {...sliderSettings}>
        <div className={styles.ic_gallery_item}>
          <div className={styles.ic_gallery_thumbnail}>
            <Image src={galleryImg1} alt="RealtyClan" />
            <div className={styles.ic_gallery_content}>
              <div className={styles.ic_left}>
                <h5 className="ic_white_color">Apartments</h5>
                <p className="ic_white_color">
                  <LuMapPin />
                  4140 Parker Rd. Allentown
                </p>
              </div>
              <button className="ic_btn_md ic_btn">Details</button>
            </div>
          </div>
        </div>
        <div className={styles.ic_gallery_item}>
          <div className={styles.ic_gallery_thumbnail}>
            <Image src={galleryImg2} alt="RealtyClan" />
            <div className={styles.ic_gallery_content}>
              <div className={styles.ic_left}>
                <h5 className="ic_white_color">Apartments</h5>
                <p className="ic_white_color">
                  <LuMapPin />
                  4140 Parker Rd. Allentown
                </p>
              </div>
              <button className="ic_btn_md ic_btn">Details</button>
            </div>
          </div>
        </div>
        <div className={styles.ic_gallery_item}>
          <div className={styles.ic_gallery_thumbnail}>
            <Image src={galleryImg3} alt="RealtyClan" />
            <div className={styles.ic_gallery_content}>
              <div className={styles.ic_left}>
                <h5 className="ic_white_color">Apartments</h5>
                <p className="ic_white_color">
                  <LuMapPin />
                  4140 Parker Rd. Allentown
                </p>
              </div>
              <button className="ic_btn_md ic_btn">Details</button>
            </div>
          </div>
        </div>
        <div className={styles.ic_gallery_item}>
          <div className={styles.ic_gallery_thumbnail}>
            <Image src={galleryImg4} alt="RealtyClan" />
            <div className={styles.ic_gallery_content}>
              <div className={styles.ic_left}>
                <h5 className="ic_white_color">Apartments</h5>
                <p className="ic_white_color">
                  <LuMapPin />
                  4140 Parker Rd. Allentown
                </p>
              </div>
              <button className="ic_btn_md ic_btn">Details</button>
            </div>
          </div>
        </div>
        <div className={styles.ic_gallery_item}>
          <div className={styles.ic_gallery_thumbnail}>
            <Image src={galleryImg4} alt="RealtyClan" />
            <div className={styles.ic_gallery_content}>
              <div className={styles.ic_left}>
                <h5 className="ic_white_color">Apartments</h5>
                <p className="ic_white_color">
                  <LuMapPin />
                  4140 Parker Rd. Allentown
                </p>
              </div>
              <button className="ic_btn_md ic_btn">Details</button>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Gallery;
