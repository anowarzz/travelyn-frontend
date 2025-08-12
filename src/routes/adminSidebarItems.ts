import AddTour from "@/pages/Admin/AddTour";
import Analytics from "@/pages/Admin/Analytics";
import type { ISidebarItem } from "@/types";

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        Component: Analytics,
      },
    ],
  },
  {
    title: "Tour Management",
    items: [
      {
        title: "Add Tour",
        url: "/admin/add-tour",
        Component: AddTour,
      },
      {
        title: "Add Tour Type",
        url: "/admin/add-tour",
        Component: AddTour,
      },
      {
        title: "New World",
        url: "/admin/add-tour",
        Component: AddTour,
      },
    ],
  },
];
