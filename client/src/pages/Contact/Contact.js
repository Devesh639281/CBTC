import React from "react";
import "./Contact.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub, FaFacebookF, FaLinkedin } from "react-icons/fa6";
import { Rotate, Bounce } from "react-reveal";
const Contact = () => {
  return (
    <>
      <div className="contact" id="contractDetail">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6  col-xl-6 col-sm-12 px-4 py-4">
              <Bounce>
                <div className="card1">
                  <div className="row border-line">
                    <img
                      src="https://th.bing.com/th/id/OIP.HPFrFs7JP-3qET2qaHt4rwHaDy?w=910&h=466&rs=1&pid=ImgDetMain"
                      alt="contact"
                      className="image"
                    />
                  </div>
                </div>
              </Bounce>
            </div>
            <Rotate>
              <div className="col-lg-6 col-md-6">
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact With{" "}
                        <FaLinkedin size={36} color="blue" className="ms-2" />
                        <IoLogoWhatsapp
                          size={36}
                          color="green"
                          className="ms-2"
                        />
                        <FaGithub size={36} color="black" className="ms-2" />
                        <FaFacebookF size={36} color="blue" className="ms-2" />
                      </h6>
                    </div>
                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        className="mb-3"
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        className="mb-3"
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="Enter Your Message"
                        className="mb-3"
                      />
                    </div>
                    <div className="row px-3">
                      <button className="button" type="submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Rotate>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
