import { useDispatch, useSelector } from "react-redux";
import { filterGamesByName } from "../../../actions/games";


export default function SearchGame() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.GamesReducer);
    console.log(state);
    const handleSearch = (e) => {
        console.log(e.target.value);
        filterGamesByName(dispatch, e.target.value);
    }

    return <div className="four wide column">
        <div className="search ui small icon input ">
            <input onChange={ handleSearch } type="text" placeholder="Search Game" />
            <i className="search icon"></i>
        </div>
    </div>
}