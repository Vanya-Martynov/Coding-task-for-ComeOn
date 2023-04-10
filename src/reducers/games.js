
const SET_GAMES = "SET_GAMES";
const SET_GAME_NAME = "SET_GAME_NAME";
const SET_GAME_CATEGORY = "SET_GAME_CATEGORY";

const initialState = {
    games: [],
    gamesFilter: {
        category: 0,
        name: ""
    },
    filteredGames: [],
};

export default function GamesReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_GAMES:
            return {
                ...state,
                games: payload.games,
                filteredGames: payload.games,
            };
        case SET_GAME_CATEGORY:
            const filterWithNewCategory = {
                ...state.gamesFilter,
                category: payload
            };
            return {
                ...state,
                gamesFilter: filterWithNewCategory,
                filteredGames: state.games.filter(el => {
                    return (!filterWithNewCategory.name || el.name.toLowerCase().indexOf(filterWithNewCategory.name.toLowerCase()) !== -1) && el.categoryIds.some(id => filterWithNewCategory.category === id)
                })
            }
        case SET_GAME_NAME:
            
            const filterWithNewName = {
                ...state.gamesFilter,
                name: payload
            };
            return {
                ...state,
                gamesFilter: filterWithNewName,
                filteredGames: state.games.filter(el => {
                    return (!filterWithNewName.name || el.name.toLowerCase().indexOf(filterWithNewName.name.toLowerCase()) !== -1) && el.categoryIds.some(id => filterWithNewName.category === id)
                })
            }
        default:
            return state;
    }
}