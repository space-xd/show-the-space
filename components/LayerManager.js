import CardList from "./CardList";
import { useRef, useState } from "react";
import "../public/css/components/LayerManager.css"
import LayerModel from "./LayerModel";

function getItems(layers, updateMap) {
	if (!Array.isArray(layers)) return null;
	return layers.map((layer) => {
		const { title, abstract, name } = layer;
		return {
			label: title,
			name: name,
			description: abstract,
			onClick: () => updateMap(layer),
		};
	});
}

const LayerManager = ({ map, wms, className }) => {
	const parentLayer = wms.capability.layers[0];
	const selectedLayer = useRef(null);
	const [modelState, setModelState] = useState({ isOpen: false, layers: [] });

	const openModal = (layer) => {
		setModelState({ isOpen: true, layers: layer });
	};


	const onModelClose = (layer) => {
		if (selectedLayer.current) {
			map.removeLayer(selectedLayer.current);
			map.redraw();
		}
		if (layer && !layer.layers && layer.name) {
			var wmsLayerCapabilities = wms.getNamedLayer(layer.name);
			const wmsLayerCapability = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities, null);
			selectedLayer.current = new WorldWind.WmsLayer(wmsLayerCapability);
			map.addLayer(selectedLayer.current);
			map.redraw();
		}
		setModelState({ isOpen: false, layers: null });
	}
	if (modelState.isOpen) {
		return (<LayerModel layers={modelState.layers} onClose={onModelClose}></LayerModel>)
	}

	const childLayers = getItems(parentLayer.layers, openModal);
	return (
		<div className={`LayerManager ${className}`}>
			<h1>{parentLayer.title}</h1>
			{parentLayer.abstract ? <p>parentLayer.abstract</p> : null}
			<CardList items={childLayers} ></CardList>
		</div>
	)
}

export default LayerManager;