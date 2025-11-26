import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);
export const useUser = () => useContext(UserContext);

const genId = () => "u_" + Math.random().toString(36).slice(2, 10);

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(() => localStorage.getItem("simon-uid") || "");
  const [nickname, setNickname] = useState(() => localStorage.getItem("simon-nick") || "");

  useEffect(() => { if (userId) localStorage.setItem("simon-uid", userId); }, [userId]);
  useEffect(() => { localStorage.setItem("simon-nick", nickname || ""); }, [nickname]);

  const ensureUserId = () => {
    if (!userId) {
      const id = genId();
      setUserId(id);
      return id;
    }
    return userId;
  };

  return (
    <UserContext.Provider value={{ userId, nickname, setNickname, ensureUserId }}>
      {children}
    </UserContext.Provider>
  );
};
