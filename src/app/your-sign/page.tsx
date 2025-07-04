'use client';

import { useState, useEffect } from 'react';
import { SignPicker, QuoteCard } from '@/components';
import { useDailyOrb } from '@/hooks';
import { getZodiacSign } from '@/utils/storage';
import { ZODIAC_FORECASTS } from '@/constants/zodiac';
import { ZodiacForecast } from '@/types';
import { SpeedDial } from '@/components';

export default function YourSignPage() {
  const [zodiacForecast, setZodiacForecast] = useState<ZodiacForecast | null>(null);
  const { dailyData } = useDailyOrb();

  useEffect(() => {
    const savedSign = getZodiacSign();
    if (savedSign) {
      const forecast = ZODIAC_FORECASTS.find(f => f.sign === savedSign);
      setZodiacForecast(forecast || null);
    }
  }, []);

  const handleSignChange = (sign: string) => {
    const forecast = ZODIAC_FORECASTS.find(f => f.sign === sign);
    setZodiacForecast(forecast || null);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-green-50 to-green-200 pt-16">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-3xl font-bold text-green-800 mb-8">Your Zodiac Reading</h1>

        <SignPicker onSignChange={handleSignChange} className="mb-8" />

        {zodiacForecast && dailyData && (
          <div className="space-y-6">
            <QuoteCard
              quote={zodiacForecast.forecast}
              luckyColor={zodiacForecast.luckyColor}
              luckyNumber={zodiacForecast.luckyNumber}
              date={dailyData.date}
            />

            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                Today&apos;s General Reading
              </h3>
              <QuoteCard
                quote={dailyData.quote}
                luckyColor={dailyData.luckyColor}
                luckyNumber={dailyData.luckyNumber}
              />
            </div>
          </div>
        )}
      </div>

      <SpeedDial />
    </main>
  );
}
