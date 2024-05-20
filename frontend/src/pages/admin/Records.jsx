import React from "react";
import { useUsers } from "../../features/admin/useUsers";
import { LiaTrashAlt } from "react-icons/lia";
import { useDeleteRecord } from "../../features/admin/useDeleteRecord";
import useRecords from "../../features/admin/useRecords";

const Records = () => {
  const { users, isLoading } = useUsers();
  const { records, isRecordsLoading } = useRecords();
  const { deleteRecord, isDeleting } = useDeleteRecord();

  if (isRecordsLoading || isLoading || isDeleting) {
    return <div>Loading...</div>;
  }

  const recordUser = records?.map((record) => ({
    id: record.id,
    user: users?.find((user) => user.id === record.user),
  }));

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-normal">Records</h2>
      <div className="flex flex-col gap-4">
        <div className="flex h-fit flex-col gap-4 rounded-md bg-gray-50 p-2">
          {records?.map((record) => (
            <div
              className="relative flex flex-col gap-3 rounded-md bg-white p-2 py-4"
              key={record.id}
            >
              <LiaTrashAlt
                className="absolute right-2 top-2 text-3xl text-red-500"
                onClick={() => deleteRecord(record.id)}
              />

              <div key={record.id} className="flex gap-2 rounded-md bg-white">
                <img
                  src={record.image}
                  alt="record"
                  className="h-8 w-8 rounded-full object-cover"
                />

                <h3 className="text-lg font-normal">{record.title}</h3>
              </div>
              <span className="h-[1px] w-full bg-gray-200"></span>

              <div className="text-md flex w-full justify-between text-gray-500">
                <div>
                  <p>User: {recordUser.find((r) => r.id === record.id).user?.name}</p>
                  <p>Details: {record.details}</p>
                  <p>Amount: {record.amount}</p>
                  <p>PaymentMethod: {record.paymentMethod}</p>
                  <p>Is completed: {record.isCompleted ? "Yes" : "No"}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Records;
