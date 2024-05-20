import React from "react";
import { useUsers } from "../../features/admin/useUsers";
import useRecords from "../../features/records/useRecords";
import { useVehicles } from "../../features/admin/useVehicles";

const Users = () => {
  const { users, isLoading } = useUsers();
  const { records, isRecordsLoading } = useRecords();
  const { vehicles, isVehiclesLoading } = useVehicles();

  if (isLoading || isRecordsLoading || isVehiclesLoading) {
    return <div>Loading...</div>;
  }

  const userVehicleCount = users.map((user) => ({
    id: user.id,
    vehicleCount: vehicles?.filter((v) => v.user === user.id).length,
  }));

  const userRecordsCount = users.map((user) => ({
    id: user.id,
    recordCount: records?.filter((r) => r.user === user.id).length,
  }));

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-normal">Users</h2>
      <div className="flex flex-col gap-4">
        <div className="flex h-fit flex-col gap-4 rounded-md bg-gray-50 p-2">
          {users?.map((user) => (
            <div
              key={user.id}
              className="flex gap-2 rounded-md bg-white p-2 py-4"
            >
              <img
                src="https://placehold.co/400"
                alt="user"
                className="h-10 w-10 rounded-full object-cover"
              />

              <div className="flex flex-col">
                <h3 className="text-lg font-normal">{user.name}</h3>
                <p className="text-sm text-gray-500">
                  {userVehicleCount.find((u) => u.id === user.id).vehicleCount}{" "}
                  vehicles | {" "}
                  {userRecordsCount.find((u) => u.id === user.id).recordCount}{" "}
                  records
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
