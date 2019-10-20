import "../public/css/components/Card.css"

export default (props) => (
    <div className="my-card">
        <img className="image" src={props.image}></img>
        <h4 className="nav-text">{props.label}</h4>
    </div>
);
