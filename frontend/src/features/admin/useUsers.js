import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../api/apiAdmin";

export function useUsers() {
  const {
    data: users,
    isLoading,
    error,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["admin-users"],
    queryFn: getUsers,
  });

  return { users, isLoading, error, isError, isSuccess };
}

