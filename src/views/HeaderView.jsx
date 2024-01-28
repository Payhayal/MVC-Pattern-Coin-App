import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const HeaderView = () => {
  const { user, logoutUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = () => {
    if (user) {
      // anasayfaya yönlendir
      navigate("/coins");
    } else {
      navigate("/");
    }
  };
  return (
    <header>
      <h3>
        <img onClick={handleClick} src="/coin-logo.png" />
        <span onClick={handleClick}>
          Coin<span className="text-warning fs-bold">Ex</span>
        </span>
      </h3>
      {user && (
        <div>
          <p>{user.email}</p>
          <button onClick={logoutUser}>Log out</button>
        </div>
      )}
    </header>
  );
};

export default HeaderView;
