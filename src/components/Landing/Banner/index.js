import React, { Component } from 'react'
import './index.scss'
import LeadForm from '../LeadForm'

export default class Banner extends Component {
  render() {
    const { banner, leadForm, ammenitiesDesktop, footerForm } = this.props.data
    const { amenities } = footerForm || []
    return (
      <div>
        <div className="Banner__container">
          <div>
            <h1 className="Banner__heading">
              Helping Hands
            </h1>
            <h1 className="Banner__heading1Mobile">
              Helping Hands
            </h1>
            <div className="Banner__logoContainer Banner__onlyMobile">
              <img
                className="Banner__oyoLogoMobile"
                src={banner && banner.oyologoMobile}
                alt="Helping Hands"
              />
              <img
                className="Banner__totalHoliday"
                src={banner && banner.mobileLogo2}
                alt="Helping Hands"
              />
            </div>
          </div>
          {/* <div className="Banner__leadForm">
            <LeadForm form={leadForm} />
          </div> */}
        </div>
        <div className="Banner__highlights">
          <div></div>
          <div>
            <ul className="Banner__list">
              <li className="Banner__iconItem">
                <img
                  className="Banner__icon Banner__onlyDesktop"
                  src={ammenitiesDesktop && ammenitiesDesktop[0].iconImage}
                  alt="Helping Hands"
                />
                <img
                  className="Banner__icon Banner__onlyMobile"
                  src={amenities && amenities[0].iconImage}
                  alt="Helping Hands"
                />
                <span className="Banner__iconText">
                  {ammenitiesDesktop && ammenitiesDesktop[0].iconText}
                </span>
              </li>
              <li className="Banner__iconItem">
                <img
                  className="Banner__icon2 Banner__onlyDesktop"
                  src={ammenitiesDesktop && ammenitiesDesktop[1].iconImage}
                  alt="Helping Hands"
                />
                <img
                  className="Banner__icon2 Banner__onlyMobile"
                  src={amenities && amenities[1].iconImage}
                  alt="Helping Hands"
                />
                <span className="Banner__iconText">
                  {ammenitiesDesktop && ammenitiesDesktop[1].iconText}
                </span>
              </li>
              <li className="Banner__iconItem Banner__order4">
                <img
                  className="Banner__icon3 Banner__onlyDesktop"
                  src={ammenitiesDesktop && ammenitiesDesktop[2].iconImage}
                  alt="Helping Hands"
                />
                <img
                  className="Banner__icon3 Banner__onlyMobile"
                  src={amenities && amenities[2].iconImage}
                  alt="Helping Hands"
                />
                <span className="Banner__iconText">
                  {ammenitiesDesktop && ammenitiesDesktop[2].iconText}
                </span>
              </li>
              <li className="Banner__iconItem Banner__onlyDesktop">
                <img
                  className="Banner__icon4 Banner__onlyDesktop"
                  src={ammenitiesDesktop && ammenitiesDesktop[3].iconImage}
                  alt="Helping Hands"
                />
                <img
                  className="Banner__icon4 Banner__onlyMobile"
                  src={amenities && amenities[3].iconImage}
                  alt="Helping Hands"
                />
                <span className="Banner__iconText">
                  {ammenitiesDesktop && ammenitiesDesktop[3].iconText}
                </span>
              </li>
              <li className="Banner__iconItem">
                <img
                  className="Banner__icon Banner__onlyDesktop"
                  src={ammenitiesDesktop && ammenitiesDesktop[4].iconImage}
                  alt="Helping Hands"
                />
                <img
                  className="Banner__icon Banner__onlyMobile"
                  src={amenities && amenities[4].iconImage}
                  alt="Helping Hands"
                />
                <span className="Banner__iconText">
                  {ammenitiesDesktop && ammenitiesDesktop[4].iconText}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="Banner__lastDiv Banner__onlyMobile">
          <h2 className="Banner__lastHeading">
            {banner && banner.boxTextMobile}
          </h2>
          <button className="Banner__btnLastDiv">
            {banner && banner.boxButtonMobile}
          </button>
        </div>
        <img
          className="Banner__backgroundImage"
          src={banner && banner.bannerImage}
          width="1440px"
          height="800px"
          alt="Helping Hands"
        />
      </div>
    )
  }
}
