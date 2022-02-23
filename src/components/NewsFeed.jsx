
import { Container, Row, Col } from "react-bootstrap"
import Header from "./Header"
import HeaderMini from "./HeaderMini"
import PostAdd from "./PostAdd"
import PostArea from "./PostArea"
import TagSection from "./TagSection"

const NewsFeed = () => {
    return (

        <Container id="page">
        <Row>
            <Col className="col-12 col-md-3">
            <div>Left column</div>
            <HeaderMini />
            <TagSection />
           
            </Col>
            <Col className="col-12 col-md-6">
            <PostAdd />
            <PostArea />
            </Col>
            <Col className="col-12 col-md-3">
     <div>Right column</div>
            </Col>
            </Row>

    </Container>
  );
};

export default NewsFeed;
