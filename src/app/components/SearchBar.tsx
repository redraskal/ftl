"use client";

import { useState } from "react";

export function SearchBar() {
    const [query, setQuery] = useState("");
 
    return (
        <input type="text" placeholder="Search..." value={query} />
    );
}
