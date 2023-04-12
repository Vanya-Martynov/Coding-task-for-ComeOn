import { useState } from "react";
import { useSelector } from "react-redux";
import GameItem from "./gameItem";

export default function GameList() {
    const { filteredGames } = useSelector(state => state.GamesReducer);
    const [showGame, setShowGame] = useState(false);

    const hideGame = () => {
        setShowGame(false);
    }
    const launch = (code) => {
        setShowGame(true);
        window.comeon.game.launch(code);
    };

    return <>
        <h3 className="ui dividing header">Games</h3>
        <div className="ingame" style={{ display: showGame ? "block" : "none" }}>
            <div className="ui grid centered">
                <div className="three wide column">
                    <div onClick={hideGame} className="ui right floated secondary button inverted"><i className="left chevron icon"></i>Back
                    </div>
                </div>
                <div className="ten wide column">
                    <div id="game-launch">
                    </div>
                </div>
                <div className="three wide column"></div>
            </div>
        </div>

        <div className="ui relaxed divided game items links">
            {filteredGames && filteredGames.map(el => {
                return <GameItem name={el.name} description={el.description} icon={el.icon} key={el.id} code={el.code} launch={launch}></GameItem>
            })}
        </div>
    </>
}