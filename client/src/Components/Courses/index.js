import { TiArrowSortedDown } from "react-icons/ti";
import ListOfCourses from "../ListOfCourses";
import {useState} from 'react';
import Button from '@mui/material/Button';
import './index.css';

const smapleData = [
    {
        id: '1',
        imageUrl: "https://res.cloudinary.com/djbs4yqbz/image/upload/v1708779441/fullstack_hbjksr.png",
        courseName: "Full Stack Developer Course",
        trainerName: "Mr. Ragella Manish"
    },
    {
        id: '2',
        imageUrl: "https://res.cloudinary.com/djbs4yqbz/image/upload/v1708779942/howfullstack_xmzijs.jpg",
        courseName: "Full Stack Developer",
        trainerName: "Mr. Ragella Manish"
    }
]

const WebDevelopment = [
    {
        id: '1',
        imageUrl: "https://res.cloudinary.com/djbs4yqbz/image/upload/v1708780433/webdevelopment_dcg3xk.jpg",
        courseName: "Web Development Course",
        trainerName: "Mr. Ragella Manish"
    }
]

const larvelCourse = [
    {
        id: '1',
        imageUrl: "https://res.cloudinary.com/djbs4yqbz/image/upload/v1708781000/larvel_kwzz7i.png",
        courseName: "Laravel Course",
        trainerName: "Mr. Ragella Manish"
    }
]

const phpcourse = [
    {
        id: '1',
        imageUrl: "https://res.cloudinary.com/djbs4yqbz/image/upload/v1708781427/php_zucyhj.jpg",
        courseName: "PHP Full Course",
        trainerName: "Mr. Ragella Manish"
    },
    {
        id: '2',
        imageUrl: "https://res.cloudinary.com/djbs4yqbz/image/upload/v1708781469/phpDev_wdrpwu.jpg",
        courseName: "PHP Development",
        trainerName: "Mr. Ragella Manish"
    }
]

const Courses = () => {
    const [dropdownClicked, setDropdownClicked] = useState(false);

    const onClickCategory = () => {
        setDropdownClicked(prevState => !prevState);
    }

    return (
        <div className="category-top-container">
            <div className="category-container">
                <span className="category-name">Category</span>
                <button type="button" className="dropdown-arrow-button" onClick={onClickCategory}>
                    <TiArrowSortedDown color="white"/>
                </button>
            </div>
            {dropdownClicked && (
                  
                        <ul className="category-dropdown-ul">
                            <li className="category-dropdown-li">
                                <a href="#full-stack" target="_self" className="li-link">Full Stack Developer Course</a>
                            </li>
                            <li className="category-dropdown-li">
                                <a href="#web-development" target="_self" className="li-link">Web Development</a>
                            </li>
                            <li className="category-dropdown-li">
                                <a href="#larvel" target="_self" className="li-link">Laravel</a>
                            </li>
                           
                            <li className="category-dropdown-li">
                                <a href="#php" target="_self" className="li-link">PHP</a>
                            </li>
                        </ul>
                    
            )}
            <div id="full-stack">
                <div className="courses-name-container">
                    <h2 className="courses-names">Full Stack Developer Course</h2>
                    <Button className="viewAll-btn">View All</Button>
                </div>
                <hr />
                <ul className="courses-list-ul">
                    {smapleData.map((each)=>(
                        <ListOfCourses listDetails={each} key={each.id} />
                    ))}
                </ul>
            </div>
            <div id="web-development">
                <div className="courses-name-container">
                    <h2 className="courses-names">Web Development</h2>
                    <Button className="viewAll-btn">View All</Button>
                </div>
                <hr />
                <ul className="courses-list-ul">
                    {WebDevelopment.map((each)=>(
                        <ListOfCourses listDetails={each} key={each.id} />
                    ))}
                </ul>
            </div>
            <div id="larvel">
                <div className="courses-name-container">
                    <h2 className="courses-names">Laravel</h2>
                    <Button className="viewAll-btn">View All</Button>
                </div>
                <hr />
                <ul className="courses-list-ul">
                    {larvelCourse.map((each)=>(
                        <ListOfCourses listDetails={each} key={each.id} />
                    ))}
                </ul>
            </div>
            <div id="php">
                <div className="courses-name-container">
                    <h2 className="courses-names">PHP</h2>
                    <Button className="viewAll-btn">View All</Button>
                </div>
                <hr />
                <ul className="courses-list-ul">
                    {phpcourse.map((each)=>(
                        <ListOfCourses listDetails={each} key={each.id} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Courses
