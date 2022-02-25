//This is the Header that appears on the News Feed Page (Left hand side)
//It containes our data so use CRUD for "me" profile
//GET https://striveschool-api.herokuapp.com/api/profile/me
import { Container, Row, Col, Image } from "react-bootstrap";
import "./HeaderMini.css";
import { useState, useEffect } from "react";

const HeaderMini = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0YWE0ZTA0NDhiNDAwMTUxMTY4OTIiLCJpYXQiOjE2NDU1MjE0ODcsImV4cCI6MTY0NjczMTA4N30.4JUxJJE6E2G8CkzqkOSSRICgdSveBWxuq1Ae6PFpsbs",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        setName({
          name: data.name,
          surname: data.surname,
        });
        setTitle(data.title);
        setImage(data.image);
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
          <Image src={image} id="userImage" className="mx-auto" />
          <div className="mb-3 mt-n3 text-center">
            <div className="font-weight-bold " id="userName">
              {name.name} {name.surname}
            </div>
            <div className="text-muted fontSize">{title}</div>
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
