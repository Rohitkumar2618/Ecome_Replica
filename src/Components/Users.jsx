import { useDispatch, useSelector } from "react-redux";

import { userdelete } from "../store/reducers/UserReducers";

function Users() {
  const { users } = useSelector((state) => state.UserReducers);

  const dispatch = useDispatch();

  const DeleteHandeler = (index) => {
    dispatch(userdelete(index));
  };

  return (
    <div className="m-auto container p-10 mt-5 bg-red-100">
      <h1 className="text-2xl font-bold text-red-900">User Details</h1>

      <ul>
        {users.map((user, index) => (
          <li key={user.id}>
            <div className="flex">
              {" "}
              <h1 className="font-semibold text-1xl  font-[gilroy]">
                {" "}
                {user.name} :
              </h1>
              <h1 className="mx-3  font-bold "> {user.id}</h1>
              <span
                onClick={() => DeleteHandeler(index)}
                className="text-red-500 font-black cursor-pointer"
              >
                {" "}
                X
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
