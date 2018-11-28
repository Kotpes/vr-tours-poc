// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';
import store from './store/store'



function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const mainSurface = new Surface(
    1000, /* width */
    800, /* height */
    Surface.SurfaceShape.Cylinder /* shape */
  );

  const rightPanel = new Surface(300, 450, Surface.SurfaceShape.Flat);
  rightPanel.setAngle(0.95, 0.1);

  r360.renderToSurface(
    r360.createRoot('RightPanel', {store}),
    rightPanel,
  );

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('App', {store}),
    mainSurface
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('lake.jpg'));
}

window.React360 = {init};
