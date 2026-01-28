"use client";
import PageBreadcrumb from "@/components/Share/PageBreadcrumb/PageBreadcrumb";
import { Col, Row, Switch } from "antd";
import Link from "next/link";
import { useState } from "react";
import styles from "./pricing.module.css";

const PricingPage = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleSwitch = (checked: boolean) => {
    setIsActive(checked);
  };

  const pricingPlans = [
    {
      plan: "Starter",
      price: {
        amount: "Free",
        billingCycle: null,
      },
      features: [
        "5 properties included",
        "12 months duration",
        "Space plan features",
        "Multiple sales pipelines",
        "5 Competitor SERP Analysis Per Month",
        "AI-powered contact scoring",
        "Built-in chat, email, & phone",
        "Transportation for you...",
      ],
    },
    {
      plan: "Basic",
      price: {
        amount: 15.2,
        billingCycle: "Month",
        billingType: "billed annually",
      },
      features: [
        "10 properties included",
        "Unlimited Users",
        "2,500 AI Writing Words Per Month",
        "Multiple sales pipelines",
        "5 Competitor SERP Analysis Per Month",
        "37+ AI Templates",
        "WordPress Blog Wizard",
        "WooCommerce Product Wizard...",
      ],
    },
    {
      plan: "Premium",
      price: {
        amount: 79.2,
        billingCycle: "Month",
        billingType: "billed annually",
      },
      popular: "Most Popular",
      features: [
        "15 properties included",
        "Unlimited Users",
        "2,500 AI Writing Words Per Month",
        "10 SEO Keyword Analysis Per Month",
        "Built-in chat, email, & phone",
        "AI-powered contact scoring",
        "37+ AI Templates",
        "WordPress Blog Wizard",
        "WooCommerce Product Wizard...",
      ],
    },
    {
      plan: "Business",
      price: {
        amount: 89.2,
        billingCycle: "Month",
        billingType: "billed annually",
      },
      features: [
        "Unlimited properties included",
        "Unlimited Users",
        "2,500 AI Writing Words Per Month",
        "10 SEO Keyword Analysis Per Month",
        "5 Competitor SERP Analysis Per Month",
        "Multiple sales pipelines",
        "37+ AI Templates",
        "WordPress Blog Wizard",
        "WooCommerce Product Wizard...",
      ],
    },
  ];

  return (
    <>
      {/* page breadcrumb area */}
      <PageBreadcrumb
        breadcrumbInfo={{
          backgroundImg: "/images/create-listing-breadcrumb.png",
          title: "Pricing Package",
          navItem: [
            {
              label: "Home",
              link: "/",
            },
            {
              label: "Pricing Package",
              link: `/Pricing Package`,
            },
          ],
        }}
      />
      {/* pricing area */}
      <section className="ic_section_space">
        <div className="ic_container">
          <div className={styles.ic_pricing_wrapper}>
            <div className={styles.ic_pricing_heading}>
              <span>Pricing Plan</span>
              <h2 className="ic_title_color">Pricing Plans For Every Budget</h2>
              <p className="ic_body_color">
                Highlight the best of your properties by using the List Category
                shortcode.
              </p>
            </div>
            <div className={`${styles.ic_change_monthly} ic_change_monthly`}>
              <span className={`${isActive ? "" : "ic_primary_color"}`}>
                Monthly
              </span>{" "}
              <Switch defaultChecked onChange={handleSwitch} />
              <span className={`${isActive ? "ic_primary_color" : ""}`}>
                Annually
              </span>
            </div>
          </div>
          <div className={styles.ic_plan_wrapper}>
            <Row
              align="middle"
              gutter={[
                { sm: 10, xs: 10, lg: 10 },
                { sm: 10, xs: 10, md: 10 },
              ]}
            >
              {pricingPlans.map((pricingPlan) => (
                <>
                  <Col xs={24} sm={12} md={12} lg={12} xl={6}>
                    <div
                      className={`${styles.ic_plan_item} ${
                        pricingPlan.popular ? styles.popular : ""
                      }`}
                    >
                      {pricingPlan.popular && (
                        <span className={styles.popular_name}>
                          {pricingPlan.popular}
                        </span>
                      )}
                      <div className={styles.ic_pricing_heading}>
                        <h5 className="h5_2 ic_title_color">
                          {pricingPlan.plan}
                        </h5>
                        <h3 className="ic_title_color">
                          {pricingPlan.price.amount}
                          {pricingPlan.price.billingCycle && (
                            <>
                              <span>
                                /{pricingPlan.price.billingCycle} (
                                {pricingPlan.price.billingType})
                              </span>
                            </>
                          )}
                        </h3>
                        <Link
                          href=""
                          className={`ic_btn ${styles.ic_btn_outline} w-100`}
                        >
                          Get Started
                        </Link>
                        <ul className={styles.ic_features}>
                          {pricingPlan.features.map((feature) => (
                            <>
                              <li className="ic_title_color">{feature}</li>
                            </>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Col>
                </>
              ))}
            </Row>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;
