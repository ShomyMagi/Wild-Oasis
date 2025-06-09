import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { mutate: deleteCabin, isLoading: isDeleting } = useMutation({
    // mutationFn: (id) => deleteCabin(id),
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success("Cabin successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteCabin, isDeleting };
}
