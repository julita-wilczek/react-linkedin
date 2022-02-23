import { Image, Button } from "react-bootstrap"

const PostAdd = () => {

    // do the fetch
    return(
        <>
    <div id="topPost">
    <div className="d-flex">
        <Image alt="profile-Image" style={{borderRadius: "50%", objectFit:"cover"}} height="48px" width="48px" src="https://media-exp1.licdn.com/dms/image/C5603AQEN7LDogUjyfw/profile-displayphoto-shrink_100_100/0/1576483727686?e=1651104000&v=beta&t=nmywlNegu0DsNyviFr2tl9jbFVoflqPT1IQd-u89ZXA"></Image>
        <Button id="startPostButton" className="ml-2"> Start a post</Button>
    </div>
    <div className="d-flex mt-3 justify-content-between mt-0 mb-n2">
        <Button className="post-buttons d-flex align-items-center" ><i style={{color: "#70b5f9"}}className="bi bi-image mr-3"></i> Photo</Button>
        <Button className="post-buttons d-flex align-items-center" ><i style={{color: "#7fc15e"}} className="bi bi-play-btn-fill mr-3"></i>Video</Button>
        <Button className="post-buttons d-flex align-items-center" ><i style={{color: "#e7a33e"}}className="bi bi-calendar2-date mr-3"></i>Event</Button>
        <Button className="post-buttons d-flex align-items-center"><i style={{color: "#fc9295"}} className="bi bi-newspaper mr-3"></i> Article</Button>
    </div>
    </div>
    </>)
}

export default PostAdd 