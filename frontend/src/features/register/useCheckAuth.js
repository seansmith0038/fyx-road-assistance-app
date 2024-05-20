import { useQuery } from "@tanstack/react-query";
import { apiCheckAuth } from "../../api/apiAuth";

export function useCheckAuth() {
  const {
    data: user,
    isLoading,
    error,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["user"],
    queryFn: apiCheckAuth,
  });

  return { user, isLoading, error, isError, isSuccess };
}
