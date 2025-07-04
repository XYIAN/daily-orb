import { ZodiacSign, ZodiacForecast } from '@/types';

export const ZODIAC_SIGNS: ZodiacSign[] = [
  { label: 'Aries', value: 'aries', icon: 'pi pi-star' },
  { label: 'Taurus', value: 'taurus', icon: 'pi pi-circle' },
  { label: 'Gemini', value: 'gemini', icon: 'pi pi-star-fill' },
  { label: 'Cancer', value: 'cancer', icon: 'pi pi-circle-fill' },
  { label: 'Leo', value: 'leo', icon: 'pi pi-sun' },
  { label: 'Virgo', value: 'virgo', icon: 'pi pi-heart' },
  { label: 'Libra', value: 'libra', icon: 'pi pi-balance-scale' },
  { label: 'Scorpio', value: 'scorpio', icon: 'pi pi-bolt' },
  { label: 'Sagittarius', value: 'sagittarius', icon: 'pi pi-arrow-up' },
  { label: 'Capricorn', value: 'capricorn', icon: 'pi pi-mountain' },
  { label: 'Aquarius', value: 'aquarius', icon: 'pi pi-cloud' },
  { label: 'Pisces', value: 'pisces', icon: 'pi pi-fish' },
];

export const ZODIAC_FORECASTS: ZodiacForecast[] = [
  {
    sign: 'aries',
    forecast: 'Your fiery energy leads to new opportunities today. Take bold action!',
    luckyColor: '#FF5722',
    luckyNumber: 7,
  },
  {
    sign: 'taurus',
    forecast: 'Your steady nature brings stability and abundance. Trust your instincts.',
    luckyColor: '#8BC34A',
    luckyNumber: 4,
  },
  {
    sign: 'gemini',
    forecast: 'Your curiosity opens doors to new knowledge. Communication flows easily.',
    luckyColor: '#00BCD4',
    luckyNumber: 9,
  },
  {
    sign: 'cancer',
    forecast: 'Your intuition is heightened today. Listen to your inner voice.',
    luckyColor: '#2196F3',
    luckyNumber: 2,
  },
  {
    sign: 'leo',
    forecast: 'Your natural charisma attracts positive attention. Shine brightly!',
    luckyColor: '#FFC107',
    luckyNumber: 1,
  },
  {
    sign: 'virgo',
    forecast: 'Your attention to detail brings perfection. Focus on what matters most.',
    luckyColor: '#4CAF50',
    luckyNumber: 6,
  },
  {
    sign: 'libra',
    forecast: 'Your sense of balance creates harmony. Seek peace and beauty.',
    luckyColor: '#E91E63',
    luckyNumber: 8,
  },
  {
    sign: 'scorpio',
    forecast: 'Your deep insight reveals hidden truths. Trust your powerful intuition.',
    luckyColor: '#673AB7',
    luckyNumber: 3,
  },
  {
    sign: 'sagittarius',
    forecast: 'Your adventurous spirit leads to exciting discoveries. Explore freely.',
    luckyColor: '#FF9800',
    luckyNumber: 5,
  },
  {
    sign: 'capricorn',
    forecast: 'Your determination brings success. Climb steadily toward your goals.',
    luckyColor: '#795548',
    luckyNumber: 10,
  },
  {
    sign: 'aquarius',
    forecast: 'Your innovative thinking breaks new ground. Embrace your uniqueness.',
    luckyColor: '#3F51B5',
    luckyNumber: 11,
  },
  {
    sign: 'pisces',
    forecast: 'Your spiritual connection brings divine guidance. Trust the flow.',
    luckyColor: '#9C27B0',
    luckyNumber: 12,
  },
];
