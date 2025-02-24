"use client";
// pages/register.tsx
import React, { useState } from 'react';
import { Button } from '@/components/ui/button'; // Adjust path if needed
import { Input } from '@/components/ui/input'; // Adjust path if needed
import Link from 'next/link';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setSubmissionMessage("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);
    setSubmissionMessage('');

    try {
      // Replace this with your actual API call
      const response: { status: number } = await new Promise((resolve) =>
        setTimeout(() => resolve({ status: 200 }), 2000)
      );

      if (response.status === 200) {
        setSubmissionMessage('Registration successful!');
        // Redirect or clear form fields as needed
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        setSubmissionMessage('An error occurred during registration. Please try again.');
      }
    } catch (error) {
      setSubmissionMessage('An error occurred during registration. Please try again.');
      console.error("Registration error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Register</h1>

      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
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
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <Input
              type="password"
              id="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
              Confirm Password
            </label>
            <Input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="text-center">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Register'}
            </Button>
          </div>
          {submissionMessage && <p className="text-sm mt-4 text-center">{submissionMessage}</p>}
          <p className="mt-4 text-center text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;