import { useState } from "react";
import { toast } from "react-toastify";

export default function ContactMe() {
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData(event.target);
      formData.append("access_key", process.env.REACT_APP_EMAIL_KEY);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        toast.success(
          `Thank you for reaching out! I appreciate your interest. I'll get back to you within 1 to 2 days.`,
          {
            position: "top-right",
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
          }
        );
        event.target.reset();
      }
    } catch (error) {
      console.log("Something went wrong");
      toast.error(
        `Something went wrong! Please reach out to me directly via LinkedIn Thanks`,
        {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
        }
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="Contact" className="contact--section">
      <div className="contact--section_heading">
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <div className="contact--section_message">
          <p className="text-lg">
            Interested in hiring or remote collaboration?
            <br />
            Get in touch and let's create something amazing together!
          </p>
        </div>
      </div>
      <form className="contact--form--container" onSubmit={onSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number(WhatsApp)</span>
            <input
              type="tel"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
            />
          </label>
        </div>
        <label htmlFor="choode-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select
            id="choose-topic"
            className="contact--input text-md"
            name="purpose_of_email"
          >
            <option>Select One...</option>
            <option>Freelancing</option>
            <option>Remote Job Opportunity</option>
            <option>On-Site Job Opportunity</option>
            <option>Consultation</option>
            <option>Project Collaboration</option>
            <option>Other</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            required
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
            name="message"
          />
        </label>
        {/* <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label> */}
        <div>
          <button
            disabled={isLoading}
            className="btn btn-primary contact--form--btn"
            type="submit"
          >
            {isLoading ? "Please wait..." : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
}
