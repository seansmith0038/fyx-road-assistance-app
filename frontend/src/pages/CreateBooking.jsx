import { useNavigate, useParams } from "react-router-dom";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";

const services = [
  {
    id: "1",
    name: "Roadside Assistance",
    icon: "/services/roadside-assistance.png",
  },
  {
    id: "2",
    name: "Part Service",
    icon: "/services/part-service.png",
  },
  {
    id: "3",
    name: "Washing Service",
    icon: "/services/washing-service.png",
  },
  {
    id: "4",
    name: "Towing Service",
    icon: "/services/towing-service.png",
  },
];

import CreateServiceForm from "../features/booking/CreateServiceForm";

const CreateBooking = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleBack = () => {
    navigate(-1);
  };

  if (!id) {
    navigate("/services");
  }

  const service = services.find((service) => service.id === id);

  return (
    <div className="relative flex h-full max-w-full flex-col gap-8 p-4 text-teal-800">
      <div className="flex w-full items-center justify-between gap-4">
        <LiaLongArrowAltLeftSolid
          onClick={handleBack}
          className="cursor-pointer text-3xl text-teal-800"
        />
        <h2 className="mx-auto text-lg font-normal">{service.name}</h2>
      </div>

      <CreateServiceForm serviceTitle={service.name} />
    </div>
  );
};

export default CreateBooking;
