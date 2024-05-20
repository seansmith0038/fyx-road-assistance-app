import { NavLink } from "react-router-dom";

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

const Services = () => {
  return (
    <div className="flex h-fit flex-col gap-2 text-teal-800">
      <h2 className="text-md font-normal">Book a Service</h2>

      <div className="grid h-full grid-cols-2 gap-4">
        {services.map((service, i) => (
          <NavLink
            key={i}
            className="flex h-40 flex-col items-center justify-between rounded-lg border p-4"
            to={`/services/${service.id}/new`}
          >
            <img src={service.icon} className="h-20 w-20" alt={service.name} />
            <h3 className="text-sm font-normal">{service.name}</h3>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Services;
