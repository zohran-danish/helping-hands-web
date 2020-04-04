import React, { Component } from 'react';
import './index.scss';
// import LeadForm from '../LeadForm';
// import { checkIsHolidaysPage, isExplorePage } from '../../utils/isHolidaysPage';

export default class Banner extends Component {

	markup = htmlString => {
		return { __html: htmlString };
	};

	render() { 
		// const isHolidaysPage = checkIsHolidaysPage(this.props.destination);
		// const isExplore = isExplorePage(this.props.destination);
		return (
			<div>
				<div className="Banner__container">
					<div> 
								<h1 className="Banner__heading">
                  Helping Hands
								</h1>
							<React.Fragment>
								<h1 className="Banner__heading1Mobile">
                Helping Hands
								</h1>
								<div className="Banner__logoContainer Banner__onlyMobile">
									<svg className="Banner__oyoLogo" height="24px">
										<path
											fill="#fff"
											d="M41.6 1.2h-7.4L31 7.7l-3.2-6.5h-7.5l7 14.3v6.7h7.4v-6.7zM50.6 1c-5.7 0-10.4 4.8-10.4 10.7 0 5.9 4.7 10.7 10.4 10.7S61 17.6 61 11.7C61 5.8 56.3 1 50.6 1zm0 14.5c-2 0-3.7-1.7-3.7-3.8 0-2.1 1.7-3.8 3.7-3.8s3.7 1.7 3.7 3.8c0 2.1-1.7 3.8-3.7 3.8zM11.4 1C5.7 1 1 5.8 1 11.7c0 5.9 4.7 10.7 10.4 10.7s10.4-4.8 10.4-10.7C21.8 5.8 17.1 1 11.4 1zm0 14.5c-2 0-3.7-1.7-3.7-3.8 0-2.1 1.7-3.8 3.7-3.8s3.7 1.7 3.7 3.8c0 2.1-1.7 3.8-3.7 3.8z"
										/>
										<path
											fill="#fff"
											d="M70.9 1.2h10.2v3h-3.4v18h-3.3v-18H71v-3zM85 6.3c0-1.7.4-3 1.3-3.9.9-.9 2.1-1.4 3.7-1.4s2.9.5 3.7 1.4c.9.9 1.3 2.2 1.3 3.9v10.9c0 1.7-.4 3-1.3 3.9-.9.9-2.1 1.4-3.7 1.4s-2.9-.5-3.7-1.4c-.9-.9-1.3-2.2-1.3-3.9V6.3zm3.3 11.1c0 .8.2 1.3.5 1.6.3.3.7.5 1.2.5s.9-.2 1.2-.5c.3-.3.5-.8.5-1.6V6.1c0-.8-.2-1.3-.5-1.6-.2-.3-.6-.5-1.2-.5-.5 0-.9.2-1.2.5-.3.3-.5.8-.5 1.6v11.3zM99 1.2h10.2v3h-3.4v18h-3.3v-18H99v-3zM122.9 22.2h-3.3l-.6-3.8h-4l-.6 3.8h-3l3.4-21h4.8l3.3 21zm-7.5-6.6h3.2L117.3 5h-.4l-1.5 10.6zM127.1 1.2h3.3v18h4.1l1.3 3h-8.7v-21zM150.7 22.2h-3.3v-21h3.3v9h3.7v-9h3.4v21h-3.4v-9h-3.7v9zM162.6 6.3c0-1.7.4-3 1.3-3.9.9-.9 2.1-1.4 3.7-1.4s2.9.5 3.7 1.4c.9.9 1.3 2.2 1.3 3.9v10.9c0 1.7-.4 3-1.3 3.9-.9.9-2.1 1.4-3.7 1.4s-2.9-.5-3.7-1.4c-.9-.9-1.3-2.2-1.3-3.9V6.3zm3.3 11.1c0 .8.2 1.3.5 1.6.3.3.7.5 1.2.5s.9-.2 1.2-.5c.3-.3.5-.8.5-1.6V6.1c0-.8-.2-1.3-.5-1.6-.3-.3-.7-.5-1.2-.5s-.9.2-1.2.5c-.3.3-.5.8-.5 1.6v11.3zM190.4 1.2h3.3v21h-3.3v-21zM198.8 1.2h5.2c1.7 0 2.9.4 3.7 1.3.8.9 1.2 2.2 1.2 3.9V17c0 1.7-.4 3-1.2 3.9-.8.9-2 1.3-3.7 1.3h-5.2v-21zm3.3 3v15h1.9c.5 0 .9-.1 1.2-.4.3-.3.5-.8.5-1.6V6.3c0-.8-.2-1.3-.5-1.6-.3-.3-.7-.4-1.2-.4h-1.9zM230.4 15.3l-4.2-14h3.4l2.5 9.6 2.5-9.6h3.1l-4.2 14v7h-3.3v-7zM224.4 22.2H221l-.6-3.8h-4l-.6 3.8h-3l3.4-21h4.8l3.4 21zm-7.6-6.6h3.2L218.8 5h-.4l-1.6 10.6zM177.5 1.2h3.3v18h4.1l1.3 3h-8.7v-21zM241.5 6.4c0-1.7.4-2.9 1.2-3.8.8-.9 2-1.3 3.6-1.3s2.8.4 3.6 1.3c.8.9 1.2 2.2 1.2 3.8l-3 .8v-1c0-.7-.1-1.3-.4-1.6-.3-.3-.7-.5-1.2-.5s-.9.2-1.2.5c-.3.3-.4.8-.4 1.6 0 .7.2 1.3.5 1.9.3.5.7 1 1.2 1.5s1 1 1.5 1.4c.5.5 1 1 1.5 1.6.5.6.9 1.2 1.2 1.9.3.7.5 1.6.5 2.6 0 1.7-.4 2.9-1.2 3.8-.8.9-2 1.3-3.6 1.3s-2.8-.4-3.6-1.3c-.8-.9-1.2-2.2-1.2-3.8l3-1.4v1.6c0 .7.2 1.3.5 1.6.3.3.7.4 1.2.4s.9-.1 1.2-.4c.3-.3.5-.8.5-1.6 0-.7-.2-1.3-.5-1.9-.3-.5-.7-1-1.2-1.5s-1-1-1.5-1.4c-.5-.5-1-1-1.5-1.6-.5-.6-.9-1.2-1.2-1.9-.6-.8-.7-1.6-.7-2.6z"
										/>
									</svg>
								</div>
							</React.Fragment>
					</div>
					{/* <div className="Banner__leadForm">
						<LeadForm
							form={leadForm}
							inputRef={this.props.leadFormRef}
							location={this.props.location}
							destination={this.props.destination}
							bannerCmsData={banner}
						/>
					</div> */}
				</div>
				<div className="Banner__highlights">
					<div className="Banner__elementsContainerHighlights">
						<ul className="Banner__list">
							<li className="Banner__iconItem">
								<img
									className="Banner__icon Banner__onlyDesktop"
                  // src={ammenitiesDesktop && ammenitiesDesktop[0].iconImage}
                  alt="helping"
								/>
								<div
									className="Banner__icon Banner__onlyMobile"
								/>
								<span className="Banner__iconText">
									text1
								</span>
							</li>
							<li className="Banner__iconItem">
								<img
									className="Banner__icon2 Banner__onlyDesktop"
                  // src={ammenitiesDesktop && ammenitiesDesktop[1].iconImage}
                  alt="helping"
								/>
								<div
									className="Banner__icon2 Banner__onlyMobile"
								/>
								<span className="Banner__iconText">
									text2
								</span>
							</li>
							<li className="Banner__iconItem Banner__order4">
								<img
									className="Banner__icon3 Banner__onlyDesktop"
                  // src={ammenitiesDeskt;op && ammenitiesDesktop[2].iconImage}
                  alt="helping"
								/>
								<div
									className="Banner__icon3 Banner__onlyMobile"
								/>
								<span className="Banner__iconText">
                  text3
								</span>
							</li>
							<li className="Banner__iconItem Banner__onlyDesktop">
								<img
									className="Banner__icon4 Banner__onlyDesktop"
                  // src={ammenitiesDesktop && ammenitiesDesktop[3].iconImage}
                  alt="helping"
								/>
								<div
									className="Banner__icon4 Banner__onlyMobile"
								/>
								<span className="Banner__iconText">
									{/* {ammenitiesDesktop && ammenitiesDesktop[3].iconText} */}
								</span>
							</li>
							<li className="Banner__iconItem">
								<img
									className="Banner__icon Banner__onlyDesktop"
                  // src={ammenitiesDesktop && ammenitiesDesktop[4].iconImage}
                  alt="helping"
								/>
								<div
									className="Banner__icon Banner__onlyMobile"
								/>
								<span className="Banner__iconText">
									{/* {ammenitiesDesktop && ammenitiesDesktop[4].iconText} */}
								</span>
							</li>
						</ul>
					</div>
				</div>
				<div className="Banner__lastDiv Banner__onlyMobile">
					<h2 className="Banner__lastHeading">
            Test
					</h2>
					<button
						className="Banner__btnLastDiv"
						onClick={() => this.props.openMobileForm()}
					>
					submit
					</button>
				</div>
				<img
					className="Banner__backgroundImage"
					// src={banner && banner.bannerImage}
					width="1440px"
          height="800px"
          alt="helping"
				/>
			</div>
		);
	}
}
