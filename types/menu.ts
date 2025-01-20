import { ReactNode } from "react";

export type Menu = {
  id: number;
  title: string;
  path?: string;
  description?: string;
  newTab: boolean;
  megamenu?: boolean; // Optional, only for items with megamenu
  submenu?: Menu[];   // Nested structure for dropdown or megamenu
  icon?: any;    // Optional icon for the menu item
};