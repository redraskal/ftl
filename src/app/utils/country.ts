export interface CountryResult {
  name: {
    common: string;
  };
  flag: string;
  languages: Record<string, string>;
  currencies: Record<
    string,
    {
      name: string;
    }
  >;
  timezones: string[];
  borders: string[];
}

/**
 * Fetch country data from the REST Countries API, defaulting to Europe region if no query is provided.
 * @param query Country name
 * @returns Promise<CountryResult[]>
 */
export async function fetchCountryData(
  query: string,
): Promise<CountryResult[]> {
  const url = `https://restcountries.com/v3.1/${query ? "name/" + query : "region/europe"}`;
  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error, status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => Promise.resolve(data as CountryResult[]))
    .catch((err: Error) => Promise.reject(err));
}
