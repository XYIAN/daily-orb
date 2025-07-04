'use client';

import { useState, useEffect, useCallback } from 'react';
import { DailyOrbData, ZodiacForecast } from '@/types';
import { DAILY_QUOTES } from '@/constants/quotes';
import { LUCKY_COLORS } from '@/constants/colors';
import { ZODIAC_FORECASTS } from '@/constants/zodiac';
import { getDailySeed, formatDate, getToday } from '@/utils/date';
import { getZodiacSign } from '@/utils/storage';

/**
 * Custom hook for daily orb data generation
 */
export function useDailyOrb() {
  const [dailyData, setDailyData] = useState<DailyOrbData | null>(null);
  const [zodiacForecast, setZodiacForecast] = useState<ZodiacForecast | null>(null);

  /**
   * Generate consistent random data based on date
   */
  const generateDailyData = useCallback((date: Date): DailyOrbData => {
    const seed = getDailySeed(date);

    // Use seed to generate consistent daily results
    const quoteIndex = seed % DAILY_QUOTES.length;
    const colorIndex = (seed * 2) % LUCKY_COLORS.length;
    const numberIndex = ((seed * 3) % 20) + 1; // Numbers 1-20

    return {
      quote: DAILY_QUOTES[quoteIndex],
      luckyColor: LUCKY_COLORS[colorIndex],
      luckyNumber: numberIndex,
      date: formatDate(date),
    };
  }, []);

  /**
   * Get zodiac forecast for user's sign
   */
  const getZodiacForecast = useCallback((sign: string): ZodiacForecast | null => {
    return ZODIAC_FORECASTS.find(forecast => forecast.sign === sign) || null;
  }, []);

  /**
   * Generate today's orb data
   */
  const generateTodayOrb = useCallback(() => {
    const today = getToday();
    const data = generateDailyData(today);
    setDailyData(data);

    // Get zodiac forecast if user has selected a sign
    const userSign = getZodiacSign();
    if (userSign) {
      const forecast = getZodiacForecast(userSign);
      setZodiacForecast(forecast);
    }
  }, [generateDailyData, getZodiacForecast]);

  /**
   * Generate orb data for a specific date
   */
  const generateOrbForDate = useCallback(
    (date: Date): DailyOrbData => {
      return generateDailyData(date);
    },
    [generateDailyData]
  );

  // Generate today's data on mount
  useEffect(() => {
    generateTodayOrb();
  }, [generateTodayOrb]);

  return {
    dailyData,
    zodiacForecast,
    generateTodayOrb,
    generateOrbForDate,
    getZodiacForecast,
  };
}
