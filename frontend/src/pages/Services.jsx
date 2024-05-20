import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useRecords from "../features/records/useRecords";

import Loader from "../ui/Loader";
import Header from "../features/home/Header";
import Search from "../features/home/Search";

const Services = () => {
  const { records, isLoading, isError } = useRecords();
  const [search, setSearch] = useState("");

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  const filteredRecords = records?.filter((record) =>
    record.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex flex-col gap-6 px-4 py-4">
      <Header />
      <Search search={search} setSearch={setSearch} />

      <div className="flex flex-col gap-4 text-teal-800">
        <h2 className="text-md font-normal">Services</h2>

        <div className="flex flex-col gap-4">
          {filteredRecords?.map((record, i) => (
            <NavLink
              key={i}
              to={`/services/${record.id}`}
              className="h-30 relative flex items-center gap-4 rounded-lg p-2 shadow-md"
            >
              <img
                src={record.image}
                className="h-14 rounded-md border"
                alt={record.name}
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">
                  {record.title.charAt(0).toUpperCase() +
                    record.title.slice(1).replace("-", " ")}
                </h3>
                <div className="flex gap-1">
                  {record.vehicle ? (
                    <>
                      <p className="text-xs font-normal">
                        {record.vehicle.model}
                      </p>
                      <span className="text-xs font-normal">|</span>
                      <p className="text-xs font-normal">
                        {record.vehicle.year}
                      </p>
                      <span className="text-xs font-normal">|</span>
                      <p className="text-xs font-normal">
                        {record.vehicle.model}
                      </p>
                    </>
                  ) : (
                    <p className="text-xs font-normal">
                      Vehicle has been removed
                    </p>
                  )}
                </div>
              </div>
              <div className="absolute right-2 top-0">
                {record.isCompleted ? (
                  <span className="bg-teal-50 px-2 py-1 text-xs font-semibold text-green-500">
                    Completed
                  </span>
                ) : (
                  <span className="bg-teal-50 px-2 py-1 text-xs font-semibold text-red-500">
                    Pending
                  </span>
                )}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
