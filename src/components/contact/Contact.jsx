import { useState } from "react";
import "./contact.scss";
import validator from "validator";
import emailjs from "emailjs-com";
import { init } from 'emailjs-com';
init("user_L94fg8xzhbatQZXDRPOXu");


export default function Contact() {
  const [message, setMessage] = useState(false);

  // send email function using emailjs api
  function sendEmail(e) {
    e.preventDefault();
    setMessage(true);

    emailjs.sendForm('service_bi3kjni', 'template_zfmh02f', e.target, 'user_L94fg8xzhbatQZXDRPOXu')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }
  // end of email send using emailjs api

  // email validation 
  const [emailError, setEmailError] = useState('');
  const validateEmail = (e) => {
    let email = e.target.value;
    if (validator.isEmail(email)) {
      setEmailError('');
    }
    else {
      setEmailError('Enter a valid Email!');
    }

  }
  // end of email validation
  /*
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  */
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/contact-me.png" width="100%" height="500" alt="" />
      </div>
      <div className="right">
        <h2>Contact ME!</h2>
        <form onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />

          <input type="text" id="name" name="user_name" placeholder="Name" required />
          <input type="text" name="reply_to" id="reply_to" onChange={(e) => validateEmail(e)} placeholder="Email" required></input>
          <span id="invalid_msg" style={{ fontWeight: 'bold', color: 'red', }}>{emailError}</span>
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <input id="button" type="submit" value="Send" />
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}