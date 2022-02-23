import { Card, Image, Button } from "react-bootstrap"

const AddToFeed = () => {
    return(<div>
<Card className='addToFeed d-flex flex-row mb-n3'>
<Image className='userImage' src="https://media-exp1.licdn.com/dms/image/C4D0BAQGSvPnpfpc1qA/company-logo_100_100/0/1619541356425?e=1653523200&v=beta&t=-x99dn-ga67TXf4HiBChfxLbpPO2KuSC99FBJPXwKcI" />
            <Card.Body>
                <Card.Title className='peopleName'>Name Surname</Card.Title>
                <Card.Text className='peopleDescription text-muted'>
                Description
                </Card.Text>
                <Button>+ Follow</Button>
            </Card.Body>
        </Card>

    </div>)
}

export default AddToFeed