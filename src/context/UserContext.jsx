import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      setUser(user);
      // navigate("/coins");
    } else {
      setUser(null);
      // navigate("/");
    }
  }, []);

  const signUser = (newUser) => {
    // adds id to the new user
    newUser.id = v4();
    // transfers the user to localStorage
    localStorage.setItem("user", JSON.stringify(newUser));
    // updates state
    setUser(newUser);
    navigate("/coins");
  };

  const logoutUser = () => {
    localStorage.removeItem("user");

    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ user, signUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
