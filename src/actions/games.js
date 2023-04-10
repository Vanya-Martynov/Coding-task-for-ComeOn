import getGames from "../services/games.service";

const SET_GAMES = "SET_GAMES";
const SET_GAME_CATEGORY = "SET_GAME_CATEGORY";
const SET_GAME_NAME = "SET_GAME_NAME";

export const setGames = () => (dispatch) => {    
    return getGames().then(result => {
        dispatch({
            type: SET_GAMES,
            payload: { games: result },
        });
        return Promise.resolve();
    }).catch(_ => {
        Promise.reject();
    })
};

export const filterGamesByName = (dispatch, name) => {
    dispatch({
        type: SET_GAME_NAME,
        payload: name,
    });
}

export const filterGamesByCategories = (dispatch, categoryId) => {
    dispatch({
        type: SET_GAME_CATEGORY,
        payload: categoryId,
    });
}