"use client";
import MyTable from "@/components/Share/MyTable/MyTable";
import listingImg1 from "@/images/property-01.png";
import listingImg2 from "@/images/property-02.png";
import listingImg3 from "@/images/property-03.png";
import listingImg4 from "@/images/property-04.png";
import listingImg5 from "@/images/property-05.png";
import { Col, Row, Select } from "antd";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { LuPen } from "react-icons/lu";
import { RiDeleteBinLine, RiMapPinLine } from "react-icons/ri";
import styles from "./my-properties.module.css";

const MyPropertiesPage = () => {
  type ListingRecord = {
    image: string;
    name: string;
    price: string | number;
    location: string;
  };
  const dataSource = [
    {
      key: "1",
      name: "Holiday Luxury House",
      image: listingImg1,
      date: "March 12, 2024",
      price: "$7,500",
      location: "New York",
      view: 2000,
      status: "Approved",
    },
    {
      key: "2",
      name: "Gorgeous Apartment",
      image: listingImg2,
      date: "March 12, 2024",
      price: "$7,500",
      location: "New York",
      view: 1500,
      status: "Pending",
    },
    {
      key: "3",
      name: "Villa One Hyde Park",
      image: listingImg3,
      date: "March 12, 2024",
      price: "$7,500",
      location: "New York",
      view: 2200,
      status: "Sold",
    },
    {
      key: "4",
      name: "Jacks Restaurant For rent",
      image: listingImg4,
      date: "March 12, 2024",
      price: "$7,500",
      location: "New York",
      view: 2500,
      status: "Pending",
    },
    {
      key: "5",
      name: "Jacks Restaurant For rent",
      image: listingImg5,
      date: "March 12, 2024",
      price: "$7,500",
      location: "New York",
      view: 2500,
      status: "Pending",
    },
  ];

  const columns = [
    {
      title: "Listing Title",
      dataIndex: "listing",
      render: (text: string, record: ListingRecord) => (
        <div className={styles.ic_listing}>
          <Image
            src={record.image}
            alt="listing"
            width={150}
            height={100}
            className={styles.ic_listing_img}
          />
          <div className={styles.ic_listing_content}>
            <h6 className="ic_fw_500 ic_title_color">{record.name}</h6>
            <p className="body_s ic_fw_600 ic_primary_color">{record.price}</p>
            <p className={styles.ic_location}>
              <RiMapPinLine />
              {record.location}
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Date Published",
      dataIndex: "date",
      render: (data: string) => <p className="ic_title_color body_s">{data}</p>,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (data: string) => {
        let color = "";
        if (data === "Approved") {
          color = "ic_green";
        } else if (data === "Pending") {
          color = "ic_yellow";
        } else if (data === "Sold") {
          color = "ic_blue";
        } else {
          color = "ic_default";
        }
        return <p className={`ic_status ${color}`}>{data}</p>;
      },
    },
    {
      title: "View",
      dataIndex: "view",
      render: (data: string) => <p className="ic_title_color body_s">{data}</p>,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <div className="ic_table_action">
          <button>
            <LuPen />
          </button>
          <button>
            <RiDeleteBinLine />
          </button>
        </div>
      ),
    },
  ];
  return (
    <div className="ic_dashboard_card">
      <h5 className="ic_mb_20 ic_fw_600 ic_title_color">My Properties</h5>
      <div className={styles.ic_new_listing_filter}>
        <Row
          gutter={[
            { sm: 12, md: 12, lg: 12 },
            { xs: 12, sm: 12, md: 12, lg: 12 },
          ]}
        >
          <Col xs={24} sm={12} md={6} lg={6}>
            <div className={styles.ic_filter_search}>
              <input type="text" placeholder="Search" />
              <IoSearchOutline />
            </div>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <Select
              placeholder="Status"
              style={{
                width: "100%",
                height: "40px",
              }}
              options={[
                {
                  value: "active",
                  label: "Active",
                },
                {
                  value: "pending",
                  label: "Pending",
                },
                {
                  value: "sold",
                  label: "Sold",
                },
              ]}
            />
          </Col>
        </Row>
      </div>
      <MyTable data={dataSource} columns={columns} pageSize={5} />
    </div>
  );
};

export default MyPropertiesPage;
