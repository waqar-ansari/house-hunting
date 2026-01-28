"use client";
import PageBreadcrumb from "@/components/Share/PageBreadcrumb/PageBreadcrumb";
import styles from "./listing.module.css";
import { Col, Row, Select } from "antd";
import { RiRefreshLine } from "react-icons/ri";
import Link from "next/link";
import PropertyItem from "@/components/Share/PropertyItem/PropertyItem";
import propertyImg1 from "@/images/property-01.png";
import propertyImg2 from "@/images/property-02.png";
import propertyImg3 from "@/images/property-03.png";
import propertyImg4 from "@/images/property-04.png";
import propertyImg5 from "@/images/property-05.png";
import propertyImg6 from "@/images/property-06.png";
import propertyImg7 from "@/images/property-07.png";
import propertyImg8 from "@/images/property-08.png";
import avatarImg1 from "@/images/avatar-01.png";
import avatarImg2 from "@/images/avatar-02.png";
import avatarImg3 from "@/images/avatar-03.png";
import avatarImg4 from "@/images/avatar-04.png";
import avatarImg5 from "@/images/avatar-05.png";
import avatarImg6 from "@/images/avatar-06.png";
import avatarImg7 from "@/images/avatar-07.png";
import { useState } from "react";
import Pagination from "@/components/Share/Pagination/Pagination";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa6";

const ListingPage = () => {
  //component state
  const [listingTab, setListingTab] = useState<string>("rent");
  return (
    <>
      {/* page breadcrumb area */}
      <PageBreadcrumb
        breadcrumbInfo={{
          backgroundImg: "/images/listing-breadcrumb.png",
          title: "Listing",
          navItem: [
            {
              label: "Home",
              link: "/",
            },
            {
              label: "Listing",
              link: `/listing`,
            },
          ],
        }}
      />
      {/* Listing area */}
      <section className="ic_section_space">
        <div className="ic_container">
          <div className={`${styles.ic_listing_filter_wrap} ic_mb_40`}>
            <div className={styles.ic_filter_item}>
              <label>Choose Category</label>
              <Select
                placeholder="Category"
                className={`${styles.ic_form_select} ic_form_select_global`}
                options={[
                  { value: "villa", label: "Villa" },
                  { value: "office", label: "Office" },
                  { value: "studio", label: "Studio" },
                ]}
              />
            </div>
            <div className={styles.ic_filter_item}>
              <label>City</label>
              <Select
                placeholder="City"
                className={`${styles.ic_form_select} ic_form_select_global`}
                options={[
                  { value: "new york", label: "New York" },
                  { value: "los angels", label: "Los Angels" },
                  { value: "chicago", label: "Chicago" },
                ]}
              />
            </div>
            <div className={styles.ic_filter_item}>
              <label>Price</label>
              <Select
                placeholder="Price"
                className={`${styles.ic_form_select} ic_form_select_global`}
                options={[
                  { value: "100-200", label: "100-200" },
                  { value: "200-500", label: "200-500" },
                  { value: "500-1000", label: "500-1000" },
                ]}
              />
            </div>
            <div className={styles.ic_filter_item}>
              <label>Beds</label>
              <Select
                placeholder="Beds"
                className={`${styles.ic_form_select} ic_form_select_global`}
                options={[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                ]}
              />
            </div>
            <div className={styles.ic_filter_item}>
              <label>Baths</label>
              <Select
                placeholder="Baths"
                className={`${styles.ic_form_select} ic_form_select_global`}
                options={[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                ]}
              />
            </div>
            <div className={styles.ic_filter_item}>
              <label>Amenities</label>
              <Select
                placeholder="Amenities"
                className={`${styles.ic_form_select} ic_form_select_global`}
                options={[
                  { value: "gym", label: "Gym" },
                  { value: "parking", label: "Parking" },
                  { value: "swimming-pool", label: "Swimming Pool" },
                ]}
              />
            </div>
            <div className={styles.ic_filter_reset_btn}>
              <button className="ic_btn ic_btn_lg">
                <RiRefreshLine />
                Reset
              </button>
            </div>
          </div>
          <div className={`${styles.ic_listing_tab_sort_by} ic_mb_40`}>
            <div className={styles.listing_tab}>
              <button
                className={listingTab === "rent" ? styles.active : ""}
                onClick={() => setListingTab("rent")}
              >
                Rent Home
              </button>
              <button
                className={listingTab === "sale" ? styles.active : ""}
                onClick={() => setListingTab("sale")}
              >
                Sale Home
              </button>
            </div>
            <div className={styles.ic_listing_reset_sort}>
              <div className={styles.ic_list_grid_icon}>
                <Link href="/listing" className={styles.active}>
                  <BsFillGrid3X3GapFill />
                </Link>
                <Link href="/listing-list">
                  <FaListUl />
                </Link>
              </div>
              <p className={styles.ic_title_color}>12 Matches</p>
              <button className="ic_title_color">
                <RiRefreshLine />
                Reset
              </button>
              <Select
                placeholder="Sort By"
                className={`${styles.ic_sort_select} ic_form_select_global`}
                options={[
                  { value: "villa", label: "Villa" },
                  { value: "office", label: "Office" },
                  { value: "studio", label: "Studio" },
                ]}
              />
            </div>
          </div>
          <div className={styles.ic_listing_item_wrap}>
            {listingTab === "rent" && (
              <Row
                gutter={[
                  { lg: 16, md: 16, sm: 16, xs: 16 },
                  { lg: 16, md: 16, sm: 16, xs: 16 },
                ]}
              >
                <Col
                  xl={6}
                  lg={8}
                  md={12}
                  sm={12}
                  xs={24}
                  className="gutter-row"
                >
                  <Link href="#">
                    <PropertyItem
                      propertyInfo={{
                        thumbnail: propertyImg1,
                        avatarImg: avatarImg1,
                        title: "Luxury Family home",
                        type: "For Rent",
                        price: 796.59,
                        info: {
                          size: "1200",
                          beds: "2",
                          baths: "1",
                        },
                        location: "4517 Washington Ave. Manchester",
                        propertyType: "Modern House",
                      }}
                    />
                  </Link>
                </Col>
                <Col
                  xl={6}
                  lg={8}
                  md={12}
                  sm={12}
                  xs={24}
                  className="gutter-row"
                >
                  <Link href="#">
                    <PropertyItem
                      propertyInfo={{
                        thumbnail: propertyImg2,
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
                  </Link>
                </Col>
                <Col
                  xl={6}
                  lg={8}
                  md={12}
                  sm={12}
                  xs={24}
                  className="gutter-row"
                >
                  <Link href="#">
                    <PropertyItem
                      propertyInfo={{
                        thumbnail: propertyImg3,
                        avatarImg: avatarImg3,
                        title: "Jacks Restaurant For rent",
                        type: "For Rent",
                        price: 900.59,
                        info: {
                          size: "1200",
                          beds: "2",
                          baths: "1",
                        },
                        location: "4517 Washington Ave. Manchester",
                        propertyType: "Modern House",
                      }}
                    />
                  </Link>
                </Col>
                <Col
                  xl={6}
                  lg={8}
                  md={12}
                  sm={12}
                  xs={24}
                  className="gutter-row"
                >
                  <Link href="#">
                    <PropertyItem
                      propertyInfo={{
                        thumbnail: propertyImg4,
                        avatarImg: avatarImg4,
                        title: "Luxury Office House",
                        type: "For buy",
                        price: 400.59,
                        info: {
                          size: "1200",
                          beds: "2",
                          baths: "1",
                        },
                        location: "4517 Washington Ave. Manchester",
                        propertyType: "Modern House",
                      }}
                    />
                  </Link>
                </Col>
                <Col
                  xl={6}
                  lg={8}
                  md={12}
                  sm={12}
                  xs={24}
                  className="gutter-row"
                >
                  <Link href="#">
                    <PropertyItem
                      propertyInfo={{
                        thumbnail: propertyImg5,
                        avatarImg: avatarImg5,
                        title: "Highland Park Residences",
                        type: "For Rent",
                        price: 600.59,
                        info: {
                          size: "1200",
                          beds: "2",
                          baths: "1",
                        },
                        location: "4517 Washington Ave. Manchester",
                        propertyType: "Modern House",
                      }}
                    />
                  </Link>
                </Col>
                <Col
                  xl={6}
                  lg={8}
                  md={12}
                  sm={12}
                  xs={24}
                  className="gutter-row"
                >
                  <Link href="#">
                    <PropertyItem
                      propertyInfo={{
                        thumbnail: propertyImg6,
                        avatarImg: avatarImg6,
                        title: "Holiday Luxury House",
                        type: "For sale",
                        price: 500.59,
                        info: {
                          size: "1200",
                          beds: "2",
                          baths: "1",
                        },
                        location: "4517 Washington Ave. Manchester",
                        propertyType: "Modern House",
                      }}
                    />
                  </Link>
                </Col>
                <Col
                  xl={6}
                  lg={8}
                  md={12}
                  sm={12}
                  xs={24}
                  className="gutter-row"
                >
                  <Link href="#">
                    <PropertyItem
                      propertyInfo={{
                        thumbnail: propertyImg7,
                        avatarImg: avatarImg7,
                        title: "Modern Condo for sale",
                        type: "For Rent",
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
                  </Link>
                </Col>
                <Col
                  xl={6}
                  lg={8}
                  md={12}
                  sm={12}
                  xs={24}
                  className="gutter-row"
                >
                  <Link href="#">
                    <PropertyItem
                      propertyInfo={{
                        thumbnail: propertyImg8,
                        avatarImg: avatarImg1,
                        title: "Gorgeous Apartment",
                        type: "For sale",
                        price: 1000.59,
                        info: {
                          size: "1200",
                          beds: "2",
                          baths: "1",
                        },
                        location: "4517 Washington Ave. Manchester",
                        propertyType: "Modern House",
                      }}
                    />
                  </Link>
                </Col>
              </Row>
            )}

            {listingTab === "sale" && (
              <Row gutter={[{ lg: 16 }, { lg: 16 }]}>
                <Col lg={6} className="gutter-row">
                  <Link href="#">
                    <PropertyItem
                      propertyInfo={{
                        thumbnail: propertyImg1,
                        avatarImg: avatarImg2,
                        title: "Luxury Family home",
                        type: "For Rent",
                        price: 796.59,
                        info: {
                          size: "1200",
                          beds: "2",
                          baths: "1",
                        },
                        location: "4517 Washington Ave. Manchester",
                        propertyType: "Modern House",
                      }}
                    />
                  </Link>
                </Col>
                <Col lg={6} className="gutter-row">
                  <Link href="#">
                    <PropertyItem
                      propertyInfo={{
                        thumbnail: propertyImg2,
                        avatarImg: avatarImg3,
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
                  </Link>
                </Col>
                <Col lg={6} className="gutter-row">
                  <Link href="#">
                    <PropertyItem
                      propertyInfo={{
                        thumbnail: propertyImg3,
                        avatarImg: avatarImg4,
                        title: "Jacks Restaurant For rent",
                        type: "For Rent",
                        price: 900.59,
                        info: {
                          size: "1200",
                          beds: "2",
                          baths: "1",
                        },
                        location: "4517 Washington Ave. Manchester",
                        propertyType: "Modern House",
                      }}
                    />
                  </Link>
                </Col>
              </Row>
            )}
          </div>
          <div className={styles.ic_listing_pagination}>
            <Pagination />
          </div>
        </div>
      </section>
    </>
  );
};

export default ListingPage;
