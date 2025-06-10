import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading: isLoggingin } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      // (Optional) Manually setting/caching data into react query cache
      queryClient.setQueryData(["user"], data.user);
      navigate("/", { replace: true });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { login, isLoggingin };
}
