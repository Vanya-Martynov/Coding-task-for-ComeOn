// import { logout } from "./act";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../actions/auth";

export default function LogOut() {
    const dispatch = useDispatch();

    const logOut = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);
    return <div onClick={ logOut } className="logout ui left floated secondary button inverted">
        <i className="left chevron icon"></i>Log Out
    </div>
}