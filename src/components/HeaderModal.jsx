
import { useEffect, useState } from "react"
import { Modal, Button, Image, Form } from "react-bootstrap"

const HeaderModal = ({modal, setModal, setReload}) => {

const hideModal = () => {
  setModal(false)
}

const [profile, setProfile] = useState(
    {name: "",
    surname: "",
    email: "",
    bio: "",
    title: "",
    area: "",
    }

)
 

const profilePicture = new FormData()

const createPicture = (e) => {
  if (e.target && e.target.files[0]) {
    profilePicture.append("profile", e.target.files[0] ) // profile for profile picture, post for post picture, experience for experience picture
  }
  console.log(profilePicture)
} 


const uploadPicture = async () => {

  try {

    const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/6214aa4e0448b40015116892/picture", {
      method: "POST", 
      body: profilePicture, 
      headers: {

       Authorization:
         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0YWE0ZTA0NDhiNDAwMTUxMTY4OTIiLCJpYXQiOjE2NDU1MjE0ODcsImV4cCI6MTY0NjczMTA4N30.4JUxJJE6E2G8CkzqkOSSRICgdSveBWxuq1Ae6PFpsbs",
     }
    })

    if (response.ok) {
      setModal(false)
      setReload(response)
    } else {
      console.log("sth wrong")
    }

  } catch (error) {
    console.log(error)
  }
}

useEffect(()=>{fetchData()},[])

const fetchData = async () => {
    try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0YWE0ZTA0NDhiNDAwMTUxMTY4OTIiLCJpYXQiOjE2NDU1MjE0ODcsImV4cCI6MTY0NjczMTA4N30.4JUxJJE6E2G8CkzqkOSSRICgdSveBWxuq1Ae6PFpsbs'
            }
        })
        if (response.ok) {
            let data = await response.json()
            setProfile(data)
            //setIsLoading(false)
            //setIsError(false)
        } else {
            console.log('error')
            //setIsError(true)
            //setIsLoading(false)
        }
    } catch (error) {
        console.log(error)
        //setIsError(true)
        //setIsLoading(false)
    }
}



    const handleChange = (property, value) => {
        setProfile({
            ...profile,
            [property]: value,
          })
      }

    const updateProfile = async () => {
      
        try{
        const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/",
        {method: "PUT", 
        body: JSON.stringify(profile),
        headers: {
        'Content-Type': 'application/json',
         Authorization:
           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0YWE0ZTA0NDhiNDAwMTUxMTY4OTIiLCJpYXQiOjE2NDU1MjE0ODcsImV4cCI6MTY0NjczMTA4N30.4JUxJJE6E2G8CkzqkOSSRICgdSveBWxuq1Ae6PFpsbs",
       }}
       );
       if (response.ok) {
        uploadPicture()

         } 
      } catch (error) {
       console.log(error);
      }
      } 


    return(<>
  <Modal id="postModal" onHide={hideModal} show={modal}>
              <Modal.Header closeButton>
                <div style={{fontSize: "19px"}} className="ml-2">Edit intro</div>
              </Modal.Header>
           
    <div>
        <Form className="mx-3 mt-3 mb-1" style={{fontSize:"14px"}}>
      <div className="text-muted"><small>* Indicates required</small></div> 
        <Form.Group>
          <Form.Label className="text-muted mt-2 mb-0">First Name*</Form.Label>
          <Form.Control
            type="text"
            value={profile.name}
            onChange={(e) => {handleChange("name", e.target.value)}}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="text-muted mb-0">Last Name*</Form.Label>
          <Form.Control
            type="text"
            value={profile.surname}
            onChange={(e) => {handleChange("surname", e.target.value)}}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="text-muted mb-0">Headline*</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={profile.title}
            onChange={(e) => {handleChange("title", e.target.value)}}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="text-muted mb-0">Location*</Form.Label>
          <Form.Control
            type="text"
            value={profile.area}
            onChange={(e) => {handleChange("area", e.target.value)}}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="text-muted mb-0">Bio*</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={profile.bio}
            onChange={(e) => {handleChange("bio", e.target.value)}}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="text-muted mb-0">E-mail*</Form.Label>
          <Form.Control
            type="text"
            value={profile.email}
            onChange={(e) => {handleChange("email", e.target.value)}}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="text-muted mb-0">Profile Picture*</Form.Label>
          <Form.Control
            type="file"
            name="file_upload"
            onChange={createPicture}
          /> 
        </Form.Group>
        </Form>
    </div>
  
              <Modal.Footer style={{border: "none"}} className="ml-n2 d-flex justify-content-left">
        <Button id="postButton" onClick={() => {updateProfile()}}> Save </Button>
              </Modal.Footer>
            </Modal>
    </>)
} 

export default HeaderModal