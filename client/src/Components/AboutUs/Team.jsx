import React from 'react'
import './team.css'
const Team = () => {
    const handleMouseOver = (event) => {
        event.target.setAttribute('data-style', event.target.style.cssText);
        if (event.target.getAttribute('data-hover-bordercolor')) {
          event.target.style.borderColor = event.target.getAttribute('data-hover-bordercolor');
        }
        if (event.target.getAttribute('data-hover-bgcolor')) {
          event.target.style.backgroundColor = event.target.getAttribute('data-hover-bgcolor');
        }
        if (event.target.getAttribute('data-hover-color')) {
          event.target.style.color = event.target.getAttribute('data-hover-color');
        }
      };
    
      const handleMouseOut = (event) => {
        event.target.setAttribute('style', event.target.getAttribute('data-style'));
        event.target.removeAttribute('data-style');
      };
  return (
    <div className='team1'>
        <h2 className='meet-team-heading'>Meet The Team</h2>
        <h5> Here are our awesome team.</h5>
        
<br/>
<div className="team2">
    <div className="team3">
    <img src= "https://res.cloudinary.com/djbs4yqbz/image/upload/v1708522323/CEO_evmptu.png" className='ceo-lg-img' alt="" /> 
    <div className='ceo-name'>
    <h3>CHILKA VEERA KISHORE</h3>
    <h5>Founder and CEO, CloudCode Developer</h5>   
    </div> 
    </div>
    <div className="team4">
      <div className='ceo-name-in-lg'>
      <h3>CHILKA VEERA KISHORE</h3>
      <h5>Founder and CEO, CloudCode Developer</h5>   
      </div>
      <ul>
          <li> Bootstrapped a start-up started on 15th day of College to a Million dollar valuation.</li>
          <li> Bagged the highest placement of Delhi University in 2019 (36 LPA) at age of 21 and left it after 4 months of working to continue with entrepreneurship by purpose.</li>
          <li> Started Younity.in with Nil investment and bootstrapped the company to 48,000 community members & 50 LiveLearn courses in less than 2 years.</li>
          <li> Author of the book: The Painkiller, With No Side Effects which became Amazon Top #3 Seller on First Day of the Launch.</li>
          <li> Dignified with REX-Karmaveer GYLC Award 2019 by UN at IIT- Delhi (for being the student entrepreneur for change)</li>
      </ul>
    </div>
</div>
<div className='emp-top-containers'>
<div className="team5">
<div className="center column third team-img-container">
    <img
      alt=""
      className="team-member-image"
      src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1708755215/Aishwarya_sec73w.png"
    />
    <h5 className="emp-name">Chilka Aishwarya Laxmi</h5>
    <p className="emp-name designation">CEO and Head of Finance Department</p>
  </div>
  <div className="center column third team-img-container">
    <img
      alt=""
      className="team-member-image"
      src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1708755288/Manish_ep3ecu.png"
    />
    <h5 className="emp-name">Ragella Manish
</h5>
    <p className="emp-name designation">Co-Founder and Head of the IT Department</p>
  </div>
  <div className="center column third team-img-container">
    <img
      alt=""
      className="team-member-image"
      src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1708755365/BALAJI_zl8jnt.png"
    />
    <h5 className="emp-name">Rajnandini Balaji Kaminwaar
</h5>
    <p className="emp-name designation">Head of the Training Department</p>
  </div>
<div className="center column third team-img-container">
    <img
      alt=""
      className="team-member-image"
      src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1708755633/MAHIDHAR_matmr5.png"
    />
    <h5 className="emp-name">Annamaraju Mahidhar</h5>
    <p className="emp-name designation">Position Head of Client Dealing Department</p>
  </div>
  <div className="center column third team-img-container">
    <img
      alt=""
      className="team-member-image"
      src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1708755683/ASIF_xs6ohe.png"
    />
    <h5 className="emp-name">Shaik Asif Basha 
</h5>
    <p className="emp-name designation">Head of the Marketing Department</p>
  </div>
  
</div>
</div>
<div className="btn">
<div className="column full" id="1663327156715">
      <a
        href="https://www.linkedin.com/company/cloudcode-developers/"
        target='_blank'
        rel="noreferrer"
        style={{
          display: 'inline-block',
          textDecoration: 'none',
          transition: 'all 0.16s ease 0s',
          border: '2px solid rgb(220, 220, 220)',
          cursor: 'pointer',
          backgroundColor: 'rgb(35, 70, 101)',
          color: 'rgb(247, 247, 247)',
          borderRadius: '0px',
          padding: '16px 35px',
          lineHeight: '1.5',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          fontSize: '16px',
          letterSpacing: '3px',
        }}
        data-hover-bgcolor="#8ea1ff"
        data-hover-color="#f8f8f8"
        data-hover-bordercolor="#8ea1ff"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        title=""
      >
        CONNECT WITH US
      </a>
    </div>
</div>


    </div>
  )
}

export default Team