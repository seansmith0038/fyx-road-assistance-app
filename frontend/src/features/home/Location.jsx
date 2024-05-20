import Demo from "../../ui/GeoLocation";
import { NavLink } from "react-router-dom";

const Location = () => {
  return (
    <div className="flex items-center justify-between rounded-md bg-teal-50 p-4">
      <div className="flex w-2/3 flex-col gap-2">
        <h1 className="text-md font-light text-teal-900">
          Get services from <br />
          your location
        </h1>
        <NavLink
          to="/mylocation"
          className="w-fit rounded-full bg-teal-700 px-4 py-1 text-sm text-white"
        >
          Pin your location
        </NavLink>
      </div>

      <Demo />
    </div>
  );
};

export default Location;
