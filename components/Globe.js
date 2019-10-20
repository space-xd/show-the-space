import ReactDom from "react-dom";
import { useRef, useEffect } from 'react';
import "../public/css/components/Globe.css";
import LayerManager from "./LayerManager";

function renderCanvas(mapId, layerManagerEl) {
	const map = new WorldWind.WorldWindow(mapId);
	map.addLayer(new WorldWind.BMNGLayer());
	const starFieldLayer = new WorldWind.StarFieldLayer();
	map.addLayer(starFieldLayer);
	const atmosphereLayer = new WorldWind.AtmosphereLayer();

	map.addLayer(atmosphereLayer);
	// fetch('https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0')
	// fetch('https://openmaps.gov.bc.ca/geo/pub/WHSE_LAND_AND_NATURAL_RESOURCE.PROT_CURRENT_FIRE_POLYS_SP/ows?service=WMS&request=GetCapabilities')
	// fetch('https://gibs.earthdata.nasa.gov/wms/epsg4326/best/wms.cgi?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0')
	// fetch('https://wildfire.cr.usgs.gov/ArcGIS/services/geomac_dyn/MapServer/WMSServer?request=GetCapabilities&service=WMS') //Not working
	// fetch('https://neo.sci.gsfc.nasa.gov/wms/wms?version=1.3.0&service=WMS&request=GetCapabilities') // CHAL_RAHA_HAI:
	fetch('https://neo.sci.gsfc.nasa.gov/wms/wms?version=1.3.0&service=WMS&request=GetCapabilities')
		.then(response => response.text())
		.then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
		.then((data) => {
			return ReactDom.render((<LayerManager wms={new WorldWind.WmsCapabilities(data)} map={map} />), layerManagerEl)
		})
		.catch(error => console.log(`There was a failure retrieving the capabilities document: ${error}`));

	
	let timeStamp = Date.now();
	const updateInterval = setInterval(function () {
		timeStamp += 180 * 1000;
		starFieldLayer.time = new Date(timeStamp);
		atmosphereLayer.time = new Date(timeStamp);
		map.redraw();
	}, 100);
	return () => clearInterval(updateInterval);
}


export default () => {
	const mapId = "map";
	const layerManagerRef = useRef(null);

	useEffect(() => {
		return renderCanvas(mapId, layerManagerRef.current);
	});

	return (
		<div className="Globe">
			<div ref={layerManagerRef}></div>
			<canvas id={mapId}></canvas>
		</div>
	);
}
