"use client";

import { Dropdown } from "primereact/dropdown";
import { useState, useEffect } from "react";

interface ZodiacSign {
  label: string;
  value: string;
  icon: string;
}

const zodiacSigns: ZodiacSign[] = [
  { label: "Aries", value: "aries", icon: "pi pi-star" },
  { label: "Taurus", value: "taurus", icon: "pi pi-circle" },
  { label: "Gemini", value: "gemini", icon: "pi pi-star-fill" },
  { label: "Cancer", value: "cancer", icon: "pi pi-circle-fill" },
  { label: "Leo", value: "leo", icon: "pi pi-sun" },
  { label: "Virgo", value: "virgo", icon: "pi pi-heart" },
  { label: "Libra", value: "libra", icon: "pi pi-balance-scale" },
  { label: "Scorpio", value: "scorpio", icon: "pi pi-bolt" },
  { label: "Sagittarius", value: "sagittarius", icon: "pi pi-arrow-up" },
  { label: "Capricorn", value: "capricorn", icon: "pi pi-mountain" },
  { label: "Aquarius", value: "aquarius", icon: "pi pi-cloud" },
  { label: "Pisces", value: "pisces", icon: "pi pi-fish" },
];

interface SignPickerProps {
  onSignChange?: (sign: string) => void;
  className?: string;
}

export function SignPicker({ onSignChange, className = "" }: SignPickerProps) {
  const [selectedSign, setSelectedSign] = useState<string>("");

  useEffect(() => {
    const savedSign = localStorage.getItem("zodiacSign");
    if (savedSign) {
      setSelectedSign(savedSign);
    }
  }, []);

  const handleSignChange = (value: string) => {
    setSelectedSign(value);
    localStorage.setItem("zodiacSign", value);
    onSignChange?.(value);
  };

  const itemTemplate = (option: ZodiacSign) => (
    <div className="flex items-center">
      <i className={`${option.icon} mr-2 text-green-600`} />
      <span>{option.label}</span>
    </div>
  );

  return (
    <div className={`max-w-md mx-auto ${className}`}>
      <label className="block text-green-800 font-medium mb-2">
        Choose Your Zodiac Sign
      </label>
      <Dropdown
        value={selectedSign}
        onChange={(e) => handleSignChange(e.value)}
        options={zodiacSigns}
        placeholder="Select your sign..."
        itemTemplate={itemTemplate}
        className="w-full"
        showClear
      />
    </div>
  );
}
