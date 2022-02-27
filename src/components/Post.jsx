// This is component for single post

import { formatDistanceToNowStrict } from "date-fns";
import { Image, Button } from "react-bootstrap";
import { parseISO } from "date-fns";
import { Link } from "react-router-dom";
import "./Post.css";

const Post = (props) => {
  const posted = formatDistanceToNowStrict(parseISO(props.date)); // This is for estimating how much time passed since posting the post
  const linkTo =
    props.userId === "6214aa4e0448b40015116892"
      ? "/in/me"
      : "/in/" + props.userId;

  const likePost = (e) => {
  
    if (e.target.classList.value === "bi bi-hand-thumbs-up"){
    e.target.style.color = "#0a66c2"
    e.target.classList ="bi bi-hand-thumbs-up-fill"
   
  } else if (e.target.classList.value === "bi bi-hand-thumbs-up-fill") {
    e.target.style.color = "rgba(0, 0, 0, 0.6)"
    e.target.classList ="bi bi-hand-thumbs-up"
  }
  }
  return (
    <div className="single-post" key={props.key}>
      {/*This is the main container*/}
      <div className="d-flex justify-content-between">
        {/*This is post header*/}
        <div className="d-flex">
          <Link to={linkTo}>
            {/*This is Profile Image*/}
            <Image alt="profile-Image" src={props.image}></Image>
          </Link>
          <div className="d-flex flex-column">
            <div className="person-name">
              {props.name} {props.surname}
            </div>
            <div className="person-title"> {props.title} </div>

            <div className="post-details">
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
      <div>{props.text}</div> {/* This is post body*/}
      {props.imageUploaded !==
        undefined /* This is for post image, only shows when image was added to the post */ && (
        <Image alt="post-img" src={props.imageUploaded} />
      )}
      <hr />
      <div className="d-flex justify-content-around mt-n2 mb-n3">
        {/* This is post footer */}
        <Button className="post-buttons d-flex justify-content-center align-items-center">
          <i className="bi bi-hand-thumbs-up" onClick={(e)=>{likePost(e)}}><span>Like</span></i> 
        </Button>
        <Button className="post-buttons d-flex justify-content-center align-items-center">
          <i class="bi bi-chat-text"></i>Comment
        </Button>
        <Button className="post-buttons d-flex justify-content-center align-items-center">
          <i class="bi bi-arrow-right"></i>Share
        </Button>
        <Button className="post-buttons d-flex justify-content-center align-items-center">
          <i class="bi bi-send-fill"></i>Send
        </Button>
      </div>
    </div>
  );
};

export default Post;
