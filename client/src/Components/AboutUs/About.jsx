import './about.css';
import Video from '../../Assets/group.webm';
import Stepper from './Stepper';
import Team from './Team';
const AboutUs = () => (
   <>
      <div className="container-about">
   
   <div className="div-d">
     <video poster=" " loop autoPlay muted playsInline>
       <source src={Video} type="video/webm" />
     </video>
   </div>
 
</div>
<Stepper/>
<Team/>
<div className="faqs">
            <h1>FAQs</h1>
            <div className="faq-item">
                <h3 className='faq-headings'>Q1: What are cloudcode developers?</h3>
                <p className='faq-para'>
                Cloud Code Developers is an Ecosystem, which focuses on the PPPC Model for students: Professional Development, Personality Development, Personal Development, and Career Counseling. We are working with the aim of disrupting the market of the education technology industry by providing space for curiosity and doubt-solving for the students, along with providing essential skills that can be monetized with our Skil2Monetize motto.
                </p>
            </div>
            <div className="faq-item">
                <h3 className='faq-headings'>Q2: Are cloudcode developer courses certified?</h3>
                <ul>
                <li className='faq-para'>Government Recognition: Our all certificates have a stamp of Starup India, which is a government initiative, as we're registered with them.</li>
                <li className='faq-para'><b>Verified:</b> Receive a mentor-signed certificate with the Younis official logo to verify your certificates and add value to your career.</li>
                <li className='faq-para'><b>Licenses and Certification Approved:</b> Post your certificate on your LinkedIn profile under the category of licenses and certifications.</li>
                <li className='faq-para'>Increase your job prospects.</li>
                <li className='faq-para'><b>ifetime Validity:</b>L Get lifetime valid certificates to enhance your professional credibility forever.</li>
                </ul>
            </div>
            <div className="faq-item">
                <h3 className='faq-headings'>Q3: Is there any internship and placement assistance after taking the course?</h3>
                <p className='faq-para'>
                Yes, we not only provide internships to students internal but also connect students with relevant SLS to companies that we are affiliated with.
                </p>
            </div>
            <div className="faq-item">
                <h3 className='faq-headings'>Q4: Do we get any practical exposure?</h3>
                <p className='faq-para'>
                Yes, our curriculum is designed and curated, which matches the JDs of 75% MINCs with 70% practical exposure and 30% theory assistance. Moreover, our mentors teach with a practical learning approach and give insights about the domain to make an individual Job ready.
                </p>
            </div>
            <div className="faq-item">
                <h3 className='faq-headings'>Q5: Are all the courses going to be live, and where can I access them?</h3>
                <p className='faq-para'>
                We have both pre-recorded and live-session courses that can be accessed with the comfort of any of the devices of your choice: Laptop, Android, and iOS.
                </p>
            </div>
            </div>
</>
 
   
)

export default AboutUs
