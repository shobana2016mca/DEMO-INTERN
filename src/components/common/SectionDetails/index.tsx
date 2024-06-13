interface Section {
  title: string;
  description: string;
}

export default function SectionDetails({ title, description }: Section) {
  return (
    <div className="flex flex-col my-14">
      <div className="text-center text-4xl font-bold pb-2">{title}</div>
      <p className="text-center text-base text-stone-700">{description}</p>
    </div>
  );
}
