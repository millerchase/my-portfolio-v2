import React, { useRef } from "react";
import "./contact-form.scss";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const refForm = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_3h0rxtz",
        "template_zcf14fh",
        refForm.current,
        "STcS6mElQQULN4Lj9"
      )
      .then(
        (result) => {
          alert("Your message has been sent!");
          window.location.reload(false);
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-form">
      <section className="content">
        <div className="form-header">
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            Contact Me
          </h2>
          <p className="text-center w-responsive text-center">
            Do you have any questions or are looking to collaborate? Please do
            not hesitate to contact me directly.
          </p>
        </div>
        <div className="row mt-2">
          <div className="">
            <form ref={refForm} onSubmit={sendEmail}>
              <div className="">
                <div className="row">
                  <div className="contact-input-container">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required
                    />
                    <label htmlFor="name" className="">
                      Your name
                    </label>
                  </div>
                </div>

                <div className="row">
                  <div className="contact-input-container">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      required
                    />
                    <label htmlFor="email" className="">
                      Your email
                    </label>
                  </div>
                </div>
              </div>
              <hr className="mt-4" />
              <div className="mt-2">
                <div className="row">
                  <div className="contact-input-container">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                    />
                    <label htmlFor="subject" className="">
                      Topic of discussion
                    </label>
                  </div>
                </div>

                <div className="row">
                  <div className="contact-input-container">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control md-textarea"
                      required
                    ></textarea>
                    <label htmlFor="message">Your message</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="text-center text-md-left">
                  <button type="submit" className="contact-btn mt-3">
                    Get in Touch
                  </button>
                </div>
              </div>
            </form>

            <div className="status"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;
