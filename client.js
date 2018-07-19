// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';



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

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('App', {}),
    mainSurface
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('lake.jpg'));
  const player = r360.compositor.createVideoPlayer('bgVideoPlayer');
  // Instantiate the video, but do not play it yet
  player.setSource(r360.getAssetURL('sa.mp4'), '3D');
}

window.React360 = {init};
