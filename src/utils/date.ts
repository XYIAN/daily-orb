/**
 * Format date to readable string
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Generate a consistent seed based on date for daily random data
 */
export function getDailySeed(date: Date): number {
  const dateString = date.toISOString().split('T')[0]; // YYYY-MM-DD
  return dateString.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
}

/**
 * Get today's date
 */
export function getToday(): Date {
  return new Date();
}

/**
 * Check if two dates are the same day
 */
export function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}
