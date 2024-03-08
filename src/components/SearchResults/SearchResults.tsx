import { Dispatch, SetStateAction, memo, useEffect, useState } from "react";
import { fetchApiUsers } from "../../api/api";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { SearchList } from "../SearchList/SearchList";
import { User } from "../../types";

interface SearchResultsProps {
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>;
  query: string;
}

export const SearchResults = memo((props: SearchResultsProps) => {
  const {users, setUsers, query} = props
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const debounceQuery = useDebounce(query, 500)

  useEffect(() => {
    setIsLoading(true)
    fetchApiUsers(debounceQuery)
      .then(data => {
        setUsers(data.users)
        setIsLoading(false)
      })
  }, [debounceQuery, setUsers])

  return (
    <SearchList isLoading={isLoading} users={users} />
  );
})

