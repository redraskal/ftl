"use client";

import Image from "next/image";
import { SearchBar } from "./components/SearchBar";
import { useEffect, useState } from "react";
import { ResultCard, type ResultCardProps } from "./components/ResultCard";

type CountryResult = {
  name: {
    common: string;
  };
  languages: Record<string, string>;
  currencies: Record<
    string,
    {
      name: string;
    }
  >;
  timezones: string[];
  borders: string[];
};

export default function Home() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<CountryResult[]>([]);

  function search() {
    const url = `https://restcountries.com/v3.1/${query ? "name/" + query : "region/europe"}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSearchResults(data as CountryResult[]))
      .catch((err) => console.error(err));
  }

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    search();
  }

  useEffect(() => {
    search();
  }, [setSearchResults]);

  return (
    <main className="flex min-h-screen bg-white text-black">
      <div>
        <Image src="/globe.png" alt="Globe" width={360} height={427} />
      </div>
      <div className="container flex flex-col items-center gap-12 py-3">
        <h1 className="w-full bg-[#D9D9D9] px-34 py-4 text-center text-4xl font-bold tracking-tight text-[#1F0AD9]">
          Countries Info Explorer
        </h1>
        <form onSubmit={handleSearch} className="w-full">
          <SearchBar query={query} setQuery={setQuery} autoFocus />
        </form>
        <div className="grid grid-cols-2 gap-2 gap-y-20 rounded-[20px] bg-[#D9D9D9] px-10 py-35">
          {searchResults.map((result) => {
            const data: ResultCardProps = {
              name: result.name.common,
              languages: Object.values(result.languages),
              currency:
                Object.values(result.currencies)?.[0]?.name || "Unknown",
              timezones: result.timezones,
              borders: result.borders || [],
            };

            return <ResultCard data={data} key={result.name.common} />;
          })}
        </div>
      </div>
      <div>
        <Image src="/globe.png" alt="Globe" width={360} height={427} />
      </div>
    </main>
  );
}
