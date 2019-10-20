import "../public/css/components/Card.css"
import Tooltip from 'react-tooltip-lite';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import { unescape } from "lodash";

export default (props) => {
    return (
        <div className="my-card" onClick={props.onClick}>
            <Tooltip
                content={(<div className="content" dangerouslySetInnerHTML={{ __html: unescape(props.description) }}></div>)}
                className="target"
                direction="right">
                <p>{props.label}</p> <FontAwesomeIcon className="infoTooltip" icon={icons.faInfoCircle}></FontAwesomeIcon>
            </Tooltip>
        </div>
    )
};
