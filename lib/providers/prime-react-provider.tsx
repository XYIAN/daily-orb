"use client";

import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-green/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import { ReactNode } from "react";

interface PrimeProviderProps {
  children: ReactNode;
}

export function PrimeProvider({ children }: PrimeProviderProps) {
  return <PrimeReactProvider>{children}</PrimeReactProvider>;
}
