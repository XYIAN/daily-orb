'use client';

import { ArchiveTimeline } from '@/components';
import { useArchive } from '@/hooks';
import { SpeedDial } from '@/components';

export default function ArchivePage() {
  const { archiveItems } = useArchive();

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-green-800 text-center mb-8">Your Magical Journey</h1>

        {archiveItems.length > 0 ? (
          <ArchiveTimeline items={archiveItems} />
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 rounded-full bg-green-200 mx-auto mb-4 flex items-center justify-center">
              <i className="pi pi-calendar text-green-600 text-2xl" />
            </div>
            <p className="text-xl text-green-700 mb-2">No orbs revealed yet!</p>
            <p className="text-green-600">
              Tap the orb on the home page to start your magical journey.
            </p>
          </div>
        )}
      </div>

      <SpeedDial />
    </main>
  );
}
