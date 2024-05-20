import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useVehicles } from "../vehicles/useVehicles";

import Loader from "../../ui/Loader";
import useCreateBooking from "../records/useBooking";
import ConfirmLocationPage from "./ConfirmLocationPage";

const CreateServiceForm = ({ serviceTitle }) => {
  const { createBooking } = useCreateBooking();

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {
      vehicle: "",
      details: "",
    },
  });
  const { errors } = formState;

  const { vehicles, isLoading } = useVehicles();

  const [coords, setCoords] = useState([41.311081, 69.240562]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isLocationPage, setIsLocationPage] = useState(false);

  if (isLoading) {
    return <Loader />;
  }

  const onSubmit = (data) => {
    const service = {
      vehicle: vehicles.find((vehicle) => vehicle.id === data.vehicle).id,
      details: data.details,
      location: coords,
      title: serviceTitle.toLowerCase().replace(" ", "-"),
      amount: String(Math.floor(Math.random() * 1000)),
      isCompleted: false,
      image: `/services/${serviceTitle.toLowerCase().replace(" ", "-")}.png`,
      paymentMethod: "humo",
    };

    createBooking(service);
    reset();
  };

  const renderVehicleLabels = () => {
    return vehicles.map((vehicle, index) => (
      <label
        key={index}
        className={`flex w-40 min-w-40 flex-col items-center justify-between rounded-lg border p-2 
          ${selectedVehicle?.id === vehicle.id ? "border-2 border-green-800 shadow-lg" : ""}`}
        onClick={() => setSelectedVehicle(vehicle)}
      >
        <input
          type="radio"
          name="vehicle"
          value={vehicle.id}
          {...register("vehicle", { required: "Vehicle is required" })}
          className="hidden"
        />
        <img src={vehicle.image} className="h-12" alt={vehicle.name} />
      </label>
    ));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative h-full w-full">
      <div className="flex flex-col gap-8 p-4">
        {/* Select Vehicles */}
        <div className="flex flex-col gap-2 text-teal-800">
          <h2 className="text-md font-normal">Select a Vehicle</h2>
          <div className="flex w-full gap-4 overflow-x-scroll">
            {renderVehicleLabels()}
          </div>
          <span className="text-sm text-red-500">
            {errors?.vehicle?.message}
          </span>

          {vehicles.length === 0 && (
            <NavLink
              to="/myvehicles/new"
              className="w-fit rounded-lg border border-teal-700 bg-teal-50 px-4 py-1 text-sm text-teal-700"
            >
              Add a new vehicle
            </NavLink>
          )}
        </div>

        {/* Confirm Location */}
        <div className="flex justify-between rounded-lg bg-teal-50 px-2 py-4">
          <h1 className="text-md font-light text-teal-900">
            Get services from <br />
            your location
          </h1>
          <button
            className="w-fit rounded-full bg-teal-700 px-4 py-1 text-sm text-white"
            onClick={() => setIsLocationPage(true)}
            type="button"
          >
            Pin your location
          </button>
        </div>

        {isLocationPage && (
          <ConfirmLocationPage coords={coords} setCoords={setCoords} />
        )}

        {/* Details */}
        <div className="flex flex-col gap-2 text-teal-800">
          <h2 className="text-md font-normal">
            Are there any further details you would like to pass on to your
            service provider?
          </h2>
          <textarea
            className=" rounded-lg bg-teal-50 p-2"
            placeholder="Write something here..."
            rows="6"
            {...register("details", { required: "Details are required" })}
          />
          <span className="text-sm text-red-500">
            {errors?.details?.message}
          </span>
        </div>
      </div>

      <div className="h-14 w-full"></div>

      <div className="absolute bottom-0 left-0 z-10 flex h-14 w-full items-center justify-between rounded-md bg-white p-4 shadow-4xl">
        {isLocationPage ? (
          <button
            className="w-full rounded-lg bg-teal-700 px-4 py-2 text-white"
            type="button"
            onClick={() => setIsLocationPage(false)}
          >
            Confirm Location
          </button>
        ) : (
          <button
            className="w-full rounded-lg bg-teal-700 px-4 py-2 text-white"
            type="submit"
          >
            Proceed
          </button>
        )}
      </div>
    </form>
  );
};

export default CreateServiceForm;
