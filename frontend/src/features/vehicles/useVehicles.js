import { useQuery } from "@tanstack/react-query";
import { getVehicles } from "../../api/apiVehicles";

export function useVehicles() {
  const {
    data: vehicles,
    isLoading,
    error,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["vehicles"],
    queryFn: getVehicles,
  });

  return { vehicles, isLoading, error, isError, isSuccess };
}
