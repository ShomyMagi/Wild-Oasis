import { HiOutlineLogout } from "react-icons/hi";
import { useLogout } from "./useLogout";
import ButtonIcon from "../../ui/ButtonIcon";
import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
  const { logout, isLoggingOut } = useLogout();

  return (
    <ButtonIcon disabled={isLoggingOut} onClick={logout}>
      {!isLoggingOut ? <HiOutlineLogout /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
