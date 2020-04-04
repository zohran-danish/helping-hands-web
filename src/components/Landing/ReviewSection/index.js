import React, { Component } from 'react';
import './index.scss';

export default class ReviewSection extends Component {
	render() {
   const { review } = this.props;
		return (
			<div className="review review__container">
            <div className="review__desktopImage"><img alt="Help 1" width="100%" height="576px"/></div>
            <div className="review__contentWrap">
              <h2 className="review__heading">Something</h2>
              <div className="review__mobileImage"><img alt="Help 2" width="100%" height="180px" /></div>
              <div className="review__content"></div>
                <p></p>
              <div className="review__profileWrap">
                <div className="review__profileImage"><img alt="Help 3" width="100%" /></div>
                <div className="review__userInfo">
                  <div className="review__userName">{review && review.userName} <span className="review__userLocation">{review && review.userCity}</span></div>
                  <div className="review__dateText">{review && review.userPlace}</div>
                </div>
              </div>
              <div>
                <button onClick={this.props.toLeadForm} className="review__actionButton review__onlyDesktop">{review && review.buttonTextDesktop}</button>
                <button onClick={this.props.toLeadForm} className="review__actionButton review__onlyMobile">{review && review.buttonTextMobile}</button>
              </div>
            </div>

			</div>
		);
	}
}
