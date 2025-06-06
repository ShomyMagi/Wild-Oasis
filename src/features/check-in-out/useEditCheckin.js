import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editBooking } from "../../services/apiBookings";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useEditCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      editBooking(bookingId, {
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

  return { isCheckingIn, checkin };
}
