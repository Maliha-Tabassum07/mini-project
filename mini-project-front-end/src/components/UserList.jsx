import { useNavigate } from "react-router-dom";
import useUserHook from "../hooks/useUserHook";

const UserList = () => {
  const navigate = useNavigate();
  const { users, handleSubmit, errors } = useUserHook();

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        {users &&
          users.map((user) => (
            <div key={user.userId} className="col-md-4">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">User Id: {user.userId}</h5>
                  <p className="card-text">Email: {user.email}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate(`/user/${user.userId}`)}
                  >
                    Details
                  </button>
                  <button
                    className="btn btn-secondary ml-2"
                    onClick={() => navigate(`/user/${user.userId}/history`)}
                  >
                    History
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserList;
