import { Navigate } from "react-router-dom";
import { isAuthenticate } from "../api/authenticate";

const PrivateAdmin = ({ children }) => {
    const auth = isAuthenticate();
    if (!auth || auth.id !== 1) {
        return <Navigate to="/signin" />
    }
    return children
}
export default PrivateAdmin