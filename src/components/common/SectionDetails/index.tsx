interface Section {
  title: string;
  description: string;
}

export default function SectionDetails({ title, description }: Section) {
  return (
    <div className="flex flex-col my-14 px-4 md:px-0">
      <div className="text-center text-2xl md:text-4xl font-bold pb-2">{title}</div>
      <p className="text-center text-base text-slate-700">{description}</p>
    </div>
  );
}
