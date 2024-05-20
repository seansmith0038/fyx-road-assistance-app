import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createEditRecord } from "../../api/apiRecords";

const useEditRecord = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationFn: createEditRecord,
    onSuccess: (data) => {
      queryClient.invalidateQueries("records");

      navigate("/services");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { editRecord: mutate, isLoading };
};

export default useEditRecord;
