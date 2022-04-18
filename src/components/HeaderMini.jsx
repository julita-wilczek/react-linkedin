//This is the Header that appears on the News Feed Page (Left hand side)
//It containes our profile data so use CRUD for "me" profile
//GET https://striveschool-api.herokuapp.com/api/profile/me
import { Container, Row, Col, Image } from "react-bootstrap";
import "./HeaderMini.css";
import {useEffect } from "react";

const HeaderMini = (props) => {
  useEffect(() => {
    fetchData();
  }, []);

  /*This fetched my profile and this data can then be used in other parts of the NewsFeed page */
  
  const fetchData = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhYTQ4MDgyZWExZDAwMTViYjA1NWQiLCJpYXQiOjE2NTAyNzg2NjYsImV4cCI6MTY1MTQ4ODI2Nn0.6JbnsMx2f_LapEl9vU2JHole-4eJA8ktC8CQSNkfKeY",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        props.setMyProfile({
          name: data.name,
          surname: data.surname,
          title: data.title,
          image: data.image,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container id="headerMiniContainer" className="px-0">
      <Col className="d-flex flex-column justify-content-center">
        <Row>
          <Image
            src="https://picsum.photos/id/237/200/300"
            id="backgroundImage"
          />
        </Row>
        <Row className="d-flex flex-column align-items-center borderBottom ">
          <Image src={props.myProfile.image} id="userImage" className="mx-auto" />
          <div className="mb-3 mt-n3 text-center">
            <div className="font-weight-bold " id="userName">
            {props.myProfile.name} {props.myProfile.surname}
            </div>
            <div className="text-muted fontSize">{props.myProfile.title}</div>
          </div>
        </Row>
        <Row className="borderBottom fontSize headerMiniTag">
          <div className="w-100 mx-3 my-2">
            <div className="d-flex justify-content-between">
              <div className="text-muted">Connection</div>
              <div className="font-weight-bold" style={{ color: "blue" }}>
                1
              </div>
            </div>
            <div className="font-weight-bold">Grow your network</div>
          </div>
        </Row>
        <Row className="borderBottom fontSize headerMiniTag">
          <div className="mx-3 my-2">
            <div className="text-muted ">Access exclusive tools & insights</div>
            <div className="d-flex flex-row">
              <div>
                <i
                  className="bi bi-square-half mr-2 "
                  style={{ color: "gold" }}
                ></i>
              </div>
              <div className="font-weight-bold txtBlue">
                Get Hired Faster, Try Premium Free
              </div>
            </div>
          </div>
        </Row>
        <Row className="fontSize headerMiniTag">
          <div className="d-flex flex-row mx-3 my-2">
            <div>
              <i className="bi bi-bookmark-fill mr-2"></i>
            </div>
            <div className="font-weight-bold">My items</div>
          </div>
        </Row>
      </Col>
    </Container>
  );
};

export default HeaderMini;
