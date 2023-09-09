import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTasks } from "./store/app/appActions";
import { useAppSelector } from "./store/app/appReducer";
import "./index.css";

const App = () => {
  const dispatch = useDispatch();
  const { loading, users } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(getTasks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
