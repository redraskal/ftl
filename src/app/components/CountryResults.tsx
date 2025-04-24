import type { CountryResult } from "../utils/country";
import { CountryCard, type CountryCardProps } from "./CountryCard";

export function CountryResults({ countries }: { countries: CountryResult[] }) {
  return (
    <div className="grid grid-cols-2 gap-2 gap-y-20 rounded-[20px] bg-[#D9D9D9] px-10 py-35">
      {countries.map((country) => {
        const data: CountryCardProps = {
          name: country.name.common,
          languages: Object.values(country.languages),
          currency: Object.values(country.currencies)?.[0]?.name ?? "Unknown",
          timezones: country.timezones,
          borders: country.borders ?? [],
        };

        return <CountryCard data={data} key={country.name.common} />;
      })}
    </div>
  );
}
