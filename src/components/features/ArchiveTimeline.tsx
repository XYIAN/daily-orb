"use client";

import { Timeline } from "primereact/timeline";
import { QuoteCard } from "./QuoteCard";

interface ArchiveItem {
  date: string;
  quote: string;
  luckyColor: string;
  luckyNumber: number;
}

interface ArchiveTimelineProps {
  items: ArchiveItem[];
  className?: string;
}

export function ArchiveTimeline({
  items,
  className = "",
}: ArchiveTimelineProps) {
  const timelineItems = items.map((item) => ({
    date: item.date,
    content: (
      <QuoteCard
        quote={item.quote}
        luckyColor={item.luckyColor}
        luckyNumber={item.luckyNumber}
        date={item.date}
        className="mb-4"
      />
    ),
  }));

  return (
    <div className={`max-w-4xl mx-auto p-4 ${className}`}>
      <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
        Your Magical Journey
      </h2>
      <Timeline
        value={timelineItems}
        content={(item) => item.content}
        marker={() => (
          <i className="pi pi-circle-fill text-green-500 text-xl" />
        )}
        className="custom-timeline"
      />
    </div>
  );
}
