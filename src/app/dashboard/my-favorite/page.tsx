import PropertyListItem from "@/components/Share/PropertyItem/PropertyListItem";
import propertyImg1 from "@/images/property-01.png";
import propertyImg2 from "@/images/property-02.png";
import propertyImg3 from "@/images/property-03.png";
import propertyImg4 from "@/images/property-04.png";
import propertyImg5 from "@/images/property-05.png";
import { Col, Row } from "antd";
import Link from "next/link";

const MyFavoritesPage = () => {
  return (
    <div className="ic_dashboard_card">
      <div className="ic_favorites_card">
        <Row
          gutter={[
            { sm: 24, xs: 24, lg: 24 },
            { sm: 24, xs: 24, md: 24 },
          ]}
        >
          <Col xs={24} lg={12}>
            <Link href="#">
              <PropertyListItem
                propertyInfo={{
                  thumbnail: propertyImg1,
                  title: "Luxury Family home",
                  type: "For Rent",
                  price: 796.59,
                  info: {
                    size: "1200",
                    beds: "2",
                    baths: "1",
                  },
                  location: "4517 Washington Ave. Manchester",
                  propertyType: "Modern House",
                  isFavorite: true,
                }}
              />
            </Link>
          </Col>
          <Col xs={24} lg={12}>
            <Link href="#">
              <PropertyListItem
                propertyInfo={{
                  thumbnail: propertyImg3,
                  title: "Jacks Restaurant For rent",
                  type: "For Rent",
                  price: 900.59,
                  info: {
                    size: "1200",
                    beds: "2",
                    baths: "1",
                  },
                  location: "4517 Washington Ave. Manchester",
                  propertyType: "Modern House",
                  isFavorite: true,
                }}
              />
            </Link>
          </Col>
          <Col xs={24} lg={12}>
            <Link href="#">
              <PropertyListItem
                propertyInfo={{
                  thumbnail: propertyImg5,
                  title: "Highland Park Residences",
                  type: "For Rent",
                  price: 600.59,
                  info: {
                    size: "1200",
                    beds: "2",
                    baths: "1",
                  },
                  location: "4517 Washington Ave. Manchester",
                  propertyType: "Modern House",
                  isFavorite: true,
                }}
              />
            </Link>
          </Col>
          <Col xs={24} lg={12}>
            <Link href="#">
              <PropertyListItem
                propertyInfo={{
                  thumbnail: propertyImg2,
                  title: "Highland Park Residences",
                  type: "For Rent",
                  price: 600.59,
                  info: {
                    size: "1200",
                    beds: "2",
                    baths: "1",
                  },
                  location: "4517 Washington Ave. Manchester",
                  propertyType: "Modern House",
                  isFavorite: true,
                }}
              />
            </Link>
          </Col>
          <Col xs={24} lg={12}>
            <Link href="#">
              <PropertyListItem
                propertyInfo={{
                  thumbnail: propertyImg4,
                  title: "Luxury Family home",
                  type: "For Rent",
                  price: 796.59,
                  info: {
                    size: "1200",
                    beds: "2",
                    baths: "1",
                  },
                  location: "4517 Washington Ave. Manchester",
                  propertyType: "Modern House",
                  isFavorite: true,
                }}
              />
            </Link>
          </Col>
          <Col xs={24} lg={12}>
            <Link href="#">
              <PropertyListItem
                propertyInfo={{
                  thumbnail: propertyImg3,
                  title: "Jacks Restaurant For rent",
                  type: "For Rent",
                  price: 900.59,
                  info: {
                    size: "1200",
                    beds: "2",
                    baths: "1",
                  },
                  location: "4517 Washington Ave. Manchester",
                  propertyType: "Modern House",
                  isFavorite: true,
                }}
              />
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MyFavoritesPage;
