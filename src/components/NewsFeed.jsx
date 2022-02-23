import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import HeaderMini from "./HeaderMini";
import TagSection from "./TagSection";

const NewsFeed = () => {
  return (
    <Container id="page">
      <Row>
        <Col className="col-12 col-md-3">
          <HeaderMini />
          <TagSection />
        </Col>
        <Col className="col-12 col-md-6">
          {" "}
          <div>Center column</div>
        </Col>
        <Col className="col-12 col-md-3">
          <div>Left column</div>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsFeed;
