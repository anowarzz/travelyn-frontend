import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const Bookings = lazy(() => import("@/pages/User/Bookings"));

export const userSidebarItems: ISidebarItem[] = [
  {
    title: "History",
    items: [
      {
        title: "Bookings",
        url: "/user/bookings",
        Component: Bookings,
      },
    ],
  },
];
