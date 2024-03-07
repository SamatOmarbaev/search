import { useSearchContext } from "../../context/SearchContext";
import "./styles.css";

export function SearchForm() {
  const {query, setQuery} = useSearchContext()

  return (
    <div className="searchForm">
      <form onSubmit={(e) => e.preventDefault()}>
        <input 
          type="text" 
          placeholder="Поиск..."
          value={query}
          onChange={(e) => setQuery(e.target.value)} 
        />
      </form>
    </div>
  );
}
