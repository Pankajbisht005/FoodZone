import React from "react";

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-md mt-10">
      


      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
      <p className="text-center text-gray-600 mb-8">
        We'd love to hear from you! Whether you have a question about our services, need assistance, 
        or just want to provide feedback, our team is ready to help. 
        Fill out the form below, and we’ll get back to you as soon as possible.
      </p>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <input
          type="tel"
          placeholder="Contact No."
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <input
          type="email"
          placeholder="E-mail"
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <textarea
          placeholder="Message"
          className="w-full border border-gray-300 rounded-md p-3 h-32 focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-red-500 text-white p-3 rounded-md hover:bg-red-600 transition-colors"
        >
          Submit
        </button>
      </form>


      <footer className="border-t border-gray-200 pt-4 mt-6 text-center">
        <p className="text-sm text-gray-500">
          We’re available Monday to Friday from 9 AM to 6 PM.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          © 2024 Food Delivery App. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Contact;
