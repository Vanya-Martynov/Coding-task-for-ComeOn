
export default function GameItem({ icon = "", name, description, code, launch }) {
    const imgSrc = require(`../../../images/game-icon/${icon}.jpg`);
    const launchGame = () => {
        launch(code);
    };


    return <>
        <div className="game item">
            <div className="ui small image">
                <img src={imgSrc} alt="game-icon" />
            </div>
            <div className="content">
                <div className="header"><b className="name">{name}</b></div>
                <div className="description">
                    {description}
                </div>
                <div className="extra">
                    <div className="play ui right floated secondary button inverted" onClick={launchGame}>
                        Play
                        <i className="right chevron icon"></i>
                    </div>
                </div>
            </div>
        </div>
    </>
}