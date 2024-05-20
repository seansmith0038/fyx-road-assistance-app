import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { apiLogout } from "../../api/apiAuth";

const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    mutate: logout,
    status,
    error,
  } = useMutation({
    mutationFn: apiLogout,
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);

      navigate("/login");
    },
    onError: (error) => {
      console.log("error", error);
    },
  });

  const isLoading = status === "pending";

  return { logout, isLoading, error };
};

export default useLogout;
