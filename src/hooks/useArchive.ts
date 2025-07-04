'use client';

import { useState, useEffect, useCallback } from 'react';
import { ArchiveItem } from '@/types';
import { getArchiveData, setArchiveData } from '@/utils/storage';
import { isSameDay, getToday } from '@/utils/date';

/**
 * Custom hook for managing archive of past daily orbs
 */
export function useArchive() {
  const [archiveItems, setArchiveItems] = useState<ArchiveItem[]>([]);

  /**
   * Load archive data from localStorage
   */
  const loadArchive = useCallback(() => {
    const data = getArchiveData() as ArchiveItem[];
    setArchiveItems(data || []);
  }, []);

  /**
   * Add new item to archive
   */
  const addToArchive = useCallback(
    (item: ArchiveItem) => {
      const updatedArchive = [...archiveItems, item];
      setArchiveItems(updatedArchive);
      setArchiveData(updatedArchive);
    },
    [archiveItems]
  );

  /**
   * Check if today's data is already in archive
   */
  const isTodayInArchive = useCallback(() => {
    const today = getToday();
    return archiveItems.some(item => {
      const itemDate = new Date(item.date);
      return isSameDay(itemDate, today);
    });
  }, [archiveItems]);

  /**
   * Get archive items for a specific date range
   */
  const getArchiveForDateRange = useCallback(
    (startDate: Date, endDate: Date) => {
      return archiveItems.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate >= startDate && itemDate <= endDate;
      });
    },
    [archiveItems]
  );

  /**
   * Clear archive data
   */
  const clearArchive = useCallback(() => {
    setArchiveItems([]);
    setArchiveData([]);
  }, []);

  // Load archive on mount
  useEffect(() => {
    loadArchive();
  }, [loadArchive]);

  return {
    archiveItems,
    addToArchive,
    isTodayInArchive,
    getArchiveForDateRange,
    clearArchive,
    loadArchive,
  };
}
