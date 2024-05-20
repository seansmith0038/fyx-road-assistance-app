import { useQuery } from "@tanstack/react-query";
import { getRecords } from "../../api/apiRecords";

export function useRecords() {
  const {
    data: records,
    isLoading,
    error,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["records"],
    queryFn: getRecords,
  });

  return { records, isLoading, error, isError, isSuccess };
}

export default useRecords;
