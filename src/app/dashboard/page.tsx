"use client";
import NewListing from "@/components/Dashboard/NewListing/NewListing";
import PropertyChart from "@/components/Dashboard/PropertyChart/PropertyChart";
import RecentMessage from "@/components/Dashboard/RecenetMessage/RecentMessage";
import RecentActivites from "@/components/Dashboard/RecentActivites/RecentActivites";
import Widget from "@/components/Dashboard/Widget/Widget";
import { Col, Row } from "antd";

const DashboardPage = () => {
  return (
    <>
      <div className="ic_mb_24">
        <Widget />
      </div>
      <Row
        gutter={[
          { xs: 24, sm: 24, md: 24, lg: 24 },
          { xs: 24, sm: 24, md: 24, lg: 24 },
        ]}
      >
        <Col md={24} lg={16}>
          <div className="ic_dashboard_card ic_mb_24">{<PropertyChart />}</div>
          <div className="ic_dashboard_card">
            <NewListing />
          </div>
        </Col>
        <Col md={24} lg={8}>
          <div className="ic_dashboard_card ic_mb_24">
            <RecentActivites />
          </div>
          <div className="ic_dashboard_card">
            <RecentMessage />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default DashboardPage;
