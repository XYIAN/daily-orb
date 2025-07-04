"use client";

import { Card } from "primereact/card";

interface QuoteCardProps {
  quote: string;
  luckyColor: string;
  luckyNumber: number;
  date?: string;
  className?: string;
}

export function QuoteCard({
  quote,
  luckyColor,
  luckyNumber,
  date,
  className = "",
}: QuoteCardProps) {
  return (
    <Card
      className={`max-w-md mx-auto bg-gradient-to-br from-green-50 to-green-100 border-green-200 ${className}`}
    >
      <div className="text-center space-y-4">
        {date && <p className="text-sm text-green-600 font-medium">{date}</p>}

        <blockquote className="text-lg text-green-800 italic leading-relaxed">
          &ldquo;{quote}&rdquo;
        </blockquote>

        <div className="flex justify-center space-x-6 pt-4">
          <div className="text-center">
            <p className="text-sm text-green-600 font-medium">Lucky Color</p>
            <div
              className="w-8 h-8 rounded-full mx-auto mt-1 border-2 border-green-300"
              style={{ backgroundColor: luckyColor }}
              title={luckyColor}
            />
          </div>

          <div className="text-center">
            <p className="text-sm text-green-600 font-medium">Lucky Number</p>
            <p className="text-2xl font-bold text-green-700 mt-1">
              {luckyNumber}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
