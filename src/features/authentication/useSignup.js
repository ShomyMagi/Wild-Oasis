import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading: isSingingup } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success(
        "Account successfully created. Please verify the new account from new user's address."
      );
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { signup, isSingingup };
}
