import { Image, Button, Modal, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { parseISO, format } from "date-fns";
import { useParams, useLocation } from "react-router-dom";
import experience from "../data/experience.json";


const ExperienceCard = ({ edit, reload, setModal, setExperienceId, setVisibility}) => {
  const [editMode, setEditMode] = useState(false);
  const [experiences, setExperiences] = useState([]);
  const params = useParams();
  const location = useLocation();
  let url =
    location.pathname === "/in/me"
      ? "https://striveschool-api.herokuapp.com/api/profile/6214aa4e0448b40015116892/experiences"
      : "https://striveschool-api.herokuapp.com/api/profile/" +
        params.profileId +
        "/experiences";
  useEffect(() => {
    edit ? setEditMode(true) : setEditMode(false);
  }, [edit]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [reload]);


  const fetchData = async () => {
    try {
      let response = await fetch(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0YWE0ZTA0NDhiNDAwMTUxMTY4OTIiLCJpYXQiOjE2NDU1MjE0ODcsImV4cCI6MTY0NjczMTA4N30.4JUxJJE6E2G8CkzqkOSSRICgdSveBWxuq1Ae6PFpsbs",
        },
      });
      if (response.ok) {
        let data = await response.json();
        const sorted = data.sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
        setExperiences(sorted);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const showModal = (experienceId) => {
    setModal(true);
    setExperienceId(experienceId)
  };

  return experiences.map((exp) => {
    return (
      <>
        <div className="d-flex">
          <Image
            className="mr-2"
            style={{ height: "50px" }}
            alt={exp.place}
            src={exp.image}
          />
          <div>
              <div className="d-flex justify-content-between">
            <h6 className="mb-0 d-inline-block">{exp.role}</h6>  {editMode && (<Button className="editButton" onClick={() => {
              showModal(exp._id);
            }}><i className="bi bi-pencil"></i></Button>)}</div>
       
            <div style={{ fontSize: "14px" }}>{exp.company}</div>
            <div style={{ fontSize: "14px" }} className="text-muted">
              {format(parseISO(exp.startDate), "MMM yyyy")} -
              {typeof exp.endDate === "undefined" || exp.endDate === null
                ? "still"
                : format(parseISO(exp.endDate), "MMM yyyy")}
            </div>
            <div style={{ fontSize: "14px" }} className="text-muted">
              {exp.area}
            </div>
            <div style={{ fontSize: "14px" }} className="mt-2">
              {exp.description}
            </div>
            <div></div>
          </div>
        </div>
        <hr />
      </>
    );
  });
};

export default ExperienceCard;
