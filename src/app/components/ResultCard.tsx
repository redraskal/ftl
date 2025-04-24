import Image from "next/image";

export interface ResultCardProps {
  name: string;
  languages: string[];
  currency: string;
  timezones: string[];
  borders: string[];
}

export function ResultCard({ data }: { data: ResultCardProps }) {
  const { name, languages, currency, timezones, borders } = data;

  return (
    <div className="flex flex-row justify-center gap-3 rounded-[20px] bg-[#1E97C3] p-2">
      <div className="mt-8">
        <div className="h-[52px] w-[57px] rounded-[10px] bg-[#1F0AD9]"></div>
      </div>
      <div className="text-xl font-bold">
        <p>{name}</p>
        <p>Languages: {languages.join(", ")}</p>
        <p>Currency: {currency}</p>
        <p>Timezones: {timezones.join(", ")}</p>
        <p>Borders: {borders.join(", ")}</p>
      </div>
    </div>
  );
}
