// /components/Header.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800 dark:text-white">
          <Link href="/">FarmLink</Link>
        </div>
        <nav className="space-x-4">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
