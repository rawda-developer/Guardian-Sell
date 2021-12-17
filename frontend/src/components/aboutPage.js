import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import bookIllustration from "../images/book_illustration.jpg";
import { Helmet } from "react-helmet";

const TITLE = "Guardian Sell | About Us";
class AboutPage extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        <Navbar active={"about"} />
        <div className="container mt-5">
          <div className="row">
            <h1 className="main-header mb-5 d-flex justify-content-center">
              About Guardian Sell
            </h1>
            <div className="col-md-6">
              <img src={bookIllustration} alt="book illustration" />
            </div>
            <div className="col-md-6">
              <p className="about">
                Guardian Sell is an online book store for selling ebooks at
                affordable prices. You're free to sell your own ebooks on our
                store.
              </p>
              <p className="about">
                For you to be able to buy or sell ebooks, please make sure to
                login to the website. If you haven't already made an account,
                please make sure to sign up and activate your account
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
export default AboutPage;
