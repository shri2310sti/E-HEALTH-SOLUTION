import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:3030/api/v1/message/create-message",
        {
          firstName,
          lastName,
          email,
          phone,
          message,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        toast.success(res?.data?.message);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response?.data?.message);
      });
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-6 bg-blue-100 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">
        Contact Us
      </h2>
      <form className="space-y-6" onSubmit={handleMessage}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>
        <textarea
          placeholder="Message (at least 10 characters)"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
        />
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white py-2 px-8 rounded-lg hover:bg-blue-600 transition">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageForm;
