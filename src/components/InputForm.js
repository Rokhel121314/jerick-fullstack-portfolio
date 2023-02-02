import React from "react";

function InputForm() {
  return (
    <>
      <div className="inputHeaderContainer">
        <span className="inputHeader">LEAVE A MESSAGE!</span>
      </div>
      <form className="formInput">
        <input
          type="text"
          placeholder="First Name*"
          name="firstName"
          id="firstName"
          className="inputBox"
          required={true}
        />
        <input
          type="text"
          placeholder="Last Name*"
          name="lastName"
          id="lastName"
          className="inputBox"
          required={true}
        />
        <input
          type="email"
          placeholder="Email Address*"
          name="email-address"
          id="email-address"
          className="inputBox"
          required={true}
        />
        <input
          type="text"
          placeholder="Subject*"
          name="subject"
          id="subject"
          className="inputBox"
          required={true}
        />
        <textarea
          className="commentBox"
          placeholder="Type your message here...*"
          required={true}
        ></textarea>
        <button type="submit" className="submitBtn">
          SUBMIT
        </button>
      </form>
    </>
  );
}

export default InputForm;
