import { useQuery } from "@tanstack/react-query";
import { getVehicles } from "../../api/apiAdmin";

export function useVehicles() {
  const {
    data: vehicles,
    isVehiclesLoading,
    error,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["admin-vehicles"],
    queryFn: getVehicles,
  });

  return { vehicles, isVehiclesLoading, error, isError, isSuccess };
}
