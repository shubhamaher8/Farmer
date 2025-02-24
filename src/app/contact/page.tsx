// pages/contact.tsx
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; // Assuming you have an Input component

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmissionMessage('');

    try {
      // Simulate API call (replace with your actual API call)
      const response: { status: number } = await new Promise((resolve) =>
        setTimeout(() => resolve({ status: 200 }), 2000)
      );


      if (response.status === 200) {
        setSubmissionMessage('Thank you for your message! We will get back to you soon.');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setSubmissionMessage('An error occurred. Please try again.');
      }
    } catch (error) {
      setSubmissionMessage('An error occurred. Please try again.');
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

      <div className="max-w-3xl mx-auto"> {/* Center the form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <Input
              type="text"
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <Input
              type="email"
              id="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              required
            />
          </div>
          <div className="text-center">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Send Message'}
            </Button>
          </div>
          {submissionMessage && <p className="text-sm mt-4 text-center">{submissionMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;