// we can fetch here conditionally
// here goes the controlled input form
// the content of this component will go into modal body

import {Form, Button} from "react-bootstrap"
import {useState, useEffect} from "react"


const EditForm = () => {

    const [role, SetRole] = useState("") 
    const [company, SetCompany] = useState("")
    const [startDate, SetStartDate] = useState("")  
    const [endDate, SetEndDate] = useState("")
    const [working, SetWorking] = useState(false)
    const [description, SetDescription] = useState("")
    const [area, SetArea] = useState("")
 


    const handleChange = (f, value) =>{

    }

    const toggleCheckbox =() => {
        if (working === true) {
            SetWorking(false)
        } else {SetWorking(true)}

    }
return(
    <>
    <Form>
     <Form.Group>
                  <Form.Label>Role</Form.Label>
              <Form.Control size="lg" type="text" value={role} placeholder="insert role" onChange={(e) => SetRole(e.target.value)} />
  <br />
  </Form.Group>
  <Form.Group>
      <Form.Label>Company</Form.Label> 
  <Form.Control type="text" value={company}  placeholder="insert company" onChange={(e) => SetCompany(e.target.value)} />
  <br />
  </Form.Group>
  <br />
  <Form.Group>
  <Form.Label>I am currently working for this role</Form.Label>
  <Form.Check type="checkbox" checked={working}   onChange={()=>{toggleCheckbox()}}  />
  </Form.Group>
  <br />
  <Form.Group>
  <Form.Label>Start date</Form.Label>
  <Form.Control type="date" value={startDate} placeholder="insert start date" onChange={(e) => SetStartDate(e.target.value)} />
  </Form.Group>
  <br />
  
  {!working && <Form.Group>
  <Form.Label>end date</Form.Label> 
  <Form.Control type="date" value={endDate} placeholder="Insert end date" onChange={(e) => SetEndDate(e.target.value)}  />
  </Form.Group>}
  <Form.Group>
      <Form.Label>Description</Form.Label> 
  <Form.Control type="text" value={description}  placeholder="insert description" onChange={(e) => SetDescription(e.target.value)} />
  </Form.Group>
  <br />
  <Form.Group>
      <Form.Label>Area</Form.Label> 
  <Form.Control type="text" value={area}  placeholder="insert Area" onChange={(e) => SetArea(e.target.value)} />
  </Form.Group>
  <br />
  </Form>
  <Button variant='primary' type='submit'>
            Save
          </Button>
    </>
)
   
    
}
export default EditForm



// Details Page -> ProfileSection -> ExperienceCard knows that it is in Details Page and not in the Profile Page, 
// because we set a condition there. So to this button (that is in the ExperienceCard Page) you attach some function
// and this function show the modal 
// You can put the modal in the ExperienceCard. 