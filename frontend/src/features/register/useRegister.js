import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { apiRegister } from "../../api/apiAuth";
import toast from "react-hot-toast";

const useRegister = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    mutate: register,
    status,
    error,
  } = useMutation({
    mutationFn: ({ username, password }) => apiRegister(username, password),
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);

      toast.success("Registered successfully");

      navigate("/");
    },
    onError: (error) => {
      toast.error("Something went wrong");
    },
  });

  const isLoading = status === "pending";

  return { register, isLoading, error };
};

export default useRegister;
