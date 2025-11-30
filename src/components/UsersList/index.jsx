import { useState } from "react";
import UserListItem from "./UserListItem";
import { usersData } from "../../data/users";
import "./style.css";

const UsersList = () => {
  const [users, setUsers] = useState(
    usersData.map((u) => ({ ...u, isSelected: false }))
  );

  const toggleSelect = (id) => {
    setUsers((p) =>
      p.map((user) =>
        user.id === id ? { ...user, isSelected: !user.isSelected } : user
      )
    );
  };

  const deleteUser = (id) => {
    setUsers((p) => p.filter((user) => user.id !== id));
  };

  return (
    <div>
      {users.map((user) => (
        <UserListItem
          key={user.id}
          user={user}
          onSelect={toggleSelect}
          onDelete={deleteUser}
        />
      ))}
    </div>
  );
};

export default UsersList;
