import { useState } from "react";
import { SearchForm } from "./components/SearchFrom/SearchForm";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { User } from "./types";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [query, setQuery] = useState<string>('');

  return (
    <>
      <SearchForm 
        query={query}
        setQuery={setQuery}
      />
      <SearchResults 
        query={query}
        users={users}
        setUsers={setUsers}
      />
    </>
  );
}
