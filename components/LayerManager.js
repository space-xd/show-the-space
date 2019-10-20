import CardList from "./CardList";
import { useState } from "react";
import "../public/css/components/LayerManager.css"
function getItems(layers) {
	if (!Array.isArray(layers)) return null;
	return layers.slice(0, 20).map(({ title, abstract, name }) => {
		return {
			label: title,
			name: name,
			description: abstract,
			image: "/Image_8.png"
		};
	});
}

export default (props) => {
	const wms = props.wms;
	const childLayers = getItems(wms.capability.layers[0].layers);

	const [layerState, setState] = useState(null);
	return (
		<div className="LayerManager">
			<h1 className="text-color">{wms.capability.layers[0].title}</h1>
			<p>{wms.capability.layers[0].abstract}</p>
			<CardList items={childLayers}></CardList>
		</div>
	)
}