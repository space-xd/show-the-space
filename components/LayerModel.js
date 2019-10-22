import { Modal, Button } from "react-bootstrap";

export default ({ layers: { layers = [] }, onClose }) => (
	<Modal.Dialog>
		<Modal.Header closeButton onClick={() => onClose(null)} >
			<Modal.Title>Modal title</Modal.Title>
		</Modal.Header>

		<Modal.Body>
			{layers.map((layer) => (<Button key={`layer.name${Math.random()}`} onClick={() => onClose(layer)}>{layer.title}</Button>))}
		</Modal.Body>

		<Modal.Footer>
			<Button variant="secondary">Close</Button>
			<Button variant="primary">Save changes</Button>
		</Modal.Footer>
	</Modal.Dialog>
);