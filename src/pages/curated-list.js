import React from "react";
import get from "lodash/get";
import Helmet from "react-helmet";
import Modal from "react-responsive-modal";
import { graphql } from "gatsby";
import Template from "../components/layout";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class RootIndex extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    companyEmail: "",
    companyName: "",
    message: "",
    open: false
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() =>
        this.setState({
          firstname: "",
          lastname: "",
          companyEmail: "",
          companyName: "",
          message: "",
          open: true
        })
      )
      .catch(error => alert(error));
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const {
      firstname,
      lastname,
      companyEmail,
      companyName,
      message,
      open
    } = this.state;

    const siteTitle = "Kleros - Curated List";
    const data = get(this, "props.data.allContentfulCuratedListPage.edges")[0]
      .node;
    const contentMain = data.contentMain;
    const descriptionTitle = data.descriptionTitle;
    const description = data.description;
    const whyTitle = data.whyTitle;
    const why = data.why;
    const trustlessTitle = data.trustlessTitle;
    const trustlessSubtitle = data.trustlessSubTitle;
    const howWorkTitle = data.howWorkTitle;
    const howWork = data.howWork;
    const disputeTitle = data.disputeTitle;
    const dispute = data.dispute;
    const whyMattersTitle = data.whyMattersTitle;
    const whyMatters = data.whyMatters;
    const contactUsTitle = data.contactUsTitle;
    const contactUs = data.contactUs;
    const trustlessPath1 = data.trustlessPath1;
    const trustlessPath2 = data.trustlessPath2;
    const trustlessPath3 = data.trustlessPath3;
    const trustlessPath4 = data.trustlessPath4;
    const trustlessPath5 = data.trustlessPath5;

    return (
      <Template location={this.props.location}>
        <Helmet>
          <html lang="en" />
          <title>{siteTitle}</title>
        </Helmet>
        <Modal
          open={open}
          onClose={this.onCloseModal}
          center
          classNames={{
            modal: "customModal"
          }}
        >
          <h2>Message sent!</h2>
          <p>We will answer you as soon as possible.</p>
          <p>
            While waiting for an answer you can join our{" "}
            <a
              href="https://t.me/kleros"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
            .
          </p>
        </Modal>
        <section className="ca_home_top ca_escrow_top">
          <div className="container">
            <div className="row ca_txt">
              <div className="col-12 col-md-6">
                <h1>
                  <FormattedMessage id="curated-list.title" />
                </h1>
                <div
                  style={{ color: "#fff", fontSize: "2em", paddingTop: "2em" }}
                >
                  <FormattedMessage id="curated-list.subtitle" />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <img
                  src="/img/curated-list/TCR1.png"
                  className="illustration_escrow"
                  alt="Curated List"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="ca_escrow_description ca_wave_top_inverted">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-1"></div>
              <div className="col-12 col-md-4">
                <h2>
                  <FormattedMessage id="curated-list.section-why-curated-lists.title" />
                </h2>
                <div style={{ color: "#fff" }}>
                  <div>
                    <p>
                      <FormattedMessage id="curated-list.section-why-curated-lists.paragraph" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-1"></div>
              <div className="col-12 col-md-5">
                <img
                  src={contentMain[0].mediaData[1].file.url}
                  alt="Kleros Curated List"
                />
              </div>
              <div className="col-12 col-md-1"></div>
            </div>
          </div>
        </section>
        <section className="ca_escrow_why">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-1"></div>
              <div className="col-12 col-md-5">
                <img
                  src={contentMain[0].mediaData[2].file.url}
                  alt="Why Kleros Curated List"
                />
              </div>
              <div className="col-12 col-md-5">
                <h2>
                  <FormattedMessage id="curated-list.section-why-ours.title" />
                </h2>
                <div color={{ color: "#fff" }}>
                  <p>
                    <FormattedMessage id="curated-list.section-why-ours.paragraph" />
                  </p>
                </div>
                <a
                  href="https://tokens.kleros.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ca_button ca_transparent_blue"
                >
                  <FormattedMessage id="curated-list.section-why-ours.button-primary" />
                </a>
              </div>
              <div className="col-12 col-md-1"></div>
            </div>
          </div>
        </section>
        <section className="ca_escrow_content ca_wave_bottom">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-2"></div>
              <div className="col-12 col-md-8">
                <h2>
                  <FormattedMessage id="curated-list.section-trustless.title" />
                </h2>

                <img src={contentMain[0].mediaData[3].file.url} alt="Kleros" />
              </div>
              <div className="col-12 col-md-2"></div>
            </div>
            <div className="row ca_left">
              <div className="col-12 col-md-1 one"></div>
              <div className="col-12 col-md-5 two">
                <h6>
                  {" "}
                  <FormattedMessage id="curated-list.section-trustless.subtitle-1" />
                </h6>
                <div color={{ color: "#fff" }}>
                  <p>
                    <FormattedMessage id="curated-list.section-trustless.paragraph-1" />
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-5 three">
                <img src={contentMain[0].mediaData[4].file.url} alt="Kleros" />
              </div>
              <div className="col-12 col-md-1 four"></div>
            </div>
            <div className="row ca_right">
              <div className="col-12 col-md-1 one"></div>
              <div className="col-12 col-md-5 two">
                <h6>
                  <FormattedMessage id="curated-list.section-trustless.subtitle-2" />
                </h6>
                <div color={{ color: "#fff" }}>
                  <p>
                    {" "}
                    <FormattedMessage id="curated-list.section-trustless.paragraph-2" />
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-5 three">
                <img src={contentMain[0].mediaData[5].file.url} alt="Kleros" />
              </div>
              <div className="col-12 col-md-1 four"></div>
            </div>
            <div className="row ca_left">
              <div className="col-12 col-md-1 one"></div>
              <div className="col-12 col-md-5 two">
                <h6>
                  <FormattedMessage id="curated-list.section-trustless.subtitle-3" />
                </h6>
                <div color={{ color: "#fff" }}>
                  <p>
                    <FormattedMessage id="curated-list.section-trustless.paragraph-3" />
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-5 three">
                <img src={contentMain[0].mediaData[6].file.url} alt="Kleros" />
              </div>
              <div className="col-12 col-md-1 four"></div>
            </div>
            <div className="row ca_escrow_path">
              <div className="col-12 col-md-1"></div>
              <div className="col-12 col-md-3">
                <div>
                  <div className="ca_img ca_underlined ca_stroke ca_stroke_1">
                    <img
                      src={contentMain[0].mediaData[7].file.url}
                      alt="Illustration"
                    />
                  </div>
                  <div className="ca_txt">
                    <p>
                      <FormattedMessage id="curated-list.section-trustless.illustration-1" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div>
                  <div className="ca_img ca_underlined ca_stroke ca_stroke_2">
                    <img
                      src={contentMain[0].mediaData[8].file.url}
                      alt="Illustration"
                    />
                  </div>
                  <div className="ca_txt">
                    <p>
                      {" "}
                      <FormattedMessage id="curated-list.section-trustless.illustration-2" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div>
                  <div className="ca_img ca_underlined ca_stroke ca_stroke_3">
                    <img
                      src={contentMain[0].mediaData[9].file.url}
                      alt="Illustration"
                    />
                  </div>
                  <div className="ca_txt">
                    <p>
                      {" "}
                      <FormattedMessage id="curated-list.section-trustless.illustration-3" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-1"></div>
              <div className="col-12 col-md-2"></div>
              <div className="col-12 col-md-4">
                <div>
                  <div className="ca_img ca_underlined ca_stroke ca_stroke_4">
                    <img
                      src={contentMain[0].mediaData[10].file.url}
                      alt="Illustration"
                    />
                  </div>
                  <div className="ca_txt">
                    <p>
                      <FormattedMessage id="curated-list.section-trustless.illustration-4" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div>
                  <div className="ca_img ca_underlined ca_stroke ca_stroke_5">
                    <img
                      src={contentMain[0].mediaData[11].file.url}
                      alt="Illustration"
                    />
                  </div>
                  <div className="ca_txt">
                    <p>
                      {" "}
                      <FormattedMessage id="curated-list.section-trustless.illustration-5" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-2"></div>
            </div>
          </div>
        </section>
        <section className="ca_escrow_contact">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-1"></div>
              <div className="col-12 col-md-8">
                <h2>
                  {" "}
                  <FormattedMessage id="curated-list.section-contact-us.title" />
                </h2>
                <h6>
                  <FormattedMessage id="curated-list.section-contact-us.subtitle" />
                </h6>
                <div className="ca_form">
                  <form
                    name="curatedList"
                    method="post"
                    data-netlify="true"
                    onSubmit={this.handleSubmit}
                  >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="curatedList" />
                    <div className="ca_line">
                      <div className="ca_half">
                        <label htmlFor="ca_name">
                          {" "}
                          <FormattedMessage id="curated-list.section-contact-us.first-name" />
                        </label>
                        <input
                          type="text"
                          id="ca_name"
                          name="firstname"
                          value={firstname}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="ca_half">
                        <label htmlFor="ca_lname">
                          <FormattedMessage id="curated-list.section-contact-us.last-name" />
                        </label>
                        <input
                          type="text"
                          id="ca_lname"
                          name="lastname"
                          value={lastname}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="ca_line">
                      <div className="ca_half">
                        <label htmlFor="ca_email">
                          <FormattedMessage id="curated-list.section-contact-us.company-email" />
                        </label>
                        <input
                          type="email"
                          id="ca_email"
                          name="companyEmail"
                          value={companyEmail}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="ca_half">
                        <label htmlFor="ca_company">
                          {" "}
                          <FormattedMessage id="curated-list.section-contact-us.company-name" />
                        </label>
                        <input
                          type="text"
                          id="ca_company"
                          name="companyName"
                          value={companyName}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="ca_line">
                      <div className="ca_full">
                        <label htmlFor="ca_text">
                          {" "}
                          <FormattedMessage id="curated-list.section-contact-us.message" />
                        </label>
                        <textarea
                          id="ca_text"
                          name="message"
                          value={message}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="ca_line">
                      <input
                        type="submit"
                        value={this.props.intl.formatMessage({
                          id: "curated-list.section-contact-us.button-primary"
                        })}
                        className="ca_button ca_solid_blue"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-12 col-md-3"></div>
            </div>
          </div>
        </section>
      </Template>
    );
  }
}

