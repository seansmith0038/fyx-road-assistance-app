import React from "react";
import { useForm } from "react-hook-form";

import useCreateVehicle from "../features/vehicles/useCreateVehicle";
import GoBack from "../ui/GoBack";

const getRandomElement = (array) =>
  array[Math.floor(Math.random() * array.length)];

const randomModel = () =>
  getRandomElement(["Nexia", "Cobalt", "Gentra", "Spark"]);

const randomColor = () =>
  getRandomElement(["White", "Black", "Red", "Blue", "Green"]);

const randomYear = () => Math.floor(Math.random() * (2022 - 2000) + 2000);

const randomLicensePlate = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const randomLetter = () =>
    letters.charAt(Math.floor(Math.random() * letters.length));
  const randomNumber = () =>
    numbers.charAt(Math.floor(Math.random() * numbers.length));
  return `${randomLetter()}${randomLetter()}${randomLetter()}${randomNumber()}${randomNumber()}${randomNumber()}`;
};

const modelToImage = {
  nexia: "nexia.png",
  cobalt: "cobalt.png",
  gentra: "gentra.png",
  spark: "spark.png",
};

const randomCar = () => {
  const model = randomModel().toLowerCase();
  return {
    brand: "Daewoo",
    model: model,
    color: randomColor(),
    year: randomYear(),
    licensePlate: randomLicensePlate(),
    image: `/vehicles/${modelToImage[model]}`,
  };
};

const CreateVehicle = () => {
  const { isLoading, createVehicle } = useCreateVehicle();

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {
      ...randomCar(),
    },
  });

  const { errors } = formState;

  const onSubmit = (data) => {
    createVehicle(data);
    reset();
  };

  return (
    <div className="relative flex h-[100dvh] flex-col gap-2 px-4 py-4">
      <GoBack title="Add a Vehicle" />

      <form
        method="POST"
        className="my-auto flex flex-col gap-4 text-teal-800"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="brand">Brand</label>
          <input
            type="text"
            id="brand"
            name="brand"
            placeholder="Brand"
            defaultValue="Daewoo"
            className="rounded-lg bg-teal-50 p-2"
            {...register("brand", { required: "Brand is required" })}
          />

          {errors.brand && (
            <span className="text-sm text-red-500">{errors.brand.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="model">Model</label>
          <input
            type="text"
            id="model"
            name="model"
            placeholder="Model"
            defaultValue={randomModel()}
            className="rounded-lg bg-teal-50 p-2"
            {...register("model", { required: "Model is required" })}
          />

          {errors.model && (
            <span className="text-sm text-red-500">{errors.model.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="color">Color</label>
          <input
            type="text"
            id="color"
            name="color"
            placeholder="Color"
            defaultValue="White"
            className="rounded-lg bg-teal-50 p-2"
            {...register("color", { required: "Color is required" })}
          />

          {errors.color && (
            <span className="text-sm text-red-500">{errors.color.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="year">Year</label>
          <input
            type="number"
            min="1900"
            max="2099"
            step="1"
            defaultValue="2018"
            id="year"
            name="year"
            placeholder="Year"
            className="rounded-lg bg-teal-50 p-2"
            {...register("year", { required: "Year is required" })}
          />

          {errors.year && (
            <span className="text-sm text-red-500">{errors.year.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="licensePlate">License Plate</label>
          <input
            type="text"
            id="licensePlate"
            name="licensePlate"
            placeholder="License Plate"
            defaultValue="ABC123"
            className="rounded-lg bg-teal-50 p-2"
            {...register("licensePlate", {
              required: "License Plate is required",
            })}
          />

          {errors.licensePlate && (
            <span className="text-sm text-red-500">
              {errors.licensePlate.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="ml-auto w-fit rounded-lg bg-teal-800 px-4 py-2 text-teal-100"
        >
          {isLoading ? "Adding..." : "Add Vehicle"}
        </button>
      </form>
    </div>
  );
};

export default CreateVehicle;
