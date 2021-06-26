import { useContext } from "react";
import { AuthContext } from '../contexts/Authcontexts';

export function useAuth() {
    const value = useContext(AuthContext)

    return value;
}