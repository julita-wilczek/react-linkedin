import MayKnow from '../data/mayknow'
import AlsoViewed from '../data/alsoviewed'
import {Button, Card, Image} from 'react-bootstrap'
import './PeopleCard.css'

const PeopleCard = ({array}) => {

    return(
        array.map(people=>(<Card className='d-flex flex-row mb-n3'>
        <Image className='userImage' src={people.img} />
        <Card.Body>
        <Card.Title className='peopleName'>{people.name}</Card.Title>
        <Card.Text className='peopleDescription text-muted'>
        {people.description}
        </Card.Text>
        <Button>Connect</Button>
        </Card.Body>
        </Card>))
      
        )
}

export default PeopleCard