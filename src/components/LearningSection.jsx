import { Image } from "react-bootstrap"
import "./LearningSection.css"
const LearningSection = () => {
    return (<>
        <div id="learningSection">
            <i style={{ fontSize: "14px" }} className="bi bi-linkedin mr-1"></i><span style={{ fontSize: "13px", fontWeight: "500" }}>LEARNING</span>
            <div className="d-flex mt-2">
                
                <div className="position-relative">
                
              <i className="bi bi-play-fill play1 ">   <div className="sfondo"> </div> </i>
                <Image id="img1" src="https://media-exp1.licdn.com/dms/image/C4E0DAQHFqpRW8Hulzg/learning-public-crop_60_100/0/1619126537815?e=1645552800&v=beta&t=UsPfgo--9AP6cwAERk2Kv8xLlFQGGXl13P0n43A1KY0" alt="Linkedin-Learning" /></div>
                <div className="ml-2"><div style={{ fontSize: "14px", fontWeight: "500" }}>Establishing Evening Routines</div>
                    <small className="text-muted">15,888 viewers</small>
                </div>
            </div>
            <hr />
            <div className="d-flex mt-2">
                <Image id="img2" src="https://media-exp1.licdn.com/dms/image/C4E0DAQGP6-sU0T9Zkw/learning-public-crop_60_100/0/1635955145793?e=1645552800&v=beta&t=MUd2naIE2veWP8tXfWrjJk9qyL7VKsmeOPGxoxeMp8s" alt="Linkedin-Learning" />
                <div className="ml-2"><div style={{ fontSize: "14px", fontWeight: "500" }}>Agile Development Practices</div>
                    <small className="text-muted">127,814 viewers</small>
                </div>
            </div>
        </div>
    </>)
}

export default LearningSection