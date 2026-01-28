"use client";
import PageBreadcrumb from "@/components/Share/PageBreadcrumb/PageBreadcrumb";
import { Col, Collapse, Row } from "antd";
import React, { useState } from "react";
import type { CSSProperties } from "react";
import type { CollapseProps } from "antd";
import { BiMinus, BiPlus } from "react-icons/bi";
import styles from "./faq.module.css";

const FaqPage = () => {
  //component state
  const [activeTab, setActiveTab] = useState<string>("buy");
  //faq content
  const getItemsBuy: (panelStyle: CSSProperties) => CollapseProps["items"] = (
    panelStyle
  ) => [
    {
      key: "1",
      label: "How do we grow our customer revenue?",
      children: (
        <p className="ic_body_color">
          Denouncing pleasure and praising pain was born and I will give you a
          complete account of the system, and expound the actual teachings of
          the great
        </p>
      ),
      style: panelStyle,
    },
    {
      key: "2",
      label: "How do we grow our customer revenue?",
      children: (
        <p className="ic_body_color">
          Denouncing pleasure and praising pain was born and I will give you a
          complete account of the system, and expound the actual teachings of
          the great
        </p>
      ),
      style: panelStyle,
    },
    {
      key: "3",
      label: "How do we grow our customer revenue?",
      children: (
        <p className="ic_body_color">
          Denouncing pleasure and praising pain was born and I will give you a
          complete account of the system, and expound the actual teachings of
          the great
        </p>
      ),
      style: panelStyle,
    },
    {
      key: "4",
      label: "How do we grow our customer revenue?",
      children: (
        <p className="ic_body_color">
          Denouncing pleasure and praising pain was born and I will give you a
          complete account of the system, and expound the actual teachings of
          the great
        </p>
      ),
      style: panelStyle,
    },
  ];
  const getItemsSell: (panelStyle: CSSProperties) => CollapseProps["items"] = (
    panelStyle
  ) => [
    {
      key: "1",
      label: "How do we grow our customer revenue?",
      children: (
        <p className="ic_body_color">
          Denouncing pleasure and praising pain was born and I will give you a
          complete account of the system, and expound the actual teachings of
          the great
        </p>
      ),
      style: panelStyle,
    },
    {
      key: "2",
      label: "How do we grow our customer revenue?",
      children: (
        <p className="ic_body_color">
          Denouncing pleasure and praising pain was born and I will give you a
          complete account of the system, and expound the actual teachings of
          the great
        </p>
      ),
      style: panelStyle,
    },
  ];
  const getItemsRent: (panelStyle: CSSProperties) => CollapseProps["items"] = (
    panelStyle
  ) => [
    {
      key: "1",
      label: "How do we grow our customer revenue?",
      children: (
        <p className="ic_body_color">
          Denouncing pleasure and praising pain was born and I will give you a
          complete account of the system, and expound the actual teachings of
          the great
        </p>
      ),
      style: panelStyle,
    },
    {
      key: "2",
      label: "How do we grow our customer revenue?",
      children: (
        <p className="ic_body_color">
          Denouncing pleasure and praising pain was born and I will give you a
          complete account of the system, and expound the actual teachings of
          the great
        </p>
      ),
      style: panelStyle,
    },
    {
      key: "3",
      label: "How do we grow our customer revenue?",
      children: (
        <p className="ic_body_color">
          Denouncing pleasure and praising pain was born and I will give you a
          complete account of the system, and expound the actual teachings of
          the great
        </p>
      ),
      style: panelStyle,
    },
  ];
  const getItemsOther: (panelStyle: CSSProperties) => CollapseProps["items"] = (
    panelStyle
  ) => [
    {
      key: "1",
      label: "How do we grow our customer revenue?",
      children: (
        <p className="ic_body_color">
          Denouncing pleasure and praising pain was born and I will give you a
          complete account of the system, and expound the actual teachings of
          the great
        </p>
      ),
      style: panelStyle,
    },
  ];
  //panel styles
  const panelStyle: React.CSSProperties = {
    marginBottom: 20,
    background: "#fff",
    borderRadius: "6px",
    boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.08)",
    border: "none",
    padding: "10px 10px",
  };
  return (
    <>
      {/* page breadcrumb area */}
      <PageBreadcrumb
        breadcrumbInfo={{
          backgroundImg: "/images/faq-breadcrumb.png",
          title: "Frequently Asked Questions",
          navItem: [
            {
              label: "Home",
              link: "/",
            },
            {
              label: "Faq",
              link: "/faq",
            },
          ],
        }}
      />
      {/* Faq area */}
      <section className="ic_section_space">
        <div className="ic_container">
          <Row justify={"center"}>
            <Col lg={15}>
              <div className="ic_sec_heading text_center">
                <p className="ic_sub_title">FAQ</p>
                <h2 className="ic_title ic_title_color ">
                  Frequently Asked Questions
                </h2>
                <p className="ic_des ic_body_color">
                  A brand-new community featuring sophisticated apartm ent
                  residences and stylish amenities in one of L.A.’s most
                  energetic locations. From to cityside
                </p>
              </div>
              <div className={styles.ic_faq_wrapper}>
                <div className={`${styles.ic_faq_tab_btn} ic_mb_40`}>
                  <button
                    className={activeTab === "buy" ? styles.active : ""}
                    onClick={() => setActiveTab("buy")}
                  >
                    Home Buying
                  </button>
                  <button
                    className={activeTab === "sell" ? styles.active : ""}
                    onClick={() => setActiveTab("sell")}
                  >
                    Home Selling
                  </button>
                  <button
                    className={activeTab === "rent" ? styles.active : ""}
                    onClick={() => setActiveTab("rent")}
                  >
                    Home Renting
                  </button>
                  <button
                    className={activeTab === "other" ? styles.active : ""}
                    onClick={() => setActiveTab("other")}
                  >
                    Other
                  </button>
                </div>
                {activeTab === "buy" && (
                  <Collapse
                    accordion
                    bordered={false}
                    style={{ background: "transparent" }}
                    items={getItemsBuy(panelStyle)}
                    expandIcon={({ isActive }) =>
                      isActive ? <BiMinus /> : <BiPlus />
                    }
                  />
                )}
                {activeTab === "sell" && (
                  <Collapse
                    accordion
                    bordered={false}
                    style={{ background: "transparent" }}
                    items={getItemsSell(panelStyle)}
                    expandIcon={({ isActive }) =>
                      isActive ? <BiMinus /> : <BiPlus />
                    }
                  />
                )}
                {activeTab === "rent" && (
                  <Collapse
                    accordion
                    bordered={false}
                    style={{ background: "transparent" }}
                    items={getItemsRent(panelStyle)}
                    expandIcon={({ isActive }) =>
                      isActive ? <BiMinus /> : <BiPlus />
                    }
                  />
                )}
                {activeTab === "other" && (
                  <Collapse
                    accordion
                    bordered={false}
                    style={{ background: "transparent" }}
                    items={getItemsOther(panelStyle)}
                    expandIcon={({ isActive }) =>
                      isActive ? <BiMinus /> : <BiPlus />
                    }
                  />
                )}
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default FaqPage;
