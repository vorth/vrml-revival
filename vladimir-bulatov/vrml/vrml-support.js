
// This registers the custom element for use on the page, as a side-effect
//  This script does not require that, except that it creates HTML (DOM)
//  containing the custom element.
//
import X3D from "https://create3000.github.io/code/x_ite/latest/x_ite.min.mjs";

// The X_ITE web component element.
// It has to be global so that showFigure() can set the URL.
//
const viewer = document .querySelector( 'x3d-canvas' );

// Trigger X_ITE to load a new VRML file from the src URL
//
const showFigure = (src) =>
{
  if ( !! viewer )
    viewer .src = src;
}

export const scanPage = () =>
{
  let first = true;
  // Look for all anchor tags in the page
  document .querySelectorAll( 'span' ) .forEach( span =>
  {
    const url = span.dataset.vrml;

    if ( ! url ) return;

    if ( first ) {
      // Show the first VRML model in X_ITE.  We must delay this, since the X_ITE component
      //  was only just added to the DOM, and it apparently has scheduled its own initialization.
      //  (It has done its own setTimeout, which will happen before ours.)
      setTimeout( () => showFigure( url ) );
    }
    first = false;

    // Add the click listener that will trigger X_ITE to switch to this model.
    span .addEventListener( "click", e => showFigure( url ) );
  });
}

scanPage();
