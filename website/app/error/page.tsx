'use client';

import { AlertCircle } from 'lucide-react'; // Importing the Lucide icon
import Link from 'next/link';

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <AlertCircle className="w-16 h-16 text-red-500" /> {/* Error Icon */}
      <h1 className="mt-4 text-3xl font-bold text-gray-800">Oops{"!"} Something went wrong.</h1>
      <p className="mt-2 text-lg text-gray-600">We couldn{"'"}t find what you were looking for.</p>
      <Link href="/dashboard" className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200">
        Go Back Home
      </Link>
    </div>
  );
}
