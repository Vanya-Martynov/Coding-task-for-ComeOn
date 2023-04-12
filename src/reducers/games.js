
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

const filterGames = (games, name, category) => {
    return games.filter(
        el => (!name || el.name.toLowerCase().indexOf(name.toLowerCase()) !== -1)
            && el.categoryIds.some(id => category === id)
    );
}

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
                filteredGames: filterGames(state.games, filterWithNewCategory.name, filterWithNewCategory.category)
            }
        case SET_GAME_NAME:
            const filterWithNewName = {
                ...state.gamesFilter,
                name: payload
            };
            return {
                ...state,
                gamesFilter: filterWithNewName,
                filteredGames: filterGames(state.games, filterWithNewCategory.name, filterWithNewCategory.category)
            }
        default:
            return state;
    }
}