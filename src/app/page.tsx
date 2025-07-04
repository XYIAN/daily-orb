'use client';

import { useState } from 'react';
import { Orb, DailyOrbDialog } from '@/components';
import { useDailyOrb, useArchive } from '@/hooks';
import { SpeedDial } from '@/components';

export default function HomePage() {
  const [dialogVisible, setDialogVisible] = useState(false);
  const { dailyData } = useDailyOrb();
  const { addToArchive, isTodayInArchive } = useArchive();

  const handleOrbClick = () => {
    if (dailyData && !isTodayInArchive()) {
      addToArchive({
        date: dailyData.date,
        quote: dailyData.quote,
        luckyColor: dailyData.luckyColor,
        luckyNumber: dailyData.luckyNumber,
      });
    }
    setDialogVisible(true);
  };

  const handleDialogHide = () => {
    setDialogVisible(false);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-green-100 to-green-300 pt-16">
      <div className="text-center">
        <Orb onClick={handleOrbClick} size="lg" />
        <p className="text-lg text-green-900 mt-6">Tap the orb for today&apos;s magic!</p>
      </div>

      {dailyData && (
        <DailyOrbDialog visible={dialogVisible} onHide={handleDialogHide} data={dailyData} />
      )}

      <SpeedDial />
    </main>
  );
}
