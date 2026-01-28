import BlogItem from "@/components/Share/BlogItem/BlogItem";
import PageBreadcrumb from "@/components/Share/PageBreadcrumb/PageBreadcrumb";
import { Col, Row } from "antd";
import blogImg1 from "@/images/blog.png";
import blogImg2 from "@/images/blog-02.png";
import blogImg3 from "@/images/blog-03.png";
import blogImg4 from "@/images/blog-04.png";
import blogImg5 from "@/images/blog-05.png";
import blogImg6 from "@/images/blog-06.png";
import blogImg7 from "@/images/blog-07.png";
import blogImg8 from "@/images/blog-08.png";
import blogImg9 from "@/images/blog-09.png";
import Pagination from "@/components/Share/Pagination/Pagination";

const BlogPage = () => {
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
              link: "/blog",
            },
          ],
        }}
      />
      {/* Blog  area */}
      <section className="ic_section_space">
        <div className="ic_container">
          <Row
            gutter={[
              { lg: 24, md: 16, sm: 16, xs: 16 },
              { lg: 24, md: 16, sm: 16, xs: 16 },
            ]}
          >
            <Col className="gutter-row" lg={8} md={12} sm={24} xs={24}>
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
            <Col className="gutter-row" lg={8} md={12} sm={24} xs={24}>
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
            <Col className="gutter-row" lg={8} md={12} sm={24} xs={24}>
              <BlogItem
                blogInfo={{
                  id: "3",
                  thumbnail: blogImg3,
                  title:
                    "Income Properties Available in Tokyo Starting at $499,800",
                  description:
                    "You must have ample knowledge about the management process to grow your business.",
                  author: "Author",
                  date: "September 16, 2023",
                }}
              />
            </Col>
            <Col className="gutter-row" lg={8} md={12} sm={24} xs={24}>
              <BlogItem
                blogInfo={{
                  id: "4",
                  thumbnail: blogImg4,
                  title: "You can now add products in your terminal",
                  description:
                    "You must have ample knowledge about the management process to grow your business.",
                  author: "Author",
                  date: "September 16, 2023",
                }}
              />
            </Col>
            <Col className="gutter-row" lg={8} md={12} sm={24} xs={24}>
              <BlogItem
                blogInfo={{
                  id: "5",
                  thumbnail: blogImg5,
                  title: "The definitive guide to setting up your business",
                  description:
                    "You must have ample knowledge about the management process to grow your business.",
                  author: "Author",
                  date: "September 16, 2023",
                }}
              />
            </Col>
            <Col className="gutter-row" lg={8} md={12} sm={24} xs={24}>
              <BlogItem
                blogInfo={{
                  id: "6",
                  thumbnail: blogImg6,
                  title:
                    "How a visual artist redefines success in graphic design",
                  description:
                    "You must have ample knowledge about the management process to grow your business.",
                  author: "Author",
                  date: "September 16, 2023",
                }}
              />
            </Col>
            <Col className="gutter-row" lg={8} md={12} sm={24} xs={24}>
              <BlogItem
                blogInfo={{
                  id: "7",
                  thumbnail: blogImg7,
                  title: "How to design your site footer like we did",
                  description:
                    "You must have ample knowledge about the management process to grow your business.",
                  author: "Author",
                  date: "September 16, 2023",
                }}
              />
            </Col>
            <Col className="gutter-row" lg={8} md={12} sm={24} xs={24}>
              <BlogItem
                blogInfo={{
                  id: "8",
                  thumbnail: blogImg8,
                  title: "Lessons and insights from 8 years of Pixelgrade",
                  description:
                    "You must have ample knowledge about the management process to grow your business.",
                  author: "Author",
                  date: "September 16, 2023",
                }}
              />
            </Col>
            <Col className="gutter-row" lg={8} md={12} sm={24} xs={24}>
              <BlogItem
                blogInfo={{
                  id: "9",
                  thumbnail: blogImg9,
                  title: "How does writing influence your personal brand?",
                  description:
                    "You must have ample knowledge about the management process to grow your business.",
                  author: "Author",
                  date: "September 16, 2023",
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

export default BlogPage;
