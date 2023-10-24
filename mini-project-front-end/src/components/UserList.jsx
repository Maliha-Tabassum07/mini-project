import { useNavigate } from "react-router-dom";
import useUserHook from "../hooks/useUserHook";

const UserList = () => {
  const navigate = useNavigate();
  const { users, handleSubmit, errors } = useUserHook();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {users &&
        users.map((user) => {
          return (
            <div key={user.userId}>
              <h2>User Id: {user.userId}</h2>
              <h3>Email: {user.email}</h3>
              <button onClick={() => navigate(`/user/${user.userId}`)}>
                Details
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default UserList;
