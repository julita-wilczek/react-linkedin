// we can fetch here conditionally
// here goes the controlled input form
// the content of this component will go into modal body


const EditForm = () => {
    return (<div></div>)
}
export default EditForm



// Details Page -> ProfileSection -> ExperienceCard knows that it is in Details Page and not in the Profile Page, 
// because we set a condition there. So to this button (that is in the ExperienceCard Page) you attach some function
// and this function show the modal 
// You can put the modal in the ExperienceCard. 