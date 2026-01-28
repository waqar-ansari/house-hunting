"use client";
import { Col, Row, Collapse } from "antd";
import styles from "./faq.module.css";
import faqImg from "@/images/faq.png";
import Image from "next/image";
import { BiMinus, BiPlus } from "react-icons/bi";
import type { CSSProperties } from "react";
import type { CollapseProps } from "antd";

const Faq = () => {
  //faq content
  const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
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
    <section className="ic_section_space">
      <div className="ic_container">
        <Row gutter={{ lg: 24 }}>
          <Col lg={12} className="gutter-row">
            <div className={styles.ic_faq_left}>
              <div className="ic_sec_heading">
                <p className="ic_sub_title">Any Questions</p>
                <h2 className="ic_title ic_title_color ">
                  Frequently Asked Questions
                </h2>
                <p className="ic_des ic_body_color">
                  Welcome to Dream Home. A brand-new community featuring
                  sophisticated apartm ent residences and stylish amenities in
                  one of L.A.’s most energetic locations. From to cityside or
                  poolside to fireside, this is where lifestyle
                </p>
              </div>
              <div>
                <Collapse
                  accordion
                  bordered={false}
                  style={{ background: "transparent" }}
                  items={getItems(panelStyle)}
                  expandIcon={({ isActive }) =>
                    isActive ? <BiMinus /> : <BiPlus />
                  }
                />
              </div>
            </div>
          </Col>
          <Col lg={12} className="gutter-row">
            <div className={styles.ic_faq_right}>
              <Image src={faqImg} className="ic_img_fluid" alt="faq" />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Faq;
