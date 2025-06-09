import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signout, isLoading: isLoggingOut } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      // Manually removing cached data(that was manually set during login) from react query cache
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });

  return { signout, isLoggingOut };
}
