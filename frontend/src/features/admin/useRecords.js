import { useQuery } from "@tanstack/react-query";
import { getRecords } from "../../api/apiAdmin";

export function useRecords() {
  const {
    data: records,
    isRecordsLoading,
    error,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["admin-records"],
    queryFn: getRecords,
  });

  return { records, isRecordsLoading, error, isError, isSuccess };
}

export default useRecords;
