import Casino from "./modules/casino"


import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

export default function Home() {
    const { user } = useSelector(state => state.AuthReducer);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return <div className="main container">
        <Casino></Casino>
    </div>
}