function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg hover:shadow-slate-200/50">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-[#0F766E] transition group-hover:bg-[#0F766E] group-hover:text-white">
        <Icon size={23} strokeWidth={1.8} />
      </div>

      <h3 className="mt-5 text-lg font-bold text-[#123B4A]">
        {service.title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {service.description}
      </p>
    </div>
  );
}

export default ServiceCard;