"use client";
import Header from "@/components/Layout/Dashboard/Header/Header";
import Sidebar from "@/components/Layout/Dashboard/Sidebar/Sidebar";
import "@/styles/dashboard.css";
import React, { useState } from "react";

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isCollapse, setIsCollapse] = useState<boolean>(false);
  const handleSidebarHandle = () => {
    setIsCollapse(!isCollapse);
  };
  return (
    <div className="dashboard_wrapper">
      <Header
        handleSidebarHandle={handleSidebarHandle}
        isCollapse={isCollapse}
      />
      <Sidebar isCollapse={isCollapse} />
      <div
        className={`ic_dashboard_main_content_wrap ${
          isCollapse ? "collapsed" : ""
        }`}
      >
        {children}
      </div>
      <div
        className={`ic_dashboard_footer ${isCollapse ? "ic_collapsed" : ""}`}
      >
        <div className="ic_dashboard_footer_content">
          <p className="ic_fw_500 ic_body_color">
            © 2024 RealtyClan. All Rights Reserved.
          </p>
          <p className="ic_fw_500 ic_body_color">
            Design & Developed By ITclan BD.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
