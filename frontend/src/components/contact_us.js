import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Helmet } from "react-helmet";

const TITLE = "Guardian Sell | Contact Us";
class ContactUs extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        <Navbar />
        <div className="container mt-5 mb-5">
          <h1>Contact Guardian Sell !</h1>
          <form className="contact-form">
            <div className="mb-3">
              <label htmlFor="nputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <input type="text" className="form-control" id="message" />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}
export default ContactUs;
