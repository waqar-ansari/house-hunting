import BlogItem from "@/components/Share/BlogItem/BlogItem";
import { Col, Row } from "antd";
import blogImg1 from "@/images/blog.png";
import blogImg2 from "@/images/blog-02.png";
import blogImg3 from "@/images/blog-03.png";

const Blog = () => {
  return (
    <section className="ic_section_space_bottom">
      <div className="ic_container">
        <Row justify={"center"}>
          <Col xxl={12} xl={13}>
            <div className="ic_sec_heading text_center">
              <p className="ic_sub_title">News & Blog</p>
              <h2 className="ic_title ic_title_color ">Latest News Feed</h2>
              <p className="ic_des ic_body_color">
                Highlight the best of your properties by using the List Category
                shortcode.
              </p>
            </div>
          </Col>
        </Row>
        <Row
          gutter={[
            { lg: 24, md: 16 },
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
                id: "1",
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
                id: "1",
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
        </Row>
      </div>
    </section>
  );
};

export default Blog;
