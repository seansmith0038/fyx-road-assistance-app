import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteVehicle as deleteVehicleApi } from "../../api/apiVehicles";

export const useDeleteVehicle = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteVehicle, isDeleting } = useMutation({
    mutationFn: (id) => deleteVehicleApi(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries("vehicles");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { deleteVehicle, isDeleting };
};
