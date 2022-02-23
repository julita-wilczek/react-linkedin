// Component for News Feed Page
// Left Hand Side component
import "./TagSection.css";
import { Container, Col, Row } from "react-bootstrap";

const TagSection = () => {
  return (
    <Container id="tagSectionContainer" className="px-0">
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
  );
};

export default TagSection;
