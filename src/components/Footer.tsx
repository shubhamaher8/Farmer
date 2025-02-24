"use client";
import Link from 'next/link';
import { Button } from './ui/button';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Input } from './ui/input';
import React, { useState } from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleNewsletterSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionMessage('');

    try {
      // Replace this with your actual API call
      const response = await new Promise<{ status: number }>((resolve) =>
        setTimeout(() => resolve({ status: 200 }), 2000)
      );

      if (response.status === 200) {
        setSubmissionMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        setSubmissionMessage('An error occurred. Please try again.');
      }
    } catch (error) {
      setSubmissionMessage('An error occurred. Please try again.');
      console.error("Newsletter signup error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-12 max-w-7xl"> {/* Centered container with max-width */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left"> {/* Center text on mobile */}
          
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-dm-serif text-black">
              Smart Farm
            </Link>
            <p className="text-sm text-gray-600">
              Empowering farmers with IoT solutions for a smarter future.
            </p>

            {/* Social Media */}
            <div className="flex justify-center md:justify-start gap-4">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:bg-gray-100" aria-label="Facebook">
                <FaFacebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:bg-gray-100" aria-label="Twitter">
                <FaTwitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:bg-gray-100" aria-label="Instagram">
                <FaInstagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600 hover:bg-gray-100" aria-label="LinkedIn">
                <FaLinkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-green-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-sm text-gray-600 hover:text-green-600">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-green-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-green-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-gray-600 hover:text-green-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-gray-600 hover:text-green-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-green-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-green-600">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Stay Updated</h3>
            <p className="text-sm text-gray-600">
              Subscribe to our newsletter for the latest news and updates.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col items-center md:items-start gap-2">
              <Input
                placeholder="Enter your email"
                className="w-full"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                {isSubmitting ? 'Submitting...' : 'Subscribe'}
              </Button>
            </form>
            {submissionMessage && <p className="text-sm mt-2 text-green-600">{submissionMessage}</p>}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} Smart Farm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;