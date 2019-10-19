import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";

export default () => (
	[
		'primary',
		'secondary',
		'success',
		'danger',
		'warning',
		'info',
		'light',
		'dark',
	].map((variant, idx) => (
		<Alert key={idx} variant={variant}>
			<FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
			This is a {variant} alert—check it out!
        </Alert>
	))
);