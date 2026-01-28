import MyTable from "@/components/Share/MyTable/MyTable";
import React from "react";

const MyPackagePage = () => {
  const dataSource = [
    {
      key: "1",
      currentPackage: "Basic",
      propertiesRemaining: 5,
      featuredRemaining: 0,
      renewalRemaining: 0,
      storageSpace: "500MB",
      expiryDate: "March 12, 2024",
    },
    {
      key: "2",
      currentPackage: "Standard",
      propertiesRemaining: 10,
      featuredRemaining: 5,
      renewalRemaining: 5,
      storageSpace: "1GB",
      expiryDate: "March 12, 2024",
    },
    {
      key: "3",
      currentPackage: "Premium",
      propertiesRemaining: 20,
      featuredRemaining: 10,
      renewalRemaining: 10,
      storageSpace: "2GB",
      expiryDate: "March 12, 2024",
    },
    {
      key: "4",
      currentPackage: "Platinum",
      propertiesRemaining: 50,
      featuredRemaining: 20,
      renewalRemaining: 20,
      storageSpace: "5GB",
      expiryDate: "March 12, 2024",
    },
    {
      key: "5",
      currentPackage: "Basic",
      propertiesRemaining: 5,
      featuredRemaining: 0,
      renewalRemaining: 0,
      storageSpace: "500MB",
      expiryDate: "March 12, 2024",
    },
    {
      key: "6",
      currentPackage: "Basic",
      propertiesRemaining: 5,
      featuredRemaining: 0,
      renewalRemaining: 0,
      storageSpace: "500MB",
      expiryDate: "March 12, 2024",
    },
    {
      key: "7",
      currentPackage: "Standard",
      propertiesRemaining: 10,
      featuredRemaining: 5,
      renewalRemaining: 5,
      storageSpace: "1GB",
      expiryDate: "March 12, 2024",
    },
    {
      key: "8",
      currentPackage: "Premium",
      propertiesRemaining: 20,
      featuredRemaining: 10,
      renewalRemaining: 10,
      storageSpace: "2GB",
      expiryDate: "March 12, 2024",
    },
    {
      key: "9",
      currentPackage: "Platinum",
      propertiesRemaining: 50,
      featuredRemaining: 20,
      renewalRemaining: 20,
      storageSpace: "5GB",
      expiryDate: "March 12, 2024",
    },
    {
      key: "10",
      currentPackage: "Basic",
      propertiesRemaining: 5,
      featuredRemaining: 0,
      renewalRemaining: 0,
      storageSpace: "500MB",
      expiryDate: "March 12, 2024",
    },
  ];
  const columns = [
    {
      title: "Current Package",
      dataIndex: "currentPackage",
    },
    {
      title: "Properties Remaining",
      dataIndex: "propertiesRemaining",
    },
    {
      title: "Featured Remaining",
      dataIndex: "featuredRemaining",
    },
    {
      title: "Renewal Remaining",
      dataIndex: "renewalRemaining",
    },
    {
      title: "Storage Space",
      dataIndex: "storageSpace",
    },
    {
      title: "Expiry Date",
      dataIndex: "expiryDate",
    },
  ];
  return (
    <div className="ic_dashboard_card">
      <h5 className="ic_mb_20 ic_fw_600 ic_title_color">My Package</h5>
      <MyTable data={dataSource} columns={columns} pageSize={10} />
    </div>
  );
};

export default MyPackagePage;
