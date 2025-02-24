// pages/about.tsx
import React from 'react';
import Image from 'next/image'; // For optimized images

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>

      <div className="md:flex md:items-start md:space-x-8"> {/* Flexbox for layout */}
        <div className="md:w-1/2">
          <Image
            src="/images/about-us.jpg" // Replace with your image path
            alt="About Smart Farm Team"
            width={600}
            height={400}
            className="rounded-lg shadow-md mb-4 md:mb-0" // Margin bottom on smaller screens
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Smart Farm was founded in 2020 by a group of agricultural experts and technology enthusiasts who were passionate about making farming more efficient and sustainable.  We believe that technology can empower farmers to make better decisions, improve yields, and reduce their environmental impact.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our mission is to provide innovative IoT solutions that help farmers optimize their operations and achieve their goals. We are committed to developing user-friendly and affordable technologies that are accessible to farmers of all sizes.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
            <li>Innovation</li>
            <li>Sustainability</li>
            <li>Customer Focus</li>
            <li>Integrity</li>
          </ul>
        </div>
      </div>

      {/* Team Section (Optional) */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="text-center">
            <Image
              src="/images/team-member-1.jpg" // Replace with your image path
              alt="Team Member 1"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-2"
            />
            <h3 className="text-lg font-medium">John Doe</h3>
            <p className="text-gray-700 text-sm">CEO</p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center">
            <Image
              src="/images/team-member-2.jpg" // Replace with your image path
              alt="Team Member 2"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-2"
            />
            <h3 className="text-lg font-medium">Jane Smith</h3>
            <p className="text-gray-700 text-sm">CTO</p>
          </div>

          {/* Add more team members as needed */}
        </div>
      </div>

       {/* Testimonials Section (Optional) */}
       <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Testimonials</h2>
        {/* Add your testimonials here */}
      </div>

    </div>
  );
};

export default About;