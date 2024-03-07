import { useCallback, useEffect } from "react";
import { useSearchContext } from "../../context/SearchContext";
import { fetchApiUsers } from "../../api/api";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { SearchList } from "../SearchList/SearchList";

export function SearchResults() {
  const {query, setUsers, users, isLoading, setIsLoading} = useSearchContext()
  const debounceQuery = useDebounce(query, 500)

  const searchUsers = useCallback(async() => {
    try {
      setIsLoading(true)
      const response = await fetchApiUsers(debounceQuery)
      setUsers(response.users)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }, [debounceQuery, setUsers, setIsLoading])

  useEffect(() => {
    searchUsers()
  }, [searchUsers])

  return (
    <SearchList isLoading={isLoading} users={users} />
  );
}

