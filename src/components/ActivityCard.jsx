import { Button } from 'react-bootstrap'

const ActivityCard = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <div
          style={{ fontSize: '14px', color: 'rgba(0, 0, 0, 0.6)' }}
          className="mt-n3 mb-2"
        >
          25 followers
        </div>
        <Button className="mt-n5">
          <i style={{ fontSize: '16px' }} className="bi bi-plus-lg"></i> Follow
        </Button>
      </div>
      <div className="font-weight-normal">You haven't posted lately</div>
      <small>Recent posts you share or comment on will be displayed here</small>
      <hr className="ml-n3" width="105%" />
      <div className="my-n2">
        <Button id="activityButton">See all activity</Button>
      </div>
    </>
  )
}

export default ActivityCard
