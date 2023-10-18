import React, { useState } from "react";
import "./Contact.css";
import arrow from "../../assets/try.png";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ywvdopl",
        "template_n3kjyma",
        form.current,
        "iCtrQkJU_kD5VOfjn"
      )
      .then(
        (result) => {
          setMessage("Message sent successfully!");
          const inputFields = document.getElementsByClassName("contact-input");
          Array.from(inputFields).forEach((field) => {
            field.value = "";
          });
          console.log(result.text);
        },
        (error) => {
          setMessage("Error sending message. Please try again later.");
          console.log(error.text);
        }
      );
  };
  return (
    <section className="sec4 sec" id="contact">
      <h1 className="heading">
        Contact
        <hr />
      </h1>
      <div className="hidden">
        <div className="sec4-container">
          <div className="sec4-left">
            <h1 className="contact">
              Need a stunning website?
              <br />
              Leave a request!
            </h1>
            <img className="arr" src={arrow} />
          </div>
          <div className="sec4-right">
            <form
              ref={form}
              className="contact-form"
              id="contact-form"
              onSubmit={sendEmail}
            >
              <input
                type="text"
                className="contact-input"
                id="username"
                name="username"
                autocomplete="off"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="contact-input"
                id="email"
                name="email"
                autocomplete="off"
                placeholder="Your Email"
              />
              <textarea
                id="usermessage"
                className="contact-input"
                autocomplete="off"
                name="usermessage"
                placeholder="Your Message"
              ></textarea>
              <button className="send" type="submit">
                Send<span className="fa fa-send"></span>
              </button>
              {message && <div className="message">{message}</div>}
            </form>

            {/* <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <button type="submit">Send</button>
            </form> */}
          </div>
        </div>
        <div className="footer">
          <h2>Let's Talk</h2>
          <div className="icons">
            <div className="icon">
              <a
                href="https://www.linkedin.com/in/syeda-ramsha-56465a280/"
                target="_blank"
                className="fa fa-linkedin"
              ></a>
            </div>
            <div className="icon">
              <a
                href="https://github.com/SyedaRamsha29"
                target="_blank"
                className="fa fa-github"
              ></a>
            </div>
            <div className="icon">
              <a
                href="https://www.facebook.com/profile.php?id=100074039388788&mibextid=ZbWKwL"
                target="_blank"
                className="fa fa-facebook"
              ></a>
            </div>
            <div className="icon">
              <a
                href="https://instagram.com/_.ramshaha._?igshid=NzZlODBkYWE4Ng=="
                target="_blank"
                className="fa fa-instagram"
              ></a>
            </div>
          </div>
          <p className="copyright">
            Copyright &copy;2023 Syeda Ramsha. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Contact;
