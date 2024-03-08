import { memo } from "react";
import { User } from "../../types";
import "./style.css";

interface UserCardProps {
  user: User;
}

export const UserCard = memo((props: UserCardProps) => {
  const {user} = props
  
  return (
    <li className="userCard">
      <img className="userPic" src={user.image} />
      <div className="userInfo">
        <div>{`${user.firstName} ${user.lastName}`}</div>
        <div>{user.address.city}</div>
      </div>
    </li>
  );
})
