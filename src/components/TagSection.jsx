// Component for News Feed Page
// Left Hand Side component
import "./TagSection.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import { useState } from "react";

const TagSection = () => {

  const [showMore, setShowMore] = useState(true)
  const [showLess, setShowLess] = useState(false)
  const [visibility, setVisibility] = useState(false)

  const showMoreFunction = () => {
    setShowMore(false)
    setShowLess(true)
    document.getElementById("tagSectionContainer").classList.remove("d-none")
  }

  const showLessFunction = () => {
    setShowMore(true)
    setShowLess(false)
    document.getElementById("tagSectionContainer").classList.add("d-none")
  } 
  return (
    <>
    {showMore && (<Button onClick={showMoreFunction} className="tag-button d-block d-md-none">Show More <i style={{fontSize:"13px"}} className="bi bi-chevron-compact-down"></i></Button>)}
    <Container id="tagSectionContainer" className="px-0 d-none d-md-inline-block">
      <Col className="px-0">
        <Row className="flex-column my-3 mx-3">
          <div className="fontSizeRecent">Recent</div>
          <div className="">
            <div className="fontSizeTagSection d-flex align-items-baseline recentTags">
              <i class="bi bi-people-fill mr-2"></i>
              <div>Javascript Full Stack Developer</div>
            </div>
            <div className="fontSizeTagSection d-flex align-items-baseline recentTags">
              <i class="bi bi-people-fill mr-2"></i>
              <div>Front End Developer Group</div>
            </div>
            <div className="fontSizeTagSection d-flex align-items-baseline recentTags">
              <i class="bi bi-people-fill mr-2"></i>
              <div>UX Designer| Ui Designer</div>
            </div>
          </div>
        </Row>
        <Row className="flex-column my-3 mx-3">
          <div className="fontSizeGroups">Groups</div>
          <div className="">
            <div className="fontSizeTagSection d-flex align-items-baseline recentTags">
              <i class="bi bi-people-fill mr-2"></i>
              <div>Javascript Full Stack Developer</div>
            </div>
            <div className="fontSizeTagSection d-flex align-items-baseline recentTags">
              <i class="bi bi-people-fill mr-2"></i>
              <div>Front End Developer Group</div>
            </div>
            <div className="fontSizeTagSection d-flex align-items-baseline recentTags">
              <i class="bi bi-people-fill mr-2"></i>
              <div>UX Designer| Ui Designer</div>
            </div>
            <div className="fontSizeTagSection d-flex align-items-baseline recentTags ml-4">
              See all
            </div>
          </div>
        </Row>
        <Row className="justify-content-between my-3 mx-3">
          <div className="fontSizeGroups">Events</div>
          <div>
            <i class="bi bi-plus-lg" id="plusEventsSign"></i>
          </div>
        </Row>
        <Row className="fontSizeGroups  mx-3 " id="">
          <div>Followed Hashtags</div>
        </Row>
        <hr className="w-100 mx-0" />
        <Row id="styleDiscoverMore" className="mt-2">
          <div className="m-auto">Discover More</div>
        </Row>
      </Col>
    </Container>
    {showLess && (<Button onClick={showLessFunction} className="tag-button d-block d-md-none">Show Less <i style={{fontSize:"13px"}} class="bi bi-chevron-compact-up"></i></Button>)}
    </>
  );
};

export default TagSection;
