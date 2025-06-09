import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logout as logoutApi } from "../../services/apiAuth";

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isLoading: isLoggingOut } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      // Manually removing cached data(that was manually set during login) from react query cache
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoggingOut };
}
