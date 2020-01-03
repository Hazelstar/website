import React from "react";
import get from "lodash/get";
import Helmet from "react-helmet";
import theMeta from "../js/helpers.js";
import Slider from "react-slick";
import { graphql } from "gatsby";
import Template from "../components/layout";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";
import teamMembers from "../../content/team-members.json";

class RootIndex extends React.Component {
  render() {
    const siteTitle = "Kleros";

    return (
      <Template location={this.props.location}>
        <Helmet>
          <html lang="en" />
          <title>{siteTitle}</title>
        </Helmet>
        <div className="ca_paralax_background_illustration">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <section className="ca_juror_top ca_about_top">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-7">
                <h1>
                  <FormattedMessage id="about.title" />
                </h1>
                <h6>
                  <FormattedMessage id="about.subtitle" />
                </h6>
              </div>
              <div className="col-12 col-md-5"></div>
            </div>
          </div>
        </section>
        <section className="ca_about_description ca_wave_bottom_mid">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-7">
                <h2>
                  <FormattedMessage id="about.section-who-are-we.title" />
                </h2>
                <p>
                  <FormattedMessage id="about.section-who-are-we.paragraph" />
                </p>
              </div>
              <div className="col-12 col-md-5">
                <div className="illustration">
                  <img
                    className="illustration-about-who"
                    src="/img/about/desc.png"
                    alt="Kleros - Decentralized team"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ca_about_team">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-8">
                <Slider
                  className="ca_team_slider"
                  dots={false}
                  arrows={false}
                  infinite={true}
                  autoplay={true}
                  slidesToShow={3}
                  slidesToScroll={1}
                  centerMode={true}
                  centerPadding="0px"
                  focusOnSelect={true}
                  responsive={[
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 1
                      }
                    }
                  ]}
                >
                  {Object.values(teamMembers).map((el, num) => {
                    return (
                      <div key={num} className="ca_slide">
                        <div className="ca_holder">
                          <div className="ca_img">
                            <div
                              className="ca_photo"
                              style={{
                                backgroundImage: "url('" + el.photo + "')"
                              }}
                            ></div>
                          </div>
                          <div className="ca_txt">
                            <h6>{el.name}</h6>
                            <p>{el.title}</p>
                            <div className="ca_social">
                              {el.links &&
                                el.links.map((link, num) => {
                                  return (
                                    <a
                                      key={num}
                                      href={link.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className={link.fa}
                                    ></a>
                                  );
                                })}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
              <div className="col-12 col-md-4">
                <h3>
                  <FormattedMessage id="about.section-meet-our-team.title" />
                </h3>
                <p>
                  <FormattedMessage id="about.section-meet-our-team.paragraph" />
                </p>
                <div className="ca_team_slider_arrows"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="ca_about_vacancies">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-2"></div>
              <div className="col-12 col-md-8">
                <h2 className="ca_underlined">
                  <FormattedMessage id="about.section-join-our-team.title" />
                </h2>
                <h6 style={{ textAlign: "-webkit-center" }}>
                  <FormattedMessage id="about.section-join-our-team.subtitle" />
                </h6>
              </div>
              <div className="col-12 col-md-2"></div>
            </div>
            <div className="row">
              <div className="col-12">
                <ul>
                  <li key={0}>
                    <span>Full Stack Dev</span>
                    <span>Remote</span>
                    <a href="https://forum.kleros.io/t/full-stack-developer-blockchain-legaltech-fintech/176"></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Template>
    );
  }
}

export default injectIntl(RootIndex);
