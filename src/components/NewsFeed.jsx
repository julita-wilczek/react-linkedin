
import { Container, Row, Col } from "react-bootstrap"
import AddToFeed from "./AddToFeed"
import Header from "./Header"
import HeaderMini from "./HeaderMini"
import MyNavBarMini from "./MyNavbarMini"
import PostAdd from "./PostAdd"
import PostArea from "./PostArea"
import TagSection from "./TagSection"

const NewsFeed = () => {
    return (

        <Container id="page">
        <Row>
            <Col className="col-12 col-md-3">
            <HeaderMini />
            <TagSection />
           
            </Col>
            <Col className="col-12 col-md-6">
            <PostAdd />
            <PostArea />
            </Col>
            <Col className="col-12 col-md-3">
                <AddToFeed />
     <MyNavBarMini />
            </Col>
            </Row>

    </Container>
  );
};

export default NewsFeed;
