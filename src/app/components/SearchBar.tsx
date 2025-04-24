interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  query: string;
  setQuery: (query: string) => void;
}

export function SearchBar({ query, setQuery, ...delegated }: SearchBarProps) {
  return (
    <input
      className="w-full rounded-full bg-[#1E97C3] px-6 py-4 text-xl font-bold text-black placeholder-black shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
      type="text"
      placeholder="Search..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      {...delegated}
    />
  );
}
