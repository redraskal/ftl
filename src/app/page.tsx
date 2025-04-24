"use client";

import Image from "next/image";
import { SearchBar } from "./components/SearchBar";
import { useEffect, useState } from "react";
import { CountryResults } from "./components/CountryResults";
import { fetchCountryData, type CountryResult } from "./utils/country";

export default function Home() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<CountryResult[]>([]);

  async function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearchResults(await fetchCountryData(query));
  }

  useEffect(() => {
    const fetch = async () => {
      setSearchResults(await fetchCountryData(""));
    };
    void fetch();
  }, [setSearchResults]);

  return (
    <main className="flex min-h-screen bg-white text-black">
      <div>
        <Image src="/globe.png" alt="Globe" width={360} height={427} />
      </div>
      <div className="container flex flex-col items-center gap-12 py-3">
        <h1 className="w-3/4 bg-[#D9D9D9] py-4 text-center text-4xl font-bold tracking-tight text-[#1F0AD9]">
          Countries Info Explorer
        </h1>
        <form onSubmit={handleSearch} className="w-8/12">
          <SearchBar query={query} setQuery={setQuery} autoFocus />
        </form>
        <CountryResults countries={searchResults} />
      </div>
      <div>
        <Image src="/globe.png" alt="Globe" width={360} height={427} />
      </div>
    </main>
  );
}
