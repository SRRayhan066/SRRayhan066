export default function ExperienceCard({
  isLast,
  data,
}: {
  isLast: boolean;
  data: {
    title: string;
    company: string;
    duration: string;
  };
}) {
  const { title, company, duration } = data;
  return (
    <div className="w-full flex gap-2">
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full border-2 border-neutral-700 shrink-0" />
        {!isLast && <div className="flex-1 w-px bg-neutral-700" />}
      </div>
      <div className="flex flex-col gap-3 gradient-card rounded-lg p-4 w-full mb-2">
        <h3 className="text-lg font-semibold leading-none">{title}</h3>
        <p className="leading-none text-md">{company}</p>
        <p className="leading-none text-sm">{duration}</p>
      </div>
    </div>
  );
}
