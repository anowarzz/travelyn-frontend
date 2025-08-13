import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import type { TRole } from "@/types";
import type { ComponentType } from "react";
import { Navigate } from "react-router";

// check authorization
export const withAuths = (
  Component: ComponentType,
  ...requiredRole: TRole[]
) => {
  return function AuthWrapper() {
    const { data, isLoading } = useUserInfoQuery(undefined);

    if (!isLoading && !data?.data?.email) {
      return <Navigate to="/login" />;
    }

    if (
      requiredRole.length > 0 &&
      !isLoading &&
      !requiredRole.includes(data?.data?.role)
    ) {
      return <Navigate to="/unauthorized" />;
    }

    console.log("inside with auth", data);

    return <Component />;
  };
};
