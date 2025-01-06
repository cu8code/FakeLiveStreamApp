import { HardHat, Wrench, Hammer } from "lucide-react";
import Link from "next/link";

export default function UnderConstruction() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-4">
      <div className="flex items-center justify-center space-x-4 mb-6">
        <HardHat className="text-yellow-500 animate-bounce" size={48} />
        <Wrench className="text-gray-500 animate-spin-slow" size={48} />
        <Hammer className="text-blue-500 animate-pulse" size={48} />
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Page Under Construction
      </h1>
      <p className="text-gray-600">
        We{"'"}re working hard to bring this page to life. Check back soon{"!"}
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="text-blue-600 hover:underline"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
}
