import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                 
                    <div className="w-full md:w-1/4 mb-8 md:mb-0">
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <p className="text-gray-400 mb-2">123 Food Street,Indirapuram</p>
                        <p className="text-gray-400 mb-2">Email: <a href="mailto:support@fooddelivery.com" className="underline hover:text-yellow-400">support@fooddelivery.com</a></p>
                        <p className="text-gray-400">Phone: <a href="tel:+1234567890" className="underline hover:text-yellow-400">9999999999</a></p>
                    </div>

                 
                    <div className="w-full md:w-1/4 mb-8 md:mb-0">
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul>
                            <li className="mb-2"><Link to="/" className="text-gray-400 hover:text-yellow-400">Home</Link></li>
                            <li className="mb-2"><Link to="/about" className="text-gray-400 hover:text-yellow-400">About Us</Link></li>
                            <li className="mb-2"><Link to="/contact" className="text-gray-400 hover:text-yellow-400">Contact Us</Link></li>
                            <li className="mb-2"><Link to="/cart" className="text-gray-400 hover:text-yellow-400">Cart</Link></li>
                        </ul>
                    </div>

                
                    <div className="w-full md:w-1/4 mb-8 md:mb-0">
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 text-2xl">
                               <FaFacebook/>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 text-2xl">
                               <FaTwitter/>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 text-2xl">
                                <FaInstagramSquare/>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 text-2xl">
                                <FaLinkedin/>
                            </a>
                        </div>
                    </div>

                    
                    <div className="w-full md:w-1/4">
                        <h4 className="text-lg font-semibold mb-4">Newsletter Signup</h4>
                        <p className="text-gray-400 mb-4">Stay updated with our latest offers and news. Sign up for our newsletter:</p>
                        <form className="flex flex-col">
                            <input type="email" placeholder="Enter your email" className="p-2 mb-2 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400" />
                            <button type="submit" className="bg-yellow-400 text-gray-900 p-2 rounded-lg hover:bg-yellow-500">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="text-center text-gray-400 mt-8">
                    <p>&copy; {new Date().getFullYear()} Food Delivery App. All rights reserved.</p>
                    <p className="text-sm">Designed and developed with <span className="text-red-500">❤️</span> by <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-400">Pankaj Bisht</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
