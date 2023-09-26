import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import Input from "./Input.js";

function App() {
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("usa");
  const [message, setMessage] = useState("");
  const [contactTimePreference, setContactTimePreference] = useState("afternoon");
  const [isOptedIn, setIsOptedIn] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="container">
      {isSubmitted
      ? <div>Thank you for your submission. We'll contact you at {phone} in the {contactTimePreference}</div>
      : <form onSubmit={
        (event) => {
          event.preventDefault(); // prevent auto refresh when submitting
          setIsSubmitted(true);
          console.log(phone, country, message, contactTimePreference, isOptedIn)
      }}>
        <div className="my-3">
          {/* htmlFor stands for `for` in html which allows the link between caption and input field */}
          {/* className stands for `class` in html */}
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="123-456-7890"
            value={phone}
            onChange={(event) => {
              console.log(event);
              const input = event.target;
              const phone = input.value;

              setPhone(phone);
          }}/>
        </div>
        <div className="my-3">
          <Input label="Phone" id="phone" value={phone} onInputChange={(event) => {
            setPhone(event.target.value);
          }} />
        </div>
        <div className="mb-3">
          <label className="form-label">Country</label>
          <select className="form-select form-select-lg" value={country} onChange={(event)=>{setCountry(event.target.value)}}>
            <option>--Select a country--</option>
            <option value="usa">United States</option>
            <option value="canada">Canada</option>
            <option value="mexico">Mexico</option>
            <option>va</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message {message}
          </label>
          <textarea className="form-control" id="message" rows="3"
            onChange={(event) => {
              console.log(event);
              setMessage(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <p>When is the best time to contact you?</p>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="contact-time-preference"
              id="morning-contact-time-preference"
              value="morning"
              checked={contactTimePreference === "morning"}
              onChange={(event) => {setContactTimePreference(event.target.value)}}
            />
            <label
              className="form-check-label"
              htmlFor="morning-contact-time-preference"
            >
              Morning
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="contact-time-preference"
              id="afternoon-contact-time-preference"
              value="afternoon"
              checked={contactTimePreference === "afternoon"}
              onChange={(event) => {setContactTimePreference(event.target.value)}}
            />
            <label
              className="form-check-label"
              htmlFor="afternoon-contact-time-preference"
            >
              Afternoon
            </label>
          </div>
        </div>
        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="newsletter"
            checked={isOptedIn} onChange={(event) => {setIsOptedIn(event.target.checked)}} />
          <label className="form-check-label" htmlFor="newsletter">
            Check if you'd like to opt-in to our newsletter
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>}
    </div>
  );
}
export default App;