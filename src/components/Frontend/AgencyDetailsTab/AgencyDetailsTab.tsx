"use client";
import React, { useEffect, useState } from "react";
import styles from "./details-tab.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const AgencyDetailsTab = () => {
  //component state
  const [activeTab, setActiveTab] = useState<string>("description");
  //router query
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const getParams = searchParams.get("details");
  useEffect(() => {
    if (getParams) {
      setActiveTab(getParams);
    }
  }, [getParams]);

  //handle tab
  const handleTab = (tab: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("details", tab);
    replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
    setActiveTab(tab);
  };
  return (
    <ul className={styles.ic_details_tab}>
      <li className={activeTab === "description" ? styles.active : ""}>
        <button onClick={() => handleTab("description")}>Description</button>
      </li>
      <li className={activeTab === "listing" ? styles.active : ""}>
        <button onClick={() => handleTab("listing")}>Listing</button>
      </li>
      <li className={activeTab === "agents" ? styles.active : ""}>
        <button onClick={() => handleTab("agents")}>Agents</button>
      </li>
      <li className={activeTab === "reviews" ? styles.active : ""}>
        <button onClick={() => handleTab("reviews")}>Reviews</button>
      </li>
    </ul>
  );
};

export default AgencyDetailsTab;
