import { Dispatch, SetStateAction, createContext, useContext } from "react";
import { User } from "../types";

interface ContextProps {
    users: User[];
    setUsers: Dispatch<SetStateAction<User[]>>;
    query: string;
    setQuery: Dispatch<SetStateAction<string>>;
}

export const SearchContext = createContext<ContextProps>({ 
    users: [],
    setUsers: () => {},
    query: '',
    setQuery: () => {},
});

export const useSearchContext = () => useContext(SearchContext)