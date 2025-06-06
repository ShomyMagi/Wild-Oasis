import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useEditCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      editBooking(bookingId, {
        status: "checked-out",
      }),
    // data value received from returned data from async editBooking()
    onSuccess: (data) => {
      toast.success(`Booking ${data.id} successfully checked out!`);

      // queryClient.invalidateQueries({ queryKey: ["bookings"] });
      queryClient.invalidateQueries({ active: true });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isCheckingOut, checkout };
}
