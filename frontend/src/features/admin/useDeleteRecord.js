import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteRecord as deleteRecordApi } from "../../api/apiAdmin";

export const useDeleteRecord = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteRecord, isDeleting } = useMutation({
    mutationFn: (id) => deleteRecordApi(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries("admin-records");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { deleteRecord, isDeleting };
};
