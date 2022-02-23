import { Container, Col, Row, Image } from "react-bootstrap";
import "./AddToFeed.css";

const PromotedSection = () => {
  return (
    <Container id="feedContainer" className="mt-3">
      <div className="d-flex justify-content-between mt-2">
        <div id="titleFeedCard">Promoted </div>
        <i class="bi bi-three-dots"></i>
      </div>
      <Col>
        <Row className="pl-0 my-3 feedProfile">
          <Col className="pl-0 d-flex infoPromoted">
            <Image
              className="imgPromoted mr-2 pl-0 d-flex"
              src="https://picsum.photos/200"
            />
            <div className="infoPromoted">
              <div className="feedTitle">Solar Design</div>
              <div class="">
                <div className="feedJobType">Ecology for the future</div>
              </div>
            </div>
          </Col>
          <Col>
            <i class="bi bi-caret-right-fill"></i>
          </Col>
        </Row>
        <Row className="pl-0 my-3 feedProfile">
          <Col className="pl-0 d-flex infoPromoted">
            <Image
              className="imgPromoted mr-2 pl-0 d-flex"
              src="https://picsum.photos/200"
            />
            <div className="infoPromoted">
              <div className="feedTitle">Seas Cleaner</div>
              <div class="">
                <div className="feedJobType">
                  Try to make the world a better place, cleaning the oceans
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <i class="bi bi-caret-right-fill"></i>
          </Col>
        </Row>
        <Row className="pl-0 my-3 feedProfile">
          <Col className="pl-0 d-flex infoPromoted">
            <Image
              className="imgPromoted mr-2 pl-0 d-flex"
              src="https://picsum.photos/200"
            />
            <div className="infoPromoted">
              <div className="feedTitle">Working Remotly</div>
              <div class="">
                <div className="feedJobType">
                  Just a bunch of nerd sharing the same passion for the tech
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <i class="bi bi-caret-right-fill"></i>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default PromotedSection;
