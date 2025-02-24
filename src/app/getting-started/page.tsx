// pages/getting-started.tsx
import React from 'react';
import { Button } from '@/components/ui/button'; // Adjust path if needed

const GettingStarted: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Getting Started with Smart Farm</h1>

      <p className="text-gray-700 leading-relaxed mb-6">
        Welcome to Smart Farm! This guide will walk you through the process of setting up and using our platform to optimize your farming operations.
      </p>

      {/* Section 1: Account Creation */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Create an Account</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          To get started, you'll need to create an account.  Click the "Register" button below to begin.
        </p>
        <Button>Register</Button> {/* Add a Link component if you want to navigate */}
      </section>

      {/* Section 2: Connecting Your Devices */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Connect Your Devices</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Once you have an account, you can connect your farming devices (sensors, weather stations, etc.) to our platform.  Follow the instructions in our device connection guide.
        </p>
        <Button variant="outline">Device Connection Guide</Button>
      </section>

      {/* Section 3: Exploring the Dashboard */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Explore the Dashboard</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our intuitive dashboard provides real-time data and insights about your farm.  Take some time to familiarize yourself with the different features and tools.
        </p>
        <Button variant="ghost">Dashboard Overview</Button>
      </section>

      {/* Section 4: Support and Resources */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Support and Resources</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Need help?  Check out our frequently asked questions, documentation, or contact our support team.
        </p>
        <Button variant="link">Visit our Support Center</Button>
      </section>

      {/* Call to Action (Optional) */}
      <div className="text-center">
        <p className="text-lg text-gray-700">Ready to transform your farm?</p>
        <Button className="mt-4">Get Started Now</Button>
      </div>
    </div>
  );
};

export default GettingStarted;