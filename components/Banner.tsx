import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid-16 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" />
      <div className="relative flex flex-col items-center justify-center py-24 px-6 sm:py-32 sm:px-12 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-white tracking-tight">
          <span className="block">Split expenses with friends</span>
          <span className="block text-yellow-300">in seconds</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto">
          Whether it&apos;s a group trip or dinner, Split makes it easy to track
          shared expenses and settle up with a single tap.
        </p>
        <Link href="/group">
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-yellow-300 hover:text-purple-700 transition-colors duration-300 text-lg sm:text-xl font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Started
          </Button>
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}
