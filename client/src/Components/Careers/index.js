import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './index.css';
const Careers = () => {
    const [fullName, setFullName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [whatsappNumber, setWhatsappNumber] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [aboutYourself, setAboutYourself] = useState('');
    const [gender, setGender] = useState('');
    const [city, setCity] = useState('');
    const [year, setYear] = useState('');
    const [schoolOrCollege, setSchoolOrCollege] = useState('');
    const [course, setCourse] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(gender);
    };
    return (
        <div className='careers-top-page'>
        <div className='internship-form-container'>
            <h2>❄️ INTERNSHIP ALERT@</h2>
            <h2 className="company-name">cloudcodedevelopers.in: Application Form 🚨 (14 DAYS 🆓)</h2>
            <p>EARNING & LEARNING OPPORTUNITY AT CLOUD CODE DEVELOPERS 💥</p>
            <p>Internship training is a must before getting into MBA & Corporate Job 💼</p>
            <p>➡️ Join the <em><b>14 days Internship Program of Cloud Code Developers, one of the First & Largest Community led Edtech Company of India!</b></em></p>
            <h6>✅ PERKS & REQUISITES</h6>
            <ul>
                <li>Grab upto 7 Certificates</li>
                <li>Letter of Recommendation Signed by the CEO & Founder (performance based)</li>
                <li>Earn while you Learn:<br />
                 💰 Upto 5k-10k (performance based)</li>
                <br />
                <li>🏋🏻 Get live training under Professional-Personality-Personal-Career aspects</li>
                <li>Placement Guidance</li>
                <li>Personality Development</li>
            </ul>
            <h6>✅ PROFILE- Business Development Specialist Intern</h6>
            <p>Strategising growth, Building Sustainable Revenue System, B2C & B2B Communication.</p>
            <h6>✅ TYPE OF INTERNSHIP</h6>
            <p>Work from Home</p>
            <p>Duration: 2 weeks (14 days)</p>
            <p>Flexible working hours (2-3 hrs/day)</p>
            <h6>🔻 WHAT IS CLOUD CODE DEVELOPERS ❓</h6>
            <p>💠 We are a Community led Ed-Tech platform with a core mantra of Up-Skilling and then providing Internships & Placements</p>
            <p>💠 Build up your skills and personality through a holistic development approach. 1L+ hours of Live sessions delivered</p>
            <p>💠 A family of more than 50k+ paid members.</p>
            <p>💠 6400 PAN INDIA students <b>bagged internships</b> in companies like CRISIL, E&Y, Accentures, Zomato, Ola, etc.</p>
            <p>💠 2300+ PAN INDIA hardworking students <b>got placed</b> in companies like Deloitte, Policy Bazaar, Calvin Klein etc.</p>
            <p>💠 Provided NGO Internships to more than 1500 students PAN India.</p>
            <p><b>Kindly fill in all your correct details in this form to complete the application process of Internship.</b></p>
            
            <form onSubmit={handleSubmit}>
                <div className='input-feilds-container'>
                    <label className='careers-labels'>Full Name <span className='required-star'>*</span></label><br />
                    <input 
                    type="text" 
                    value={fullName} 
                    onChange={(e) => setFullName(e.target.value)} 
                    placeholder='Your answer'
                    className='careers-input-fields'
                    required />
                </div>
                <div className='input-feilds-container'>
                    <label className='careers-labels'>Contact Number <span className='required-star'>*</span></label><br />
                    <input 
                    type="text" 
                    value={contactNumber} 
                    onChange={(e) => setContactNumber(e.target.value)} 
                    className='careers-input-fields'
                    placeholder='Your answer'
                    required 
                    />
                </div>
                <div className='input-feilds-container'>
                    <label className='careers-labels'>Whatsapp Number <span className='required-star'>*</span></label><br />
                    <input 
                    type="text" 
                    value={whatsappNumber} 
                    onChange={(e) => setWhatsappNumber(e.target.value)} 
                    className='careers-input-fields'
                    placeholder='Your answer'
                    required
                     />
                </div>
                <div className='input-feilds-container'>
                    <label className='careers-labels'>Email ID <span className='required-star'>*</span></label><br />
                    <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className='careers-input-fields'
                    placeholder='Your answer'
                    required
                     />
                </div>
                <div className='input-feilds-container'>
                    <label className='careers-labels'>Age <span className='required-star'>*</span></label><br />
                    <input 
                    type="text" 
                    value={age} 
                    onChange={(e) => setAge(e.target.value)} 
                    className='careers-input-fields'
                    placeholder='Your answer'
                    required
                    />
                </div>
                <div className='input-feilds-container'>
                    <label className='careers-labels'>Hey, tell us something about yourself:</label><br />
                    <textarea 
                    value={aboutYourself} 
                    onChange={(e) => setAboutYourself(e.target.value)}
                    className='careers-input-fields'
                    placeholder='Your answer'
                    ></textarea>
                </div>
                <div className='input-feilds-container'>
                    <label className='careers-labels'>Gender <span className='required-star'>*</span></label><br />
                    <div className='careers-radio-container'>
                        <input type="radio" name="gender" value="Male" onChange={() => setGender('Male')} className='careers-radio-button' />
                        <p className='careers-radio-para'>Male</p>
                    </div>
                    <div className='careers-radio-container'>
                        <input type="radio" name="gender" value="Female" onChange={() => setGender('Female')}  className='careers-radio-button' />
                        <p className='careers-radio-para'>Female</p>
                    </div>
                    
                    <div className='careers-radio-container'>
                        <input type="radio" name="gender" value="Other" onChange={() => setGender('Other')} className='careers-radio-button' />
                        <p className='careers-radio-para'>Other</p>
                    </div> 
                </div>
                <div className='input-feilds-container'>
                <label className='careers-labels'>City <span className='required-star'>*</span></label><br />
                <input type="text" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                className='careers-input-fields'
                placeholder='Your answer'
                required 
                />
                </div>
                <div className='input-feilds-container'>
                    <label className='careers-labels'>Year/Grade<span className='required-star'>*</span></label><br />
                    <input 
                    type="text" 
                    value={year} 
                    onChange={(e) => setYear(e.target.value)}
                    className='careers-input-fields'
                    placeholder='Your answer'
                    required
                     />
                </div>
                <div className='input-feilds-container'>
                    <label className='careers-labels'>College or School Name <span className='required-star'>*</span></label><br />
                    <input 
                    type="text" 
                    value={schoolOrCollege} 
                    onChange={(e) => setSchoolOrCollege(e.target.value)}
                    className='careers-input-fields'
                    placeholder='Your answer'
                    required 
                    />
                </div>
                <div className='input-feilds-container'>
                    <label className='careers-labels'>Course <span className='required-star'>*</span></label><br />
                    <input 
                    type="text" 
                    value={course} 
                    onChange={(e) => setCourse(e.target.value)}
                    className='careers-input-fields'
                    placeholder='Your answer'
                    required 
                    />
                </div>
                <Button variant="contained" type="submit">Submit</Button>    
            </form>
        </div>
        </div>
    );
};
export default Careers;