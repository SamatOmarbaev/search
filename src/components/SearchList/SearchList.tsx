import { UserCard } from "../UserCard/UserCard";
import { Skeleton } from "../Skeleton/Skeleton";
import "./style.css";
import { User } from "../../types";
import { memo } from "react";

interface SearchListProps {
    isLoading?: boolean;
    users: User[];
}

export const SearchList = memo((props: SearchListProps) => {
    const {users, isLoading} = props

    if (isLoading) {
        return (
            <ul className="usersList">
                <Skeleton width={342} height={128} border="1rem" />
                <Skeleton width={342} height={128} border="1rem" />
                <Skeleton width={342} height={128} border="1rem" />
                <Skeleton width={342} height={128} border="1rem" />
                <Skeleton width={342} height={128} border="1rem" />
            </ul>
        )
    }

    return (
        <ul className="usersList">
            {users?.map((user) => (
                <UserCard user={user} key={user.id} />
            ))}
        </ul>
    );
})
