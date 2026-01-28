"use client";
import React, { useState } from "react";
import styles from "./banner.module.css";
import { Select } from "antd";
import { SlArrowDown } from "react-icons/sl";

const Search = () => {
  // component state
  const [tab, setTab] = useState<string>("rent");

  //tab change handler
  const tabChangeHandler = (tab: string) => {
    setTab(tab);
  };
  return (
    <form action="#">
      <div className={styles.search_tab_btn}>
        <button
          type="button"
          className={tab === "rent" ? styles.active : ""}
          onClick={() => tabChangeHandler("rent")}
        >
          Rent
        </button>
        <button
          type="button"
          className={tab === "buy" ? styles.active : ""}
          onClick={() => tabChangeHandler("buy")}
        >
          Buy
        </button>
        <button
          type="button"
          className={tab === "sell" ? styles.active : ""}
          onClick={() => tabChangeHandler("sell")}
        >
          Sell
        </button>
      </div>
      <div className={styles.ic_search_box}>
        {tab === "rent" && (
          <>
            <div className={`${styles.ic_search_input}  ic_banner_input`}>
              <div className={styles.ic_input_item}>
                <label htmlFor="location">Choose Location</label>
                <Select
                  placeholder="Select location"
                  suffixIcon={<SlArrowDown />}
                  id="location"
                  options={[
                    { label: "New York", value: "New York" },
                    { label: "Los Angeles", value: "Los Angeles" },
                    { label: "Chicago", value: "Chicago" },
                  ]}
                />
              </div>
              <div className={styles.ic_input_item}>
                <label htmlFor="propertyType">Property Type</label>
                <Select
                  suffixIcon={<SlArrowDown />}
                  placeholder="Property type"
                  id="propertyType"
                  options={[
                    { label: "House", value: "House" },
                    { label: "Apartment", value: "Apartment" },
                    { label: "Office", value: "Office" },
                  ]}
                />
              </div>
              <div className={styles.ic_input_item}>
                <label htmlFor="price">Price</label>
                <Select
                  suffixIcon={<SlArrowDown />}
                  placeholder="Select price"
                  id="price"
                  options={[
                    { label: "$1000", value: "$1000" },
                    { label: "$2000", value: "$2000" },
                    { label: "$3000", value: "$3000" },
                    { label: "$4000", value: "$4000" },
                    { label: "$5000", value: "$5000" },
                  ]}
                />
              </div>
            </div>
            <div className={styles.ic_search_button}>
              <button type="submit" className="ic_btn ic_btn_lg">
                Search
              </button>
            </div>
          </>
        )}
        {tab === "buy" && (
          <>
            <div className={`${styles.ic_search_input} ic_banner_input`}>
              <div className={styles.ic_input_item}>
                <label htmlFor="location">Choose Location</label>
                <Select
                  placeholder="Select location"
                  suffixIcon={<SlArrowDown />}
                  id="location"
                  options={[
                    { label: "New York", value: "New York" },
                    { label: "Los Angeles", value: "Los Angeles" },
                    { label: "Chicago", value: "Chicago" },
                  ]}
                />
              </div>
              <div className={styles.ic_input_item}>
                <label htmlFor="propertyType">Property Type</label>
                <Select
                  suffixIcon={<SlArrowDown />}
                  placeholder="Property type"
                  id="propertyType"
                  options={[
                    { label: "House", value: "House" },
                    { label: "Apartment", value: "Apartment" },
                    { label: "Office", value: "Office" },
                  ]}
                />
              </div>
              <div className={styles.ic_input_item}>
                <label htmlFor="price">Price</label>
                <Select
                  suffixIcon={<SlArrowDown />}
                  placeholder="Select price"
                  id="price"
                  options={[
                    { label: "$1000", value: "$1000" },
                    { label: "$2000", value: "$2000" },
                    { label: "$3000", value: "$3000" },
                    { label: "$4000", value: "$4000" },
                    { label: "$5000", value: "$5000" },
                  ]}
                />
              </div>
            </div>
            <div className={styles.ic_search_button}>
              <button type="submit" className="ic_btn ic_btn_lg">
                Search
              </button>
            </div>
          </>
        )}
        {tab === "sell" && (
          <>
            <div className={`${styles.ic_search_input} ic_banner_input`}>
              <div className={styles.ic_input_item}>
                <label htmlFor="location">Choose Location</label>
                <Select
                  placeholder="Select location"
                  suffixIcon={<SlArrowDown />}
                  id="location"
                  options={[
                    { label: "New York", value: "New York" },
                    { label: "Los Angeles", value: "Los Angeles" },
                    { label: "Chicago", value: "Chicago" },
                  ]}
                />
              </div>
              <div className={styles.ic_input_item}>
                <label htmlFor="propertyType">Property Type</label>
                <Select
                  suffixIcon={<SlArrowDown />}
                  placeholder="Property type"
                  id="propertyType"
                  options={[
                    { label: "House", value: "House" },
                    { label: "Apartment", value: "Apartment" },
                    { label: "Office", value: "Office" },
                  ]}
                />
              </div>
              <div className={styles.ic_input_item}>
                <label htmlFor="price">Price</label>
                <Select
                  suffixIcon={<SlArrowDown />}
                  placeholder="Select price"
                  id="price"
                  options={[
                    { label: "$1000", value: "$1000" },
                    { label: "$2000", value: "$2000" },
                    { label: "$3000", value: "$3000" },
                    { label: "$4000", value: "$4000" },
                    { label: "$5000", value: "$5000" },
                  ]}
                />
              </div>
            </div>
            <div className={styles.ic_search_button}>
              <button type="submit" className="ic_btn ic_btn_lg">
                Search
              </button>
            </div>
          </>
        )}
      </div>
    </form>
  );
};

export default Search;
