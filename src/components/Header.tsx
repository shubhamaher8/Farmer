import Link from 'next/link';
import { Button } from './ui/button'; // shadcn/ui Button

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Company Name */}
        <Link href="/" className="text-2xl font-dm-serif text-black">
          Smart Farm
        </Link>

        {/* Navigation and Buttons */}
        <div className="flex items-center gap-6">
          {/* Getting Started and Solutions Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-black hover:bg-gray-100">
              Getting Started
            </Button>
            <Button variant="ghost" className="text-black hover:bg-gray-100">
              Solutions
            </Button>
          </div>

          {/* Separator */}
          <div className="h-6 w-px bg-gray-300" />

          {/* Login and Register Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-black hover:bg-gray-100">
              Login
            </Button>
            <Button variant="default" className="bg-black text-white rounded-full hover:bg-black/90">
              Register
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;