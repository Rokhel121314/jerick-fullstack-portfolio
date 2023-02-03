import React, { useEffect, useState } from "react";
import Axios from "axios";
import { URL } from "../App";

function InputForm() {
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    subject: "",
    message: "",
    read: false,
  });

  const [allMessages, setallMessages] = useState([]);
  // console.log("messages", allMessages);

  const { firstName, lastName, emailAddress, subject, message } = formData;
  // console.log("formData", formData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  // sending message
  const submitMessage = async (e) => {
    e.preventDefault();
    try {
      await Axios.post(`${URL}/api/messages`, formData);
      console.log("message sent");
      setformData({
        ...formData,
        firstName: "",
        lastName: "",
        emailAddress: "",
        subject: "",
        message: "",
      });
      readMessages();
      sentConfirmation();
    } catch (error) {
      console.log(error.message);
    }
  };

  // reading all messages
  const readMessages = async () => {
    try {
      const { data } = await Axios.get(`${URL}/api/messages`);
      setallMessages(data);
    } catch (error) {
      console.log(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    readMessages();
  }, []);

  const sentConfirmation = () => {
    window.alert(
      `HELLO ${formData.firstName.toUpperCase()} ${formData.lastName.toUpperCase()} thank you for sending me a message`
    );
  };

  return (
    <>
      <div className="inputHeaderContainer">
        <span className="inputHeader">LEAVE A MESSAGE!</span>
      </div>
      <form className="formInput" onSubmit={submitMessage}>
        <input
          type="text"
          placeholder="First Name*"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          className="inputBox"
          required={true}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Last Name*"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          className="inputBox"
          required={true}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Email Address*"
          name="emailAddress"
          id="emailAddress"
          value={formData.emailAddress}
          className="inputBox"
          required={true}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Subject*"
          name="subject"
          id="subject"
          value={formData.subject}
          className="inputBox"
          required={true}
          onChange={handleInputChange}
        />
        <textarea
          className="commentBox"
          placeholder="Type your message here...*"
          required={true}
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
        <button type="submit" className="submitBtn">
          SUBMIT
        </button>
      </form>
    </>
  );
}

export default InputForm;
