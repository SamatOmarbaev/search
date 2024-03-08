import { Dispatch, SetStateAction, memo } from "react";
import "./styles.css";

interface SearchFormProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

export const SearchForm = memo((props: SearchFormProps) => {
  const {query, setQuery} = props;
  
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
})
