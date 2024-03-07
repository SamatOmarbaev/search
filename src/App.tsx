import { useState } from "react";
import { SearchForm } from "./components/SearchFrom/SearchForm";
import { SearchContext } from "./context/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { User } from "./types";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [query, setQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <SearchContext.Provider value={{ users, setUsers, query, setQuery, isLoading, setIsLoading }}>
      <SearchForm />
      <SearchResults />
    </SearchContext.Provider>
  );
}
