'use client';

import { SpeedDial } from '@/components';

export default function AboutPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-green-50 to-green-100 pt-16">
      <div className="max-w-2xl text-center px-4">
        <h1 className="text-4xl font-bold text-green-900 mb-6">About Daily Orb</h1>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <p className="text-lg text-green-800 leading-relaxed">
            Daily Orb is your mystical companion for daily inspiration, lucky colors, numbers, and
            astrological fun. Each day brings a unique magical experience tailored just for you.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 mx-auto mb-3 flex items-center justify-center">
                <i className="pi pi-star text-green-600 text-xl" />
              </div>
              <h3 className="font-semibold text-green-800 mb-2">Daily Magic</h3>
              <p className="text-green-700 text-sm">
                Tap the orb to reveal today&apos;s mystical quote, lucky color, and number.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 mx-auto mb-3 flex items-center justify-center">
                <i className="pi pi-heart text-green-600 text-xl" />
              </div>
              <h3 className="font-semibold text-green-800 mb-2">Zodiac Readings</h3>
              <p className="text-green-700 text-sm">
                Get personalized daily forecasts based on your zodiac sign.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 mx-auto mb-3 flex items-center justify-center">
                <i className="pi pi-calendar text-green-600 text-xl" />
              </div>
              <h3 className="font-semibold text-green-800 mb-2">Magical Archive</h3>
              <p className="text-green-700 text-sm">
                Keep track of your daily orbs and magical moments.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 mx-auto mb-3 flex items-center justify-center">
                <i className="pi pi-mobile text-green-600 text-xl" />
              </div>
              <h3 className="font-semibold text-green-800 mb-2">Mobile First</h3>
              <p className="text-green-700 text-sm">
                Designed for magical experiences on any device.
              </p>
            </div>
          </div>
        </div>
      </div>

      <SpeedDial />
    </main>
  );
}
