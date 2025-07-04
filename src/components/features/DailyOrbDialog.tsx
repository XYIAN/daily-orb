"use client";

import { Dialog } from "primereact/dialog";
import { QuoteCard } from "./QuoteCard";

interface DailyOrbData {
  quote: string;
  luckyColor: string;
  luckyNumber: number;
  date: string;
}

interface DailyOrbDialogProps {
  visible: boolean;
  onHide: () => void;
  data: DailyOrbData;
}

export function DailyOrbDialog({ visible, onHide, data }: DailyOrbDialogProps) {
  return (
    <Dialog
      visible={visible}
      onHide={onHide}
      header="Today's Magic"
      className="w-11/12 max-w-md"
      draggable={false}
      resizable={false}
      closeOnEscape
      closable
    >
      <QuoteCard
        quote={data.quote}
        luckyColor={data.luckyColor}
        luckyNumber={data.luckyNumber}
        date={data.date}
      />
    </Dialog>
  );
}
