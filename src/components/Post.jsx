// This is component for single post

import { formatDistanceToNowStrict } from "date-fns";
import { Image, Button } from "react-bootstrap";
import { parseISO } from "date-fns";
import { Link } from "react-router-dom";
import "./Post.css"

const Post = (props) => {
  const posted = formatDistanceToNowStrict(parseISO(props.date));
  const linkTo =
    props.userId === "6214aa4e0448b40015116892" ? "/in/me" : "/in/" + props.userId;
  return (
    <div className="single-post" key={props.key}> {/*This is the main container*/}
      <div className="d-flex justify-content-between"> {/*This is header container*/}
        <div className="d-flex">
          <Link to={linkTo}> {/*This is Profile Image*/}
            {" "}
            <Image
              alt="profile-Image"
              src={props.image}
            ></Image>
          </Link>
          <div className="d-flex flex-column">
            <div className="person-name">
              {props.name} {props.surname}
            </div>
            <div className="text-muted person-title">
              {" "}
              {props.title}{" "}
            </div>

            <div style={{ fontSize: "12px" }} className="text-muted ">
              {posted} •{" "}
              <i className="bi bi-globe" style={{ fontSize: "12px" }}></i>
            </div>
          </div>
        </div>
        <div>
          <Button className="more-button d-flex align-items-center justify-content-center">
            <i class="bi bi-three-dots"></i>
          </Button>
        </div>{" "}
      </div>

      <div style={{ fontSize: "14px" }}>{props.text}</div>
      {props.imageUploaded !== undefined && (
        <div>
          <img width="100%" alt="testpicture" src={props.imageUploaded} />
        </div>
      )}
      <hr />
      <div className="d-flex justify-content-around mt-n2 mb-n3">
        <Button className="post-buttons d-flex align-items-center">
          <i className="bi bi-hand-thumbs-up mr-1"></i> Like{" "}
        </Button>
        <Button className="post-buttons d-flex align-items-center">
          <i class="bi bi-chat-text mr-1"></i>Comment
        </Button>
        <Button className="post-buttons d-flex align-items-center">
          <i class="bi bi-arrow-right mr-1"></i>Share
        </Button>
        <Button className="post-buttons d-flex align-items-center">
          <i class="bi bi-send-fill mr-1"></i>Send
        </Button>
      </div>
    </div>
  );
};

export default Post;

