import { useDispatch } from "react-redux";
import { filterGamesByCategories } from "../../../actions/games"


export default function CategoriesItem({ name, id }) {
    const dispatch = useDispatch();
    const handleCategorySearch = () => {
        filterGamesByCategories(dispatch, id);
    }
    return <div className="category item" onClick={ handleCategorySearch } id={ id }>
        <div className="content">
            <div className="header">{name}</div>
        </div>
    </div>
}