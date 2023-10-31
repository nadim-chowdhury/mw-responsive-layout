export default function OurCoreValuesCard({ title, desc, borderColor, mt }: any) {
  return (
    <div className={`bg-blue-50 p-4 rounded-md border-l-4 mx-4 md:mx-0 md:h-full ${mt} ${borderColor}`}>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
