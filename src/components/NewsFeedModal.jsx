import { useState } from "react"
import { Modal, Button, Image, Form } from "react-bootstrap"

const NewsFeedModal = ({modal, setModal, setReload}) => {

const [buttonStatus, setButtonStatus] = useState(true)
const hideModal = () => {
  setModal(false)
}

const [post, setPost] = useState({text: ""})

const enableButton = (e) => {

    if (e.target.value.length > 0) {
        setButtonStatus(false)

     } else {
            setButtonStatus(true)
        }

    setPost({text: e.target.value})
    console.log(post)
    }


    const postPost = async () => {
        try{
        const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/",
        {method: "POST", 
        body: JSON.stringify(post),
        headers: {
        'Content-Type': 'application/json',
         Authorization:
           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0YWE0ZTA0NDhiNDAwMTUxMTY4OTIiLCJpYXQiOjE2NDU1MjE0ODcsImV4cCI6MTY0NjczMTA4N30.4JUxJJE6E2G8CkzqkOSSRICgdSveBWxuq1Ae6PFpsbs",
       }}
       );
       if (response.ok) {
         console.log(response.json)
         console.log("post posted")
         setModal(false)
         setReload(response)
         } 
      } catch (error) {
       console.log(error);
      }
      }

    return(<>
  <Modal id="postModal" onHide={hideModal} show={modal}>
              <Modal.Header closeButton>
                <div style={{fontSize: "19px"}} className="ml-2">Create a Post</div>
              </Modal.Header>
           
    <div className="d-flex ml-4 mt-3">
        <Image alt="profile-Image" style={{borderRadius: "50%", objectFit:"cover"}} height="48px" width="48px" src="https://media-exp1.licdn.com/dms/image/C5603AQEN7LDogUjyfw/profile-displayphoto-shrink_100_100/0/1576483727686?e=1651104000&v=beta&t=nmywlNegu0DsNyviFr2tl9jbFVoflqPT1IQd-u89ZXA"></Image>
        <div className="ml-2 mt-n1">
            <div style={{fontSize:"16px", fontWeight:"600"}}>Julita Wilczek</div>
        <Button id="sharingSettings"><i className="bi bi-globe" style={{fontSize:"14px"}} ></i> Anyone</Button>
        </div>
    </div>
    <div>
        <Form>
    <Form.Group  className="m-3">
          <Form.Control
          style={{border: "none"}}
            as="textarea"
            onChange={(e)=>{enableButton(e)}}
            rows={3}
            placeholder="What do you want to talk about?"
          />
        </Form.Group>
        </Form>
    </div>
    <div className="ml-3" style={{color: "#0a66c2", fontSize:"16px", fontWeight: "600"}}>Add hashtag</div>
  
              <Modal.Footer style={{border: "none"}} className="ml-n2 d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                  <div style={{borderRight: "1px solid rgba(0, 0, 0, 0.2)"}}>
        <Button className="postFooterbuttons" ><i className="bi bi-image"></i></Button>
        <Button className="postFooterbuttons" ><i className="bi bi-play-btn-fill"></i></Button>
        <Button className="postFooterbuttons" ><i className="bi bi-file-earmark-text-fill"></i></Button>
        <Button className="postFooterbuttons"><i className="bi bi-briefcase-fill"></i></Button>
        <Button className="postFooterbuttons"><i className="bi bi-award-fill"></i></Button>
        <Button className="postFooterbuttons"><i class="bi bi-bar-chart-line-fill"></i></Button>
        <Button className="postFooterbuttons" ><i class="bi bi-three-dots"></i></Button>
        </div>
        <div><Button className="postFooterbuttons ml-2"> <i style={{fontSize:"14px"}}class="bi bi-chat-text"></i> Anyone </Button></div>
        </div>
        <Button id="postButton" disabled={buttonStatus} onClick={() => {postPost()}}> Post </Button>
              </Modal.Footer>
            </Modal>
    </>)
} 

export default NewsFeedModal