import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useInsertCabin() {
  const queryClient = useQueryClient();

  const { mutate: insertCabin, isLoading: isInserting } = useMutation({
    // mutationFn: (newCabin) => createCabin(newCabin),
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created");

      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isInserting, insertCabin };
}
