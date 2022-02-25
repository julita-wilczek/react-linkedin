// we can fetch here conditionally
// here goes the controlled input form
// the content of this component will go into modal body

import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { parseISO, format } from "date-fns";

const EditForm = ({expId, setExperience, experience, setExpImg}) => {
  const [working, SetWorking] = useState(false);

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
            endDate: (typeof data.endDate === "undefined") ? SetWorking(true) : format(parseISO(data.endDate), "yyyy-MM-dd"),
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
      delete experience.endDate
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

/*
import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class ReservationForm extends Component {
  state = {
    reservation: {
      name: '',
      phone: '',
      numberOfPeople: 1,
      smoking: false,
      dateTime: '',
      specialRequests: '',
    },
  }

  handleChange = (property, value) => {
    // property and value are both strings (even if value can be also a boolean)
    // what pieces of info do we need to make this function
    // able to work on every onChange of every input field
    this.setState({
      reservation: {
        ...this.state.reservation,
        [property]: value,
      },
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    // this will prevent the browser from refreshing,
    // put this as the first line of every handle submit function!
    // url -> https://striveschool-api.herokuapp.com/api/reservation
    // let's recap two ways of doing a fetch:
    // 1) CHAINED THENs METHOD
    // fetch('https://striveschool-api.herokuapp.com/api/reservation', {
    //   method: 'POST',
    //   body: JSON.stringify(this.state.reservation),
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data)
    //     alert('reservation saved!')
    //     this.setState({
    //       reservation: {
    //         name: '',
    //         phone: '',
    //         numberOfPeople: 1,
    //         smoking: false,
    //         dateTime: '',
    //         specialRequests: '',
    //       },
    //     })
    //   })
    //   .catch((error) => console.log(error))
    // 2) ASYNC/AWAIT PATTERN
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/reservation',
        {
          method: 'POST',
          body: JSON.stringify(this.state.reservation),
          headers: {
            'Content-type': 'application/json',
          },
        }
      )
      if (response.ok) {
        console.log(response)
        alert('reservation saved!')
        this.setState({
          reservation: {
            name: '',
            phone: '',
            numberOfPeople: 1,
            smoking: false,
            dateTime: '',
            specialRequests: '',
          },
        })
      } else {
        // what type of error will fall here?
        // here it means you connected to the server, but something went wrong!
        alert('something went wrong! please try again')
        // just some examples...
        if (response.status === 400) {
          alert('some data was wrong')
        }
        if (response.status === 400) {
          alert('not found')
        }
      }
    } catch (error) {
      // what type of error will fall here?
      // you probably have some internet problems :(
      console.log(error)
    }
  }

  render() {
    return (
      <div className='mb-3'>
        <h2>Book your table here!</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Reservation name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter your name'
              value={this.state.reservation.name}
              onChange={(e) =>
                // this.setState({
                //   reservation: {
                //     ...this.state.reservation,
                //     // this is called a spread operator
                //     // that line is bringing in this new object
                //     // all the properties I currently have in this.state.reservation
                //     // so the name, the phone, the numberOfPeople
                //     // in this way I'm not losing anything in the process!
                //     name: e.target.value,
                //   },
                // })
                this.handleChange('name', e.target.value)
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter your phone'
              value={this.state.reservation.phone}
              onChange={(e) =>
                // this.setState({
                //   reservation: {
                //     ...this.state.reservation,
                //     phone: e.target.value,
                //   },
                // })
                this.handleChange('phone', e.target.value)
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>How many people?</Form.Label>
            <Form.Control
              as='select'
              value={this.state.reservation.numberOfPeople}
              onChange={(e) =>
                // this.setState({
                //   reservation: {
                //     ...this.state.reservation,
                //     numberOfPeople: e.target.value,
                //   },
                // })
                this.handleChange('numberOfPeople', e.target.value)
              }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Check
              type='checkbox'
              label='Do you smoke'
              checked={this.state.reservation.smoking}
              onChange={(e) =>
                // this.setState({
                //   reservation: {
                //     ...this.state.reservation,
                //     smoking: e.target.value,
                //   },
                // })
                this.handleChange('smoking', e.target.checked)
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date and time</Form.Label>
            <Form.Control
              type='datetime-local'
              value={this.state.reservation.dateTime}
              onChange={(e) =>
                // this.setState({
                //   reservation: {
                //     ...this.state.reservation,
                //     dateTime: e.target.value,
                //   },
                // })
                this.handleChange('dateTime', e.target.value)
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Any special request?</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              value={this.state.reservation.specialRequests}
              onChange={(e) =>
                // this.setState({
                //   reservation: {
                //     ...this.state.reservation,
                //     specialRequests: e.target.value,
                //   },
                // })
                this.handleChange('specialRequests', e.target.value)
              }
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            SEND RESERVATION
          </Button>
        </Form>
      </div>
    )
  }
}

export default ReservationForm
*/