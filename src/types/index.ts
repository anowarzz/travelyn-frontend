import type { ComponentType } from "react";

export * from "./auth.type";

export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    Component: ComponentType;
  }[];
}

export type TRole = "SUPER_ADMIN" | "ADMIN" | "USER" | "GUIDE";

export interface ITourType {
  name: string;
  _id: string;
}

export interface IDivision {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  thumbnail: string;
}
