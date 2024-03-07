import { User } from "../../types";
import "./style.css";

interface UserCardProps {
  user: User;
}

export function UserCard(props: UserCardProps) {
  const {user} = props
  
  return (
    <div className="userCard">
      <img className="userPic" src={user.image} />
      <div className="userInfo">
        <div>{`${user.firstName} ${user.lastName}`}</div>
        <div>{user.address.city}</div>
      </div>
    </div>
  );
}
