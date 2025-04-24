"use client";

import { SearchBar } from "./components/SearchBar";
import { useEffect, useState } from "react";

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
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-black">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="bg-[#D9D9D9] px-34 py-4 text-4xl font-bold tracking-tight text-[#1F0AD9]">
          Countries Info Explorer
        </h1>
        <form onSubmit={handleSearch}>
          <SearchBar query={query} setQuery={setQuery} autoFocus />
        </form>
        <div className="bg-teal-500">
          {searchResults.map((result, i) => (
            <div key={i}>
              <h2>{result.name.common}</h2>
              <p>{Object.values(result.languages).join(",")}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
