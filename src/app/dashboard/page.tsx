// pages/dashboard.tsx
import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Dashboard</h1>

      {/* Overview Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Farm Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-medium mb-2">Total Area</h3>
            <p className="text-2xl font-bold">150 Acres</p> {/* Replace with dynamic data */}
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-medium mb-2">Crops Planted</h3>
            <p className="text-2xl font-bold">Corn, Soybeans</p> {/* Replace with dynamic data */}
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-medium mb-2">Water Usage</h3>
            <p className="text-2xl font-bold">2500 Liters</p> {/* Replace with dynamic data */}
          </div>
          {/* Add more overview cards as needed */}
        </div>
      </section>

      {/* Charts and Graphs Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Performance Charts</h2>
        {/* Placeholder for charts/graphs */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          {/* You'll likely use a charting library here (e.g., Recharts, Chart.js) */}
          <p className="text-gray-700">Charts and graphs will be displayed here.</p>
        </div>
      </section>

      {/* Recent Activity Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <ul className="list-disc pl-6 text-gray-700">
            <li>Irrigation system activated at 8:00 AM</li>
            <li>Soil moisture levels checked at 10:00 AM</li>
            <li>Harvesting completed in field 2</li>
            {/* Add more activity items */}
          </ul>
        </div>
      </section>

      {/* Data Tables Section (Optional) */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Detailed Data</h2>
        <div className="bg-white rounded-lg shadow-md p-6 overflow-x-auto"> {/* Add overflow for horizontal scrolling */}
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Field</th>
                <th className="px-4 py-2">Temperature</th>
                {/* Add more table headers */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">2024-07-26</td>
                <td className="px-4 py-2">Field 1</td>
                <td className="px-4 py-2">28°C</td>
                {/* Add more table data */}
              </tr>
              {/* Add more table rows */}
            </tbody>
          </table>
        </div>
      </section>

      {/* Add more sections as needed */}

    </div>
  );
};

export default Dashboard;