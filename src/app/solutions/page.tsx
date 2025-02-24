// pages/solutions.tsx
import React from 'react';
import Image from 'next/image'; // For optimized images
import { Button } from '@/components/ui/button'; // Adjust path if needed

const Solutions: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Our Smart Farm Solutions</h1>

      {/* Solution 1: Precision Irrigation */}
      <section className="mb-12">
        <div className="md:flex md:items-center md:space-x-8">
          <div className="md:w-1/2">
            <Image
              src="/images/irrigation.jpg" // Replace with your image path
              alt="Precision Irrigation"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Precision Irrigation</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Optimize water usage and maximize crop yields with our smart irrigation system. Our sensors monitor soil moisture, weather conditions, and plant needs to deliver the precise amount of water at the right time.
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4">
              <li>Real-time soil moisture monitoring</li>
              <li>Automated irrigation scheduling</li>
              <li>Water conservation and cost savings</li>
              <li>Improved crop health and yield</li>
            </ul>
            <Button>Learn More</Button> {/* Or <Link> if you want to navigate */}
          </div>
        </div>
      </section>

      {/* Solution 2: Crop Monitoring */}
      <section className="mb-12">
        <div className="md:flex md:items-center md:space-x-8 md:flex-row-reverse"> {/* Reverse order on medium screens */}
          <div className="md:w-1/2">
             <Image
              src="/images/crop-monitoring.jpg" // Replace with your image path
              alt="Crop Monitoring"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Crop Monitoring</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Gain valuable insights into your crop health with our advanced monitoring tools. Our platform uses satellite imagery, drone data, and field sensors to detect early signs of stress, disease, or nutrient deficiencies.
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4">
              <li>Early disease detection</li>
              <li>Nutrient deficiency identification</li>
              <li>Yield prediction and optimization</li>
              <li>Data-driven decision making</li>
            </ul>
            <Button variant="outline">Explore Crop Monitoring</Button>
          </div>
        </div>
      </section>

      {/* Solution 3: Livestock Management */}
      <section className="mb-12">
        <div className="md:flex md:items-center md:space-x-8">
            <div className="md:w-1/2">
             <Image
              src="/images/livestock.jpg" // Replace with your image path
              alt="Livestock Management"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Livestock Management</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
            Improve livestock health and productivity with our smart management solutions. Our platform tracks animal location, health metrics, and behavior patterns to provide real-time alerts and insights.
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4">
              <li>Real-time location tracking</li>
              <li>Health monitoring and alerts</li>
              <li>Behavior analysis and insights</li>
              <li>Optimized feeding and care</li>
            </ul>
            <Button variant="ghost">Learn More About Livestock</Button>
          </div>
        </div>
      </section>

      {/* Add more solutions sections as needed */}

    </div>
  );
};

export default Solutions;