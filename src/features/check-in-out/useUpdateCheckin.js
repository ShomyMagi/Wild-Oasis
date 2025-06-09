import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useUpdateCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),
    // data value received from returned data from async editBooking()
    onSuccess: (data) => {
      toast.success(`Booking ${data.id} successfully checked in!`);

      // queryClient.invalidateQueries({ queryKey: ["bookings"] });
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { checkin, isCheckingIn };
}
