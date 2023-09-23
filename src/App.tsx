import { useEffect } from "react";
import { useAppSelector } from "./store/app/appReducer";
import "./index.css";
import { useDispatch } from "react-redux";
import { getUserAction } from "./store/app/appReducer";

const App = () => {
  const { loading, users } = useAppSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAction());
  }, [dispatch]);

  return (
    <div className="w-screen h-screen">
      {loading ? (
        <div className="w-full h-full flex justify-center items-center">
          Users fetching ...
        </div>
      ) : (
        <div className="w-full h-full flex flex-col justify-center items-center">
          {users.map((item) => (
            <div
              key={item.id}
              className="p-2 border-2 rounded-lg bg-green-300 border-white text-sm w-56"
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
