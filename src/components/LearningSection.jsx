import { Image } from "react-bootstrap"
import "./LearningSection.css"
const LearningSection = () => {
    return (<>
        <div id="learningSection">
            <i style={{ fontSize: "14px" }} className="bi bi-linkedin mr-1"></i><span style={{ fontSize: "13px", fontWeight: "500" }}>LEARNING</span>
            <div className="my-2 subtitle">Add new skills with these courses, free <br /> for 24 hours </div>
            <div className="d-flex mt-2">
                
                <div className="position-relative">
                
              <i className="bi bi-play-fill play1 ">   <div className="sfondo"> </div> </i>
                <Image id="img1" src="https://joebuhlig.com/assets/posts/My-Evening-Routine.jpg" alt="routines" /></div>
                <div className="ml-2 d-flex flex-column justify-content-between"><div style={{ fontSize: "14px", fontWeight: "500" }}>Establishing Evening Routines</div>
                    <small className="text-muted">15,888 viewers</small>
                </div>
            </div>
            <hr />
            <div className="d-flex  mt-2">
            <div className="position-relative">
                
                <i className="bi bi-play-fill play2 ">   <div className="sfondo2"> </div> </i>
                <Image id="img2" src="https://www.laneways.agency/wp-content/uploads/2020/09/Use-The-Right-Software-Development-Process-Agile-Development-Laneways.Agency.jpg" alt="Linkedin-Learning" /></div>
                <div className="ml-2 d-flex flex-column justify-content-between "><div style={{ fontSize: "14px", fontWeight: "500" }}>Agile Development Practices</div>
                    <small className="text-muted">127,814 viewers</small>
                </div>
            </div>
            <div className="d-flex mt-3 justify-content-center"><button className="learnBtn ">Show more on Linkedin Learning</button></div>
      
        </div>
    </>)
}

export default LearningSection