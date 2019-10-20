import { useRef, useEffect } from 'react';
import "../public/css/components/Globe.css";

function renderCanvas(canvas) {
	var wwd = new WorldWind.WorldWindow('canvas1');
	wwd.addLayer(new WorldWind.BMNGOneImageLayer());
	wwd.addLayer(new WorldWind.BMNGLandsatLayer());
	//wwd.addLayer(new WorldWind.CompassLayer());
	//wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
	//wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));
}


export default () => {
	const canvasRef = useRef(null);

	useEffect(() => {
		renderCanvas(canvasRef.current);
	});

	return (
		<>
			<canvas id="canvas1" ref={canvasRef}></canvas>
		</>
	);
}
