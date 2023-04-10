export default function PlayerProfile({ icon = "", name, eventName }) {

    const imgSrc = require(`../../../images/avatar/${ icon }.jpg`);

    // const imgSrc = require(`${ pathToImg }${ icon }.jpg`);


    return <div className="player item">
        <img className="ui avatar image" src={ imgSrc } alt="avatar" />
        <div className="content">
            <div className="header"><b className="name">{ name }</b></div>
            <div className="description event">{ eventName }</div>
        </div>
    </div>
}