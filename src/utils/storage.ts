/**
 * Safe localStorage operations with error handling
 */

const STORAGE_KEYS = {
  ZODIAC_SIGN: 'zodiacSign',
  ARCHIVE_DATA: 'archiveData',
} as const;

/**
 * Get item from localStorage with error handling
 */
export function getStorageItem<T>(key: string): T | null {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error(`Error reading from localStorage: ${error}`);
    return null;
  }
}

/**
 * Set item in localStorage with error handling
 */
export function setStorageItem<T>(key: string, value: T): boolean {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Error writing to localStorage: ${error}`);
    return false;
  }
}

/**
 * Remove item from localStorage
 */
export function removeStorageItem(key: string): boolean {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(`Error removing from localStorage: ${error}`);
    return false;
  }
}

/**
 * Get zodiac sign from localStorage
 */
export function getZodiacSign(): string | null {
  return getStorageItem<string>(STORAGE_KEYS.ZODIAC_SIGN);
}

/**
 * Set zodiac sign in localStorage
 */
export function setZodiacSign(sign: string): boolean {
  return setStorageItem(STORAGE_KEYS.ZODIAC_SIGN, sign);
}

/**
 * Get archive data from localStorage
 */
export function getArchiveData() {
  return getStorageItem<unknown[]>(STORAGE_KEYS.ARCHIVE_DATA) || [];
}

/**
 * Set archive data in localStorage
 */
export function setArchiveData(data: unknown[]): boolean {
  return setStorageItem(STORAGE_KEYS.ARCHIVE_DATA, data);
}
