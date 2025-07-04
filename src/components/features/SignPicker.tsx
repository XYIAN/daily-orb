'use client';

import { Dropdown } from 'primereact/dropdown';
import { useState, useEffect } from 'react';
import { ZodiacSign } from '@/types';
import { ZODIAC_SIGNS } from '@/constants/zodiac';
import { setZodiacSign, getZodiacSign } from '@/utils/storage';

interface SignPickerProps {
  onSignChange?: (sign: string) => void;
  className?: string;
}

export function SignPicker({ onSignChange, className = '' }: SignPickerProps) {
  const [selectedSign, setSelectedSign] = useState<string>('');

  useEffect(() => {
    const savedSign = getZodiacSign();
    if (savedSign) {
      setSelectedSign(savedSign);
    }
  }, []);

  const handleSignChange = (value: string) => {
    setSelectedSign(value);
    setZodiacSign(value);
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
      <label className="block text-green-800 font-medium mb-2">Choose Your Zodiac Sign</label>
      <Dropdown
        value={selectedSign}
        onChange={e => handleSignChange(e.value)}
        options={ZODIAC_SIGNS}
        placeholder="Select your sign..."
        itemTemplate={itemTemplate}
        className="w-full"
        showClear
      />
    </div>
  );
}
