import getCategories from "../services/categories.service";

const SET_CATEGORIES = "SET_CATEGORIES";

export const setCategories = () => (dispatch) => {
    
    return getCategories().then(result => {
        dispatch({
            type: SET_CATEGORIES,
            payload: { categories: result },
        });
        return Promise.resolve();
    }).catch(_ => {
        Promise.reject();
    })
};
