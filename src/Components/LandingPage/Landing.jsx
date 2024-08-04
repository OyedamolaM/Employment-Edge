import React from 'react'
import './landing.css'
import PICTURE from '../../assets/Icons/happyJobbero.png'
import APPSTORE from '../../assets/Icons/app.png'
import PLAYSTORE from '../../assets/Icons/play.png'

const Landing = () => {
  return (
    <>
      <div className='header'>

        <h1 className='text h1-tag'>Job Search Simplified</h1>
        <h5 className='text h5-tag'>One Platform, Countless Opportunities, Guaranteed</h5>

     
        <input className='search-bar' type="text" placeholder='Enter location...'  />
        <button className='explore'>Explore Now</button>
     

        <div className='handle3Divs'>
            <div className="hug first-div">
              <h6>200+ Visa Sponsorship Jobs</h6>
            </div>
            <div className="hug">
              <h6>500+ Remote Opportunities</h6>
            </div>
            <div className="hug">
              <h6>1000+ Full Time Jobs</h6>
            </div>
          </div>


        <h6 className='text h6-tag'>Centralized for your success! Apply confidently on our platform <br/>
          and experience a revolutionary approach to job hunting, ensuring <br/>
          your career advancement.</h6>

     
        <img className='jobbero-picture' src={PICTURE} alt="jobbero" />

        <div className='profile-card'></div>

      <div className='play-app'>
        <img className='app-picture' src={APPSTORE} alt="" />
        <img className='play-picture' src={PLAYSTORE} alt="" />
        </div>
      </div>
    </>
  )
}

export default Landing