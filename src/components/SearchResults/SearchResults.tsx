import { useCallback, useEffect } from "react";
import { useSearchContext } from "../../context/SearchContext";
import { UserCard } from "../UserCard/UserCard";
import { fetchApiUsers } from "../../api/api";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import "./style.css";

export function SearchResults() {
  const {query, setUsers, users} = useSearchContext()
  const debounceQuery = useDebounce(query, 500)

  const searchUsers = useCallback(async() => {
    try {
      const response = await fetchApiUsers(debounceQuery)
      setUsers(response.users)
    } catch (error) {
      console.log(error);
    }
  }, [debounceQuery, setUsers])

  useEffect(() => {
    searchUsers()
  }, [searchUsers])

  return (
    <div className="usersList">
      {users?.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
}

