import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editSetting } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useEditSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isEditing } = useMutation({
    mutationFn: editSetting,
    onSuccess: () => {
      toast.success("Setting successfully edited");

      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, updateSetting };
}
