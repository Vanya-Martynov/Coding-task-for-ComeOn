import { useSelector } from "react-redux";
import CategoriesItem from "./categoriesItem";


export default function CategoriesFilter({ name, id }) {
    const { categories } = useSelector(state => state.CategoriesReducer.categories);
    return <div className="four wide column">
        <h3 className="ui dividing header">Categories</h3>

        <div className="ui selection animated list category items">

            { categories && categories.map(el => {
                const key = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
                return <CategoriesItem id={el.id} name={el.name} key={ key }></CategoriesItem>
            }) }

        </div>
    </div>
}