import React from 'react'
import './index.scss'

const ReviewSection = ({ review }) => {
  return (
    <div className="review review__container">
      <div className="review__desktopImage">
        <img alt="Help 1" width="100%" height="576px" />
      </div>
      <div className="review__contentWrap">
        <h2 className="review__heading">Lorem ipsum dolor sit amet .</h2>
        <div className="review__mobileImage">
          <img alt="Help 2" width="100%" height="180px" />
        </div>
        <div className="review__content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aspernatur totam iure voluptate ducimus minus rem repellat quod temporibus nesciunt.</div>
        <p></p>
        <div className="review__profileWrap">
          <div className="review__profileImage">
            <img alt="Help 3" width="100%" />
          </div>
          <div className="review__userInfo">
            <div className="review__userName">
              Some information
              <span className="review__userLocation">
              Some information Some information
              </span>
            </div>
            <div className="review__dateText">Some text some text </div>
          </div>
        </div>
        <div>
          <button
            // onClick={this.props.toLeadForm}
            className="review__actionButton review__onlyDesktop"
          >
            Lorem ipsum dolor sit amet.
          </button>
          <button
            // onClick={this.props.toLeadForm}
            className="review__actionButton review__onlyMobile"
          >
            Lorem, ipsum.
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReviewSection;
