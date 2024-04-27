import { useContext } from "react";
import { authProviderContext } from "./AuthProvider";


const useAuthProvider = () => {
    const authPro = useContext(authProviderContext)
    return authPro
};

export default useAuthProvider;