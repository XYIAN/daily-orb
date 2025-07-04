"use client";

import { Menubar } from "primereact/menubar";
import { useRouter } from "next/navigation";
import { MenuItem } from "primereact/menuitem";

export function Navbar() {
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-green-600 shadow-lg">
      <Menubar
        model={items}
        className="border-none bg-transparent"
        start={
          <div className="flex items-center text-white font-bold text-lg px-4">
            <i className="pi pi-circle-fill mr-2 text-green-300" />
            Daily Orb
          </div>
        }
      />
    </nav>
  );
}
