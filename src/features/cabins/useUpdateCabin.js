import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCabin as updateCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useUpdateCabin() {
  const queryClient = useQueryClient();

  const { mutate: updateCabin, isLoading: isUpdating } = useMutation({
    // mutationFn: ({ newCabinData, id }) => updateCabinApi(newCabinData, id),
    mutationFn: updateCabinApi,
    onSuccess: () => {
      toast.success("Cabin successfully updated");

      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateCabin, isUpdating };
}
