// This is component for single post

import { formatDistanceToNowStrict } from "date-fns"
import {Image, Button} from "react-bootstrap"
import { parseISO} from "date-fns";

const Post = ({text, name, surname, title, image, date, key, imageUploaded}) => {


    const posted = formatDistanceToNowStrict(parseISO(date))
    
 return(<div className="singlePost mb-n2" key={key}>
<div className="d-flex justify-content-between">
<div className="d-flex">
    <Image alt="profile-Image" style={{borderRadius: "50%", objectFit:"cover"}} height="48px" width="48px" src={image}></Image>
    <div className="ml-2 d-flex flex-column"><div style={{fontSize:"14px", fontWeight:"600"}}>{name} {surname}</div>
    <div style={{fontSize:"12px"}} className="text-muted postTitle"> {title} </div>
    
<div style={{fontSize:"12px"}} className="text-muted">{posted} • <i className="bi bi-globe" style={{fontSize:"12px"}} ></i></div>
    </div></div><div className=""><Button className="moreButton d-flex align-items-center justify-content-center" ><i class="bi bi-three-dots"></i></Button></div> </div>
    
    <div style={{fontSize:"14px"}}>{text}</div>
    {imageUploaded !== undefined && (<div><img width="100%" alt="testpicture"src={imageUploaded}/></div>)}
    <hr />
    <div className="d-flex mt-3 justify-content-around mt-n2 mb-n3">
    <Button className="post-buttons d-flex align-items-center" ><i className="bi bi-hand-thumbs-up mr-1"></i> Like </Button>
        <Button className="post-buttons d-flex align-items-center" ><i class="bi bi-chat-text mr-1"></i>Comment</Button>
        <Button className="post-buttons d-flex align-items-center" ><i class="bi bi-arrow-right mr-1"></i>Share</Button>
        <Button className="post-buttons d-flex align-items-center"><i class="bi bi-send-fill mr-1"></i>Send</Button>
    
    </div>


 </div>)

}

export default Post

/*
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>


<Card style={{ width: '18rem' }}>
  <Card.Header>Featured</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  </ListGroup>
</Card>

*/