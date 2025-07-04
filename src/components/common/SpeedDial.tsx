"use client";

import { SpeedDial as PrimeSpeedDial } from "primereact/speeddial";
import { useRouter } from "next/navigation";
import { MenuItem } from "primereact/menuitem";

export function SpeedDial() {
  const router = useRouter();

  const items: MenuItem[] = [
    {
      label: "Daily Orb",
      icon: "pi pi-home",
      command: () => router.push("/"),
    },
    {
      label: "Your Sign",
      icon: "pi pi-star",
      command: () => router.push("/your-sign"),
    },
    {
      label: "Archive",
      icon: "pi pi-calendar",
      command: () => router.push("/archive"),
    },
    {
      label: "About",
      icon: "pi pi-info-circle",
      command: () => router.push("/about"),
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <PrimeSpeedDial
        model={items}
        direction="up"
        showIcon="pi pi-bars"
        hideIcon="pi pi-times"
        buttonClassName="p-button-success"
      />
    </div>
  );
}
