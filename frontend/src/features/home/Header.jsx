import { LiaMapPinSolid } from "react-icons/lia";
import useLogout from "../register/useLogout";

const Header = () => {
  const { isLoading, logout } = useLogout();

  return (
    <div className="flex h-fit items-center justify-between text-gray-900">
      <button
        className="rounded-lg bg-teal-800 px-2 py-1 text-teal-100"
        onClick={logout}
      >
        {isLoading ? "Logging out..." : "Logout"}
      </button>
      <div className="ml-4 flex items-center justify-center rounded-md bg-teal-100 p-1 pr-2 font-bold">
        <LiaMapPinSolid className="text-xl" />
        <span className="text-sm font-normal">Tashkent</span>
      </div>
    </div>
  );
};

export default Header;
