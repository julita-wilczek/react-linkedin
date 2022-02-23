

import { Container, Row, Col } from "react-bootstrap"
import AddToFeed from "./AddToFeed"
import Header from "./Header"
import HeaderMini from "./HeaderMini"
import MyNavBarMini from "./MyNavbarMini"
import NewsFeedModal from "./NewsFeedModal"
import PostAdd from "./PostAdd"
import PostArea from "./PostArea"
import TagSection from "./TagSection"
import PromotedSection from "./PromotedSection";
import { useState } from "react"

const NewsFeed = () => {

  const [modal, setModal] = useState(false)
  const [reload, setReload] = useState(null)


    return (

        <Container id="page">
        <Row>
            <Col className="col-12 col-md-3">
            <HeaderMini />
            <TagSection />
           
            </Col>
            <Col className="col-12 col-md-6">
            <PostAdd setModal={setModal}/>
            <PostArea reload={reload} />
            <NewsFeedModal setReload={setReload} modal={modal} setModal={setModal}/>
            </Col>
            <Col className="col-12 col-md-3">
                <AddToFeed />
               <PromotedSection />
     <MyNavBarMini />
            </Col>
            </Row>

    </Container>
  );
};

export default NewsFeed;
