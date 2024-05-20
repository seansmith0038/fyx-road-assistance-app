import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import { useRecord } from "../features/records/useRecord";
import useEditRecord from "../features/records/useEditRecord";

import Loader from "../ui/Loader";

const Service = () => {
  const { record, isLoading } = useRecord();
  const navigate = useNavigate();

  const [isProceed, setIsProceed] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  const { editRecord } = useEditRecord();

  if (isLoading) {
    return <Loader />;
  }

  const handleBack = () => {
    navigate(-1);
  };

  const handleProceed = () => {
    setIsProceed(true);
  };

  const handlePaymentMethod = (method) => {
    setPaymentMethod(method);
  };

  const handleConfirm = () => {
    editRecord({
      ...record,
      isCompleted: true,
      paymentMethod,
    });
  };

  return (
    <div className="relative flex h-full flex-col gap-8 p-4 text-teal-800">
      <div className="flex w-full items-center justify-between gap-4 text-teal-800">
        <LiaLongArrowAltLeftSolid
          onClick={handleBack}
          className="cursor-pointer text-3xl text-teal-800"
        />
        <h2 className="mx-auto text-lg font-normal">
          {record.title.charAt(0).toUpperCase() +
            record.title.slice(1).replace("-", " ")}
        </h2>
      </div>

      <div className="flex w-full flex-col gap-10">
        <div className="flex w-full items-center gap-4">
          <span className="h-14 w-14 min-w-12 rounded-full bg-teal-800"></span>
          <div className="flex flex-col gap-1">
            <span className="text-md font-semibold">Nexia 2</span>
            <span className="text-xs font-light">UZB-123</span>
          </div>
        </div>

        <div className="flex w-full items-center gap-4">
          <span className="h-14 w-14 min-w-12 rounded-full bg-teal-800"></span>
          <div className="flex flex-col gap-1">
            <span className="text-md font-semibold">Tashkent</span>
            <span className="text-xs font-light">Location</span>
          </div>
        </div>
        <div className="flex w-full items-center gap-4">
          <span className="h-14 w-14 min-w-12 rounded-full bg-teal-800"></span>
          <div className="flex flex-col gap-1">
            <span className="text-md font-semibold">Details</span>
            <p className="text-sm font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget nunc nec nunc.
            </p>
          </div>
        </div>
        <div className="flex w-full items-center gap-4">
          <span className="h-14 w-14 rounded-full bg-teal-800"></span>
          <div className="flex flex-col gap-1">
            <span className="text-md font-semibold">Roadside Assistance</span>
            <span className="text-sm font-light">Service</span>
          </div>
        </div>
        <div className="flex w-full items-center gap-4">
          <span className="h-14 w-14 rounded-full bg-teal-800"></span>
          <div className="flex flex-col gap-1">
            <span className="text-md font-semibold">Price</span>
            <span className="text-sm font-light">100,000 UZS</span>
          </div>
        </div>

        {record.isCompleted && (
          <div className="flex w-full items-center gap-4">
            <span className="h-14 w-14 rounded-full bg-teal-800"></span>
            <div className="flex flex-col gap-1">
              <span className="text-md font-semibold">Payment Method</span>
              <span className="text-sm font-light">
                {record.paymentMethod} | ${record.amount}
              </span>
            </div>
          </div>
        )}
      </div>

      {isProceed && (
        <div className="absolute left-0 top-14 z-10 flex h-fit w-full flex-col gap-10 bg-[#F7F7F7] p-4">
          <div className="h-14 w-full"></div>

          <div className="flex h-fit flex-col  gap-2 text-teal-800">
            <h2 className="text-lg font-light">Methods</h2>

            <div className="flex justify-between sm:justify-start sm:gap-4">
              <img
                src="/payment/payme.png"
                alt="Payme"
                className={`rounded-lg border bg-white ${
                  paymentMethod === "payme" ? "border-teal-800 shadow-lg" : ""
                }`}
                onClick={() => handlePaymentMethod("payme")}
              />
              <img
                src="/payment/click.png"
                alt="Click"
                className={`rounded-lg border bg-white ${
                  paymentMethod === "click" ? "border-teal-800 shadow-lg" : ""
                }`}
                onClick={() => handlePaymentMethod("click")}
              />
              <img
                src="/payment/humo.png"
                alt="humo"
                className={`rounded-lg border bg-white ${
                  paymentMethod === "humo" ? "border-teal-800 shadow-lg" : ""
                }`}
                onClick={() => handlePaymentMethod("humo")}
              />
            </div>
          </div>

          <div className="h-fit w-full rounded-lg bg-white">
            <div className="flex h-full w-full flex-col gap-4 p-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-md font-semibold">Payme</h3>
                <p className="text-sm font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam eget nunc nec nunc. Nullam eget nunc nec nunc. Blandit
                  vel, luctus pulvinar, hendrerit id, lorem. Nullam eget nunc
                  nec
                </p>
              </div>
              <span className="h-[1px] w-full bg-teal-100"></span>
              <div className="flex flex-col gap-2">
                <p className="text-md font-light">Service Price</p>
                <p className="text-xl font-semibold">100,000 UZS</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {!record.isCompleted && (
        <div className="fixed bottom-0 left-0 z-10 flex h-14 w-full items-center justify-between rounded-md bg-white p-4 sm:absolute">
          <button
            className="w-full rounded-lg bg-teal-700 px-4 py-2 text-white"
            type="button"
            onClick={isProceed ? handleConfirm : handleProceed}
          >
            {isProceed ? "Confirm" : "Pay for service"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Service;
