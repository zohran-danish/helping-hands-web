import React from 'react';
import Banner from './Banner';
import ReviewSection from './ReviewSection/index';


const LandingPage = () => {
  const nums = [1,2,3,4,5]
  return (
    <div className="landing-container">
        <Banner />
        {
          nums.map(n => <ReviewSection />)
        }
    </div>
  )
}

export default LandingPage;
