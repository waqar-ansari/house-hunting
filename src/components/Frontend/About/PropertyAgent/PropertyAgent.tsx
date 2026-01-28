import AgentItem from "@/components/Share/AgentItem/AgentItem";
import { Col, Row } from "antd";
import agentImg1 from "@/images/agent-01.png";
import agentImg2 from "@/images/agent-02.png";
import agentImg3 from "@/images/agent-03.png";
import agentImg4 from "@/images/agent-04.png";

const PropertyAgent = () => {
  return (
    <section className="ic_section_space">
      <div className="ic_container">
        <Row justify={"center"}>
          <Col xxl={14}>
            <div className="ic_sec_heading text_center">
              <p className="ic_sub_title">Property Agents</p>
              <h2 className="ic_title ic_title_color ">
                Professional & Dedicated Team
              </h2>
              <p className="ic_des ic_body_color">
                Highlight the best of your properties by using the List Category
                shortcode. You can list specific
              </p>
            </div>
          </Col>
        </Row>
        <Row
          gutter={[
            { lg: 24, md: 16, sm: 16, xs: 16 },
            { lg: 24, md: 16, sm: 16, xs: 16 },
          ]}
        >
          <Col lg={6} md={12} sm={12} xs={24} className="gutter-row">
            <AgentItem
              agentInfo={{
                id: 1,
                thumbnail: agentImg1,
                title: "Dentista Aguilda",
                designation: "Selling Agent",
              }}
            />
          </Col>
          <Col lg={6} md={12} sm={12} xs={24} className="gutter-row">
            <AgentItem
              agentInfo={{
                id: 1,
                thumbnail: agentImg2,
                title: "Kelemen Krisztina",
                designation: "Real Estate Agent",
              }}
            />
          </Col>
          <Col lg={6} md={12} sm={12} xs={24} className="gutter-row">
            <AgentItem
              agentInfo={{
                id: 1,
                thumbnail: agentImg3,
                title: "Szekeres Dalma",
                designation: "Real Estate Broker",
              }}
            />
          </Col>
          <Col lg={6} md={12} sm={12} xs={24} className="gutter-row">
            <AgentItem
              agentInfo={{
                id: 1,
                thumbnail: agentImg4,
                title: "Katona Beatrix",
                designation: "Property Seller",
              }}
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default PropertyAgent;
