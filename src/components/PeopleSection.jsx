// use the array props to link to a proper array
// array needs to be created
import MayKnow from '../data/mayknow'
import AlsoViewed from '../data/alsoviewed'
import PeopleCard from "./PeopleCard"
const PeopleSection = ({ name }) => {

    const array = name === "People Also Viewed" ? AlsoViewed : MayKnow
    return (
        <> <div className="peopleSection">
            <h6 className="mb-3">{name}</h6>
            <PeopleCard array={array} />
        </div>
        </>
    )
}

export default PeopleSection