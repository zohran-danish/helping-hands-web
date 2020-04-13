import React from 'react'
import './index.scss'
import backgroundImage from '../../../assets/images/helping-hands-background.jpg'

const Banner = () => {
  return (
    <div className="Banner__container">
      <img
        src={backgroundImage}
        className="Banner__backgroundImage"
        alt="Helping Hands background"
      />
      <div className="Banner__heading-container">
        <div className="Banner__heading">HELPING HANDS</div>
        <div className="Banner__heading-desc">
          <q>Create happiness by sharing what you were about to waste</q>
        </div>
      </div>
    </div>
  )
}

export default Banner
