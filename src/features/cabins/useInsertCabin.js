import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertCabin as insertCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useInsertCabin() {
  const queryClient = useQueryClient();

  const { mutate: insertCabin, isLoading: isInserting } = useMutation({
    // mutationFn: (newCabin) => insertCabinApi(newCabin),
    mutationFn: insertCabinApi,
    onSuccess: () => {
      toast.success("New cabin successfully created");

      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { insertCabin, isInserting };
}
