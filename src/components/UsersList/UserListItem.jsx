const UserListItem = ({ user, onSelect, onDelete }) => {
  return (
    <div
      className={`user-card ${user.isSelected ? "selected" : ""}`}
      onClick={() => onSelect(user.id)}
    >
      <img src={user.imgSrc} alt="avatar" />

      <div>
        <h3>
          {user.firstName} {user.lastName}
        </h3>
        <p>Age: {user.age}</p>
      </div>

      <button
        className="delete-btn"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(user.id);
        }}
      ></button>
    </div>
  );
};

export default UserListItem;
