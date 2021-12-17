import React from "react";
import bookIllustration from "../images/book_illustration.jpg";
class AboutPage extends React.Component {
  render() {
    return (
      <>
        <div className="container mt-5">
          <div className="row">
            <h1 className="mb-5 d-flex justify-content-center">
              About Guardian Sell
            </h1>
            <div className="col-md-4">
              <img src={bookIllustration} alt="book illustration" />
            </div>
            <div className="col-md-8">
              <p>
                Guardian Sell is an online book store for selling ebooks at
                affordable prices. You're free to sell your own ebooks on our
                store.
              </p>
              <p>
                For you to be able to buy or sell ebooks, please make sure to
                login to the website. If you haven't already made an account,
                please make sure to sign up and activate your account
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default AboutPage;
