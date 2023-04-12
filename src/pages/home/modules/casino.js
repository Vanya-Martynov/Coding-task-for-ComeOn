import { useEffect } from "react";
import CategoriesFilter from "./categoriesFilter";
import GameList from "./gamesList";
import LogOut from "./logout";
import PlayerProfile from "./playerProfile";
import SearchGame from "./searchGame";
import { useDispatch, useSelector } from "react-redux";
import { setGames } from "../../../actions/games";
import { setCategories } from "../../../actions/categories";


export default function Casino() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setGames());
    }, [dispatch]);

    useEffect(() => {
        dispatch(setCategories());
    }, [dispatch]);

    const { user } = useSelector(state => state.AuthReducer);

    return <div className="casino">
        <div className="ui grid centered">
            <div className="twelve wide column">
                <div className="ui list">
                    <PlayerProfile icon={user.player.avatar} name={user.player.name} eventName={user.player.event}></PlayerProfile>
                </div>
                <LogOut></LogOut>
            </div>
            <SearchGame></SearchGame>
        </div>
        <div className="ui grid">
            <div className="twelve wide column">
                <GameList></GameList>
            </div>
            <CategoriesFilter></CategoriesFilter>
        </div>

    </div>
}