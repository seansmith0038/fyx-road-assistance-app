import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createVehicle } from "../../api/apiVehicles";
import { useNavigate } from "react-router-dom";

const useCreateVehicle = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationFn: createVehicle,
    onSuccess: (data) => {
      queryClient.invalidateQueries("vehicles");

      navigate("/myvehicles");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { createVehicle: mutate, isLoading };
};

export default useCreateVehicle;
