import { UserCard } from "../UserCard/UserCard";
import { Skeleton } from "../Skeleton/Skeleton";
import "./style.css";
import { User } from "../../types";

interface SearchListProps {
    isLoading?: boolean;
    users: User[];
}

export function SearchList(props: SearchListProps) {
    const {users, isLoading} = props

    if (isLoading) {
        return (
            <div className="usersList">
                <Skeleton width={342} height={128} border="1rem" />
                <Skeleton width={342} height={128} border="1rem" />
                <Skeleton width={342} height={128} border="1rem" />
                <Skeleton width={342} height={128} border="1rem" />
                <Skeleton width={342} height={128} border="1rem" />
            </div>
        )
    }

    return (
        <div className="usersList">
            {users?.map((user) => (
                <UserCard user={user} key={user.id} />
            ))}
        </div>
    );
}
