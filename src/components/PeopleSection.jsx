// use the array props to link to a proper array
// array needs to be created

import PeopleCard from "./PeopleCard"
const PeopleSection = ({name, array}) => {
    return (
    <div><h6>{name}</h6>
    <PeopleCard />
    </div>)
    
    }
    
    export default PeopleSection