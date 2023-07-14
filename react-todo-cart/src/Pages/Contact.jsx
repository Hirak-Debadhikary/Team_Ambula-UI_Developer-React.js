import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to server)
    console.log("Form submitted!");
  };

  return (
    // <div>
    //   <h1>Contact Us</h1>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label htmlFor="name">Name:</label>
    //       <input
    //         type="text"
    //         id="name"
    //         value={name}
    //         onChange={handleNameChange}
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="email">Email:</label>
    //       <input
    //         type="email"
    //         id="email"
    //         value={email}
    //         onChange={handleEmailChange}
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="message">Message:</label>
    //       <textarea
    //         id="message"
    //         value={message}
    //         onChange={handleMessageChange}
    //       ></textarea>
    //     </div>
    //     <button type="submit">Submit</button>
    //   </form>
    // </div>
    <div className="max-w-md mx-auto p-4 mt-28 shadow-md shadow-cyan-500/50 rounded-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-semibold">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-semibold">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 font-semibold">
            Message:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-black"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
