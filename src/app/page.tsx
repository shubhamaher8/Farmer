// /app/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-[#f8f8f8] dark:bg-[#121212]">
        {/* Hero Section with CTA */}
        <section
          className="relative bg-cover bg-center h-96"
          style={{ backgroundImage: "url('/farm-background.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">FarmLink</h1>
            <p className="text-lg md:text-2xl mb-8">
              Empowering Farmers with Technology & Innovation
            </p>
            <Button variant="default" size="lg">
              Get Started
            </Button>
          </div>
        </section>

        {/* Services / Info Section */}
        <section className="py-12 px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-lg mb-8">
            We provide tools and resources to help farmers optimize operations,
            manage resources, and boost productivity.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-2">Market Insights</h3>
              <p>
                Get real-time market data and pricing info to make informed
                decisions.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-2">Resource Management</h3>
              <p>
                Manage your crops, equipment, and finances with our intuitive
                tools.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p>
                Connect with other farmers, share experiences, and learn best
                practices.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
