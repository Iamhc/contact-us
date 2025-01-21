import React from "react";
import { useState } from "react";

const ContactForm = () => {
  const [topic, setTopic] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      topic,
      username,
      email,
      phone,
      message,
    };

    try {
      const response = await fetch(
        "https://contact-us-backend-1.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("done", data);
        setTopic("");
        setUsername("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        console.log("failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center h-screen px-8">
      {/* Left: Image with link to Google Map */}
      <div className="w-full lg:w-[50%] h-[90%] pl-4 mb-8 lg:mb-0">
        <a
          href="https://www.google.com/maps/place/To-Let+Globe/@26.8465566,80.9797793,15z/data=!4m6!3m5!1s0x399bfd77577ba78f:0xd2d6f22d1b246815!8m2!3d26.8465566!4d80.9797793!16s%2Fg%2F11vhrqqb45?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../resources/t.png")}
            alt="Location Map"
            className="w-full h-full object-contain"
          />
        </a>
      </div>

      {/* Right: Contact Form */}
      <form
        className="w-full lg:w-[30%] bg-black p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-4xl text-yellow-400 mb-6">GET IN TOUCH</h2>
        <p className="text-lg text-gray-500 mb-4">Have some questions?</p>
        <p className="text-lg text-gray-500 mb-6">
          Feel free to ask them anytime
        </p>
        <div className="mb-4">
          <select
            name="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full border-b border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-black text-white py-2"
          >
            <option value="" disabled selected>
              Select Topic
            </option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border-b border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-transparent text-white py-2"
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className="w-full border-b border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-transparent text-white py-2"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border-b border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-transparent text-white py-2"
            placeholder="Phone"
          />
        </div>
        <div className="mb-6">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            rows="3"
            className="w-full border-b border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-transparent text-white py-2"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="text-left">
          <button
            type="submit"
            className="bg-black text-yellow-400 py-2 px-4 rounded-lg hover:text-yellow-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;


