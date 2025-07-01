import Button from "../../ui/Button";
import { useUpdateCheckout } from "./useUpdateCheckout";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useUpdateCheckout();

  return (
    <Button
      size="small"
      variation="primary"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
