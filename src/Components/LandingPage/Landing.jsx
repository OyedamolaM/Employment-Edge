import React from 'react'
import './landing.css'
import PICTURE from '../../assets/Icons/happyJobbero.png'

const Landing = () => {
  return (
    <>
      <div className='header'>

        <h1 className='text h1-tag'>Job Search Simplified</h1>
        <h5 className='text h5-tag'>One Platform, Countless Opportunities, Guaranteed</h5>

        <form>
        <input className='search-bar' type="text" />
        </form>

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

     
        <img className='jobbero-picture' src={PICTURE} alt="" />

      </div>
    </>
  )
}

export default Landing