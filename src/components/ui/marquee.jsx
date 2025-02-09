const Marquee = () => {
  const services = [
    "Web Development",
    "Android Development",
    "Custom Software Solutions",
    "UI/UX Design",
    "API Integration",
    "Cloud Computing",
    "IT Consulting",
    "Automation & AI Solutions",
  ];

  return (
    <div className="relative w-full bg-[#FF891D] py-2 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {services.map((service, index) => (
          <span
            key={index}
            className="text-white text-[1.5rem] uppercase font-semibold px-4"
          >
            {service}
          </span>
        ))}
        {/* Duplicate for seamless looping */}
        {services.map((service, index) => (
          <span
            key={`duplicate-${index}`}
            className="text-white text-[1.5rem] uppercase font-semibold px-4"
          >
            {service}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
