

import { Container, Row, Col } from "react-bootstrap"
import AddToFeed from "../components/AddToFeed"
import Header from "../components/Header"
import HeaderMini from "../components/HeaderMini"
import MyFooterMini from "../components/MyFooterMini"
import NewsFeedModal from "../components/NewsFeedModal"
import PostAddSection from "../components/PostAddSection"
import PostAreaSection from "../components/PostAreaSection"
import TagSection from "../components/TagSection"
import PromotedSection from "../components/PromotedSection";
import { useState } from "react"


const NewsFeed = () => {

  const [modal, setModal] = useState(false)
  const [reload, setReload] = useState(null)
  const [myProfile, setMyProfile] = useState({})

    return (

      <Container id="page">
        <Row>
            <Col className="col-12 col-md-3">
              <HeaderMini setMyProfile={setMyProfile} myProfile={myProfile}/>
              <TagSection />
            </Col>

            <Col className="col-12 col-md-6">
              <PostAddSection myProfile={myProfile} setModal={setModal}/>
              <PostAreaSection reload={reload} />
              <NewsFeedModal setReload={setReload} modal={modal} setModal={setModal}/>
            </Col>
            
            <Col className="col-12 col-md-3">
              <AddToFeed />
              <PromotedSection />
              <MyFooterMini />
            </Col>
          </Row>
      </Container>
  );
};

export default NewsFeed;
