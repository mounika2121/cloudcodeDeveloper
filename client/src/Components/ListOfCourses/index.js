import './index.css';

const ListOfCourses = (props) => {
    const {listDetails} = props;
    const {imageUrl, courseName,trainerName} = listDetails;
    return(
        <li className='courses-list-container'>
           <img src={imageUrl} alt='courses' className='course-image' /> 
            <p className='listof-coreses-name'>{courseName}</p>
            <p className='listof-trinernames'>{trainerName}</p>
        </li>
    )
}

export default ListOfCourses
