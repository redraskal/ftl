import Image from "next/image";

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  query: string;
  setQuery: (query: string) => void;
}

export function SearchBar({ query, setQuery, ...delegated }: SearchBarProps) {
  return (
    <div className="relative w-full">
      <input
        className="w-full rounded-full bg-[#1E97C3] px-6 py-4 pr-14 text-xl font-bold text-black placeholder-black shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        {...delegated}
      />
      <Image
        src="/search.svg"
        alt="Search"
        width={24}
        height={24}
        className="absolute top-1/2 right-4 h-6 w-6 -translate-y-1/2 transform"
      />
    </div>
  );
}
