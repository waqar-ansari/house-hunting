"use client";
import React, { useState } from "react";
import styles from "./localagent.module.css";
import { Col, Row } from "antd";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import img1 from "@/images/agent1.png";
import img2 from "@/images/agent2.png";
import img3 from "@/images/agent3.png";
import img4 from "@/images/agent4.png";
import img5 from "@/images/agent5.png";
import img6 from "@/images/agent6.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { RiMailOpenLine } from "react-icons/ri";
import { BsArrow90DegLeft } from "react-icons/bs";

const agents = [
  {
    id: 1,
    name: "Katona Beatrix",
    tittle: "Property Seller",
    location: "New York, USA",
    description:
      "From creative thinkers to strategic planners and dedicated professionals, our team collaborates closely to deliver exceptional results. Get to know the people who drive our vision forward and make.",
    phone: "+1 234 567 890",
    email: "benjamin@example.com",
    facebook: "https://facebook.com/benjamin",
    twitter: "https://twitter.com/benjamin",
    instagram: "https://instagram.com/benjamin",
    linkedin: "https://linkedin.com/in/benjamin",
    image: img1,
  },
  {
    id: 2,
    name: "Alice",
    tittle: "Property Seller",
    location: "Los Angeles, USA",
    description:
      "From creative thinkers to strategic planners and dedicated professionals.",
    phone: "+1 987 654 321",
    email: "alice@example.com",
    facebook: "https://facebook.com/alice",
    twitter: "https://twitter.com/alice",
    instagram: "https://instagram.com/alice",
    linkedin: "https://linkedin.com/in/alice",
    image: img2,
  },
  {
    id: 3,
    name: "Michael",
    tittle: "Property Seller",
    location: "Chicago, USA",
    description:
      "From creative thinkers to strategic planners and dedicated professionals, our team collaborates closely to deliver exceptional results. Get to know the people who drive our vision forward and make.",
    phone: "+1 555 444 333",
    email: "michael@example.com",
    facebook: "https://facebook.com/michael",
    twitter: "https://twitter.com/michael",
    instagram: "https://instagram.com/michael",
    linkedin: "https://linkedin.com/in/michael",
    image: img3,
  },
  {
    id: 4,
    name: "Mark",
    tittle: "Property Seller",
    location: "Miami, USA",
    description:
      " our team collaborates closely to deliver exceptional results. Get to know the people who drive our vision forward and make.",
    phone: "+1 222 333 444",
    email: "mark@example.com",
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
    image: img4,
  },
  {
    id: 5,
    name: "Sophie",
    tittle: "Property Seller",
    location: "Dallas, USA",
    description:
      "From creative thinkers to strategic planners and dedicated professionals, our team collaborates closely to deliver exceptional results.",
    phone: "+1 333 444 555",
    email: "sophie@example.com",
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
    image: img5,
  },
  {
    id: 6,
    name: "Laura",
    tittle: "Property Seller",
    location: "Seattle, USA",
    description:
      " Get to know the people who drive our vision forward and make.",
    phone: "+1 666 777 888",
    email: "laura@example.com",
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
    image: img6,
  },
];

const LocalAgent = () => {
  const [activeAgent, setActiveAgent] = useState(agents[0]);

  return (
    <section className={`ic_section_space ${styles.ic_local_agent}`}>
      <div className="ic_container">
        <Row justify="center">
          <Col xxl={12} xl={13}>
            <div className="ic_sec_heading text_center">
              <p className="ic_sub_title">Our Agent</p>
              <h2 className="ic_title ic_title_color">
                Choose Your Local Agent
              </h2>
              <p className="ic_des ic_body_color">
                From intuitive user interfaces to seamless integrations and
                advanced
              </p>
            </div>
          </Col>
        </Row>

        <Row gutter={32} align="middle">
          <Col lg={14} md={24}>
            <div className={styles.ic_agent_details}>
              <div className={styles.ic_agent_image}>
                <Image src={activeAgent.image} alt={activeAgent.name} />
              </div>
              <div className="ic_agent_img_inf">
                <h5 className="ic_title_color ic_fw_600 ic_mb_15">
                  {activeAgent.name}
                </h5>
                <p className="ic_secondary_color ic_mb_24">
                  {activeAgent.tittle}
                </p>
                <p className={styles.agentLocation}>
                  <HiOutlineLocationMarker /> {activeAgent.location}
                </p>
                <p
                  className={`${styles.ic_description} ic_des ic_body_color ic_mb_30`}
                >
                  {activeAgent.description}
                </p>

                <div className={`ic_mb_25 ${styles.ic_social_links}`}>
                  <div className={styles.ic_link_item}>
                    <a
                      href={activeAgent.facebook}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebookF />
                    </a>
                  </div>
                  <div className={styles.ic_link_item}>
                    <a
                      href={activeAgent.twitter}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaTwitter />
                    </a>
                  </div>
                  <div className={styles.ic_link_item}>
                    <a
                      href={activeAgent.instagram}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                  <div className={styles.ic_link_item}>
                    <a
                      href={activeAgent.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
                <div className={styles.ic_contact}>
                  <a href={`tel:${activeAgent.phone}`}>
                    <FiPhone />
                    {activeAgent.phone}
                  </a>
                  <a href={`mailto:${activeAgent.email}`}>
                    <RiMailOpenLine />
                    {activeAgent.email}
                  </a>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={10} md={24}>
            <div className={styles.ic_agent_list}>
              {agents.map((agent) => (
                <div key={agent.id} className={styles.ic_agent_item_main}>
                  <div
                    onClick={() => setActiveAgent(agent)}
                    className={`${styles.ic_agent_item} ${
                      activeAgent.id === agent.id ? styles.active : ""
                    }`}
                  >
                    <div className={styles.ic_img_main}>
                      <Image src={agent.image} alt={agent.name} />
                      <div className={styles.ic_hover}>
                        <BsArrow90DegLeft />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default LocalAgent;
