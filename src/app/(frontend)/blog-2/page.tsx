import PageBreadcrumb from "@/components/Share/PageBreadcrumb/PageBreadcrumb";
import { Col, Row } from "antd";
import React from "react";
import BlogSidebar from "@/components/Share/BlogSidebar/BlogSidebar";
import BlogItem from "@/components/Share/BlogItem/BlogItem";
import blogImg1 from "@/images/blog.png";
import blogImg2 from "@/images/blog-02.png";
import blogImg3 from "@/images/blog-03.png";
import Pagination from "@/components/Share/Pagination/Pagination";

const BlogPage2 = () => {
  return (
    <>
      {/* page breadcrumb area */}
      <PageBreadcrumb
        breadcrumbInfo={{
          backgroundImg: "/images/blog-breadcrumb.png",
          title: "Our Blog",
          navItem: [
            {
              label: "Home",
              link: "/",
            },
            {
              label: "Blog",
              link: "/blog-2",
            },
          ],
        }}
      />
      {/* Blog  area */}
      <section className="ic_section_space">
        <div className="ic_container">
          <Row gutter={{ lg: 24 }} justify={"space-between"}>
            <Col xxl={17} xl={17} md={24} sm={24} xs={24}>
              <Row
                gutter={[
                  { lg: 24, md: 16, sm: 16, xs: 16 },
                  { lg: 24, md: 16, sm: 16, xs: 16 },
                ]}
              >
                <Col className="gutter-row" xs={24}>
                  <BlogItem
                    blogInfo={{
                      id: "1",
                      thumbnail: blogImg1,
                      title: "Develop Relationships With  Human Resource.",
                      description:
                        "You must have ample knowledge about the management process to grow your business.",
                      author: "Author",
                      date: "September 16, 2023",
                    }}
                  />
                </Col>
                <Col className="gutter-row" xs={24}>
                  <BlogItem
                    blogInfo={{
                      id: "2",
                      thumbnail: blogImg2,
                      title: "These are the top 7 hotels in the world",
                      description:
                        "You must have ample knowledge about the management process to grow your business.",
                      author: "Author",
                      date: "September 16, 2023",
                    }}
                  />
                </Col>
                <Col className="gutter-row" xs={24}>
                  <BlogItem
                    blogInfo={{
                      id: "3",
                      thumbnail: blogImg3,
                      title: "You can now add products in your terminal",
                      description:
                        "You must have ample knowledge about the management process to grow your business.",
                      author: "Author",
                      date: "September 16, 2023",
                    }}
                  />
                </Col>
              </Row>
              <Pagination />
            </Col>
            <Col xxl={6} xl={7} md={24} sm={24} xs={24}>
              <BlogSidebar />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default BlogPage2;
