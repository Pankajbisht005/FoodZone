import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }
 

  render() {
    return (
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-5">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About Us
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Discover the ease of food delivery with our platform, connecting you
          to the best local restaurants and cafes.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-red-500 mb-4">
            Our Story
          </h2>
          <p className="text-gray-700">
            Established in 2023, our journey began with the goal of bringing
            flavorful meals to your doorstep. We strive to offer a seamless food
            delivery experience, ensuring every dish reaches you fresh and
            fast.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-red-500 mb-4">
            Why Choose Us?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Diverse range of cuisines</li>
            <li>Quick and efficient delivery</li>
            <li>Competitive prices</li>
            <li>Live order tracking</li>
            <li>Round-the-clock customer support</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-red-500 mb-4">
            Our Values
          </h2>
          <p className="text-gray-700">
            We believe in quality, reliability, and customer satisfaction. Our
            team is dedicated to making sure each order is handled with care and
            delivered promptly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-red-500 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-700">
            We'd love to hear from you! Contact us at{" "}
            <a
              href="mailto:support@fooddeliveryapp.com"
              className="text-blue-500 hover:underline"
            >
              support@fooddeliveryapp.com
            </a>{" "}
            for any questions or feedback.
          </p>
        </section>

        <footer className="border-t border-gray-200 pt-4 mt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2024 Food Delivery App. All rights reserved.
          </p>
        </footer>
      </div>
    );
  }
}

export default About;
