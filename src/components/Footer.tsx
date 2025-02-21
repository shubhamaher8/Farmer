// /components/Footer.tsx
export default function Footer() {
    return (
      <footer className="w-full bg-gray-100 dark:bg-gray-900 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} FarmLink. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  