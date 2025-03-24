import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactStyles.module.css";

function Contact() {
  const formRef = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l8qi4ho", // Replace with your EmailJS Service ID
        "template_na9cfz6", // Replace with your EmailJS Template ID
        formRef.current,
        "IxJjurmUwxoTn_y4-" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setIsSubmitted(true);
          formRef.current.reset(); // Clear the form after submission
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={formRef} onSubmit={sendEmail}>
        <div className="formGroup">
          <input type="text" name="name" id="name" placeholder="Name" required />
        </div>
        <div className="formGroup">
          <input type="email" name="email" id="email" placeholder="Email" required />
        </div>
        <div className="formGroup">
          <textarea name="message" id="message" placeholder="Message" required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
      {isSubmitted && <p className={styles.successMsg}>Thank you! Your message has been sent.</p>}
    </section>
  );
}

export default Contact;
