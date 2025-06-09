import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiAuth";

export function useUser() {
  const {
    data: user,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  const isAuthenticated = user?.role === "authenticated";

  return {
    isLoading,
    isFetching,
    isAuthenticated,
  };
}
