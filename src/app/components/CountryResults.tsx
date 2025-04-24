import type { CountryResult } from "../utils/country";
import { CountryCard, type CountryCardProps } from "./CountryCard";

export function CountryResults({ countries }: { countries: CountryResult[] }) {
  return (
    <div className="grid gap-2 gap-y-20 rounded-[20px] bg-[#D9D9D9] px-10 py-35 sm:grid-cols-1 md:grid-cols-2">
      {countries.map((country) => {
        const [currencyCode, { name: currencyName } = {}] =
          Object.entries(country.currencies ?? {})[0] ?? [];

        const data: CountryCardProps = {
          name: country.name.common,
          flag: country.flag,
          languages: Object.values(country.languages),
          currency: currencyCode
            ? `${currencyName} (${currencyCode})`
            : "Unknown",
          timezones: country.timezones,
          borders: country.borders ?? [],
        };

        return <CountryCard data={data} key={country.name.common} />;
      })}
    </div>
  );
}
