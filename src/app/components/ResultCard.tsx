export interface ResultCardProps {
  name: string;
  languages: string[];
  currency: string;
  timezones: string[];
  borders: string[];
}

export function ResultCard({ data }: { data: ResultCardProps }) {
  const { name, languages, currency, timezones } = data;

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{languages.join(", ")}</p>
      <p className="text-gray-600">{currency}</p>
      <p className="text-gray-600">{timezones.join(", ")}</p>
    </div>
  );
}
