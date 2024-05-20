import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createRecord } from "../../api/apiRecords";

const useCreateBooking = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationFn: createRecord,
    onSuccess: (data) => {
      queryClient.invalidateQueries("records");

      navigate("/services");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { createBooking: mutate, isLoading };
};

export default useCreateBooking;
