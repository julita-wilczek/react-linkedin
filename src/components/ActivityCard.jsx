import { Button } from "react-bootstrap";


const ActivityCard = () => {
  return (
<>      <div className="d-flex align-items-center justify-content-between">
        <div>
          <a href="/">0 followers</a>{" "}
        </div>
        <button type="button" class="btn btn-outline-primary">Start a post</button>
      </div>
      <div className="font-weight-normal mb-1">You haven't posted lately</div>
      <div className="font-weight-lighter mb-4">Recent posts you share or comment on will be displayed here</div>
      <button type="button" class="btn btn-outline-secondary  btn-lg btn-block">see all activity</button>
</>

    
  );
};

export default ActivityCard;
