import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const authProviderContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [isProfileClicked, setProfileClicked] = useState(false);
  const [touristSports, setTouristSport] = useState();

  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user log in
  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

//   user log out
const userLogOut = () => {
    return signOut(auth);
}

  // isUser logged In
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      currentUser && setUsers(currentUser);
    });

    return () => unSubscribe();
  }, []);

  const authInfo = {
    createUser,
    users,
    logInUser,
    isProfileClicked,
    setProfileClicked,
    touristSports,
    setTouristSport,
    userLogOut
  };

  return (
    <authProviderContext.Provider value={authInfo}>
      {children}
    </authProviderContext.Provider>
  );
};

export default AuthProvider;