export default injectIntl(RootIndex);

export const pageQuery = graphql`
  query curatedListQuery {
    allContentfulCuratedListPage(sort: { fields: [id], order: DESC }) {
      edges {
        node {
          contentMain {
            title
            data {
              data
              childMarkdownRemark {
                html
              }
            }
            mediaData {
              file {
                url
              }
            }
            referenceData {
              __typename
              ... on Node {
                ... on ContentfulLink {
                  text {
                    text
                  }
                  url
                  extraClass
                  target
                }
                ... on ContentfulHomepageHowSteps {
                  title {
                    title
                  }
                  text {
                    text
                  }
                  image {
                    file {
                      url
                    }
                  }
                }
              }
            }
          }
          descriptionTitle
          description {
            childMarkdownRemark {
              html
            }
          }
          whyTitle
          why {
            childMarkdownRemark {
              html
            }
          }
          trustlessTitle
          trustlessSubtitle
          howWorkTitle
          howWork {
            childMarkdownRemark {
              html
            }
          }
          disputeTitle
          dispute {
            childMarkdownRemark {
              html
            }
          }
          whyMattersTitle
          whyMatters {
            childMarkdownRemark {
              html
            }
          }
          contactUsTitle
          contactUs {
            childMarkdownRemark {
              html
            }
          }
          trustlessPath1
          trustlessPath2
          trustlessPath3
          trustlessPath4
          trustlessPath5
        }
      }
    }
  }
`;
