import PageBreadcrumb from "@/components/Share/PageBreadcrumb/PageBreadcrumb";
import { Col, Row } from "antd";
import agentImg1 from "@/images/agent-01.png";
import agentImg2 from "@/images/agent-02.png";
import agentImg3 from "@/images/agent-03.png";
import agentImg4 from "@/images/agent-04.png";
import agentImg5 from "@/images/agent-05.png";
import agentImg8 from "@/images/agent-08.png";
import agentImg6 from "@/images/agent-06.png";
import agentImg7 from "@/images/agent-07.png";
import AgentItem from "@/components/Share/AgentItem/AgentItem";
import Pagination from "@/components/Share/Pagination/Pagination";

const AgentPage = () => {
  return (
    <>
      {/* page breadcrumb area */}
      <PageBreadcrumb
        breadcrumbInfo={{
          backgroundImg: "/images/agent-breadcrumb.png",
          title: "Our Agent",
          navItem: [
            {
              label: "Home",
              link: "/",
            },
            {
              label: "Agent",
              link: "/agent",
            },
          ],
        }}
      />
      {/* Agent area */}
      <section className="ic_section_space">
        <div className="ic_container">
          <Row
            gutter={[
              { lg: 24, md: 20, sm: 16, xs: 16 },
              { lg: 24, md: 20, sm: 16, xs: 16 },
            ]}
          >
            <Col xl={6} lg={8} md={8} sm={12} xs={24} className="gutter-row">
              <AgentItem
                agentInfo={{
                  id: 1,
                  thumbnail: agentImg1,
                  title: "Dentista Aguilda",
                  designation: "Selling Agent",
                }}
              />
            </Col>
            <Col xl={6} lg={8} md={8} sm={12} xs={24} className="gutter-row">
              <AgentItem
                agentInfo={{
                  id: 2,
                  thumbnail: agentImg2,
                  title: "Kelemen Krisztina",
                  designation: "Real Estate Agent",
                }}
              />
            </Col>
            <Col xl={6} lg={8} md={8} sm={12} xs={24} className="gutter-row">
              <AgentItem
                agentInfo={{
                  id: 3,
                  thumbnail: agentImg3,
                  title: "Szekeres Dalma",
                  designation: "Real Estate Broker",
                }}
              />
            </Col>
            <Col xl={6} lg={8} md={8} sm={12} xs={24} className="gutter-row">
              <AgentItem
                agentInfo={{
                  id: 4,
                  thumbnail: agentImg4,
                  title: "Katona Beatrix",
                  designation: "Property Seller",
                }}
              />
            </Col>
            <Col xl={6} lg={8} md={8} sm={12} xs={24} className="gutter-row">
              <AgentItem
                agentInfo={{
                  id: 5,
                  thumbnail: agentImg5,
                  title: "Kelemen Krisztina",
                  designation: "Real Estate Agent",
                }}
              />
            </Col>
            <Col xl={6} lg={8} md={8} sm={12} xs={24} className="gutter-row">
              <AgentItem
                agentInfo={{
                  id: 6,
                  thumbnail: agentImg6,
                  title: "Kelemen Krisztina",
                  designation: "Real Estate Agent",
                }}
              />
            </Col>
            <Col xl={6} lg={8} md={8} sm={12} xs={24} className="gutter-row">
              <AgentItem
                agentInfo={{
                  id: 7,
                  thumbnail: agentImg7,
                  title: "Szekeres Dalma",
                  designation: "Real Estate Agent",
                }}
              />
            </Col>
            <Col xl={6} lg={8} md={8} sm={12} xs={24} className="gutter-row">
              <AgentItem
                agentInfo={{
                  id: 8,
                  thumbnail: agentImg8,
                  title: "Katona Beatrix",
                  designation: "Real Estate Agent",
                }}
              />
            </Col>
          </Row>
          <Pagination />
        </div>
      </section>
    </>
  );
};

export default AgentPage;
