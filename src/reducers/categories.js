
const SET_CATEGORIES = "SET_CATEGORIES";

const initialState = {
    categories: []
};

export default function CategoriesReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories: payload
            };
        default:
            return state;
    }
}