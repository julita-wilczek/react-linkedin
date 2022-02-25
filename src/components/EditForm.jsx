// we can fetch here conditionally
// here goes the controlled input form
// the content of this component will go into modal body

import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { parseISO, format } from "date-fns";
import { useLocation } from "react-router-dom";

const EditForm = ({expId, setExperience, experience, setExpImg}) => {
  const [working, SetWorking] = useState(false);
  const location = useLocation()
  
  useEffect(() => {
    fetchData();
  }, []);


  const experiencePicture = new FormData()

const createPicture = (e) => {
  if (e.target && e.target.files[0]) {
    experiencePicture.append("experience", e.target.files[0] )
    setExpImg(experiencePicture) // profile for profile picture, post for post picture, experience for experience picture
  }

} 

  const fetchData = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/6214aa4e0448b40015116892/experiences/" +expId, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0YWE0ZTA0NDhiNDAwMTUxMTY4OTIiLCJpYXQiOjE2NDU1MjE0ODcsImV4cCI6MTY0NjczMTA4N30.4JUxJJE6E2G8CkzqkOSSRICgdSveBWxuq1Ae6PFpsbs",
        },
      });
      if (response.ok) {
        let data = await response.json();
        console.log(data)
        setExperience({role: data.role,
            company: data.company,
            startDate: format(parseISO(data.startDate), "yyyy-MM-dd"),
            endDate: (typeof data.endDate === "undefined" || data.endDate === null) ? SetWorking(true) : format(parseISO(data.endDate), "yyyy-MM-dd"),
            description: data.description,
            area: data.area})
        } 
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (property, value) => {
  
    setExperience({
        ...experience,
        [property]: value,
      })
      console.log(experience)

  }

  const toggleCheckbox = () => {
    if (working === true) {
      SetWorking(false);
    } else {
      SetWorking(true);
      setExperience({
        ...experience,
        endDate: "",
      })
      console.log(experience)
    }
  };
  return (
    <>
    
      <Form id="form">
      <small>* Indicates required</small>  
        <Form.Group>
          <Form.Label className="text-muted">Title*</Form.Label>
          <Form.Control
            type="text"
            value={experience.role}
            placeholder="insert role"
            onChange={(e) => {handleChange("role", e.target.value)}}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="text-muted">Company name</Form.Label>
          <Form.Control
            type="text"
            value={experience.company}
            placeholder="insert company"
            onChange={(e) => {handleChange("company", e.target.value)}}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Location*</Form.Label>
          <Form.Control
            type="text"
            value={experience.area}
            placeholder="insert Area"
            onChange={(e) => {handleChange("area", e.target.value)}}
          />
        </Form.Group>
        <Form.Group>
        <Form.Check
            type="checkbox"
            className="d-inline-block"
            checked={working}
            onChange={()=>{toggleCheckbox()}}
          /> <Form.Label className="text-muted">I am currently working for this role</Form.Label>
          
        </Form.Group>
        <Form.Group>
          <Form.Label>Start date*</Form.Label>
          <Form.Control
            type="date"
            value={experience.startDate}
            placeholder="insert start date"
            onChange={(e) => {handleChange("startDate", e.target.value)}}
          />
        </Form.Group>

          <Form.Group>
            <Form.Label>End date*</Form.Label>
            <Form.Control
              type="date"
              disabled={working}
              value={experience.endDate}
              placeholder="Insert end date"
              onChange={(e) => {handleChange("endDate", e.target.value)}}
            />
          </Form.Group>
        
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={experience.description}
            placeholder="insert description"
            onChange={(e) => {handleChange("description", e.target.value, e)}}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="text-muted mb-0">Profile picture*</Form.Label>
          <Form.Control
            type="file"
            name="file_upload"
            onChange={createPicture}
          /> 

        </Form.Group>
     
      </Form>
    </>
  );
};
export default EditForm;
