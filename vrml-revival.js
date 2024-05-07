
// This registers the custom element for use on the page, as a side-effect
//  This script does not require that, except that it creates HTML (DOM)
//  containing the custom element.
//
import X3D from "https://create3000.github.io/code/x_ite/latest/x_ite.min.mjs";

// The X_ITE web component element.
// It has to be global so that showFigure() can set the URL.
//
let viewer;

// Rearrange the child elements of the body into three divs, so we can have full
//  control over the layout.  Our layout (on a normal laptop screen) will be:
//
//  container:
//   +------------------------------+
//   |title:      title             |
//   +------------+-----------------+
//   |scroller:   |figure:          |
//   |            |                 |
//   |   other    |                 |
//   |    body    |      X_ITE      |
//   |  content   |                 |
//   |            |                 |
//   +------------+-----------------+
//
//   The "scroller" element will contain most of the original body HTML, and is styled
//    to support scrolling in both directions as necessary.  It is meant to have a maximum
//    width that gives a text line length comfortable for reading.  Normal text (not preformatted)
//    will wrap to that width.
//
const restructurePage = titleSelector =>
{
  // Create the X_ITE web component
  viewer = document .createElement( 'x3d-canvas' );

  // Wrap it in some extra div layers for arcane CSS reasons, so it lays out correctly.
  const figDiv = document .createElement( 'div' );
  figDiv.id = 'figDiv';
  figDiv.classList .add( 'scroller-content', 'inset-block' );
  figDiv .appendChild( viewer );
  const figure = document .createElement( 'figure' );
  figure.id = 'figure';
  figure.classList .add( 'safe-grid-item', 'no-margin' );
  figure .appendChild( figDiv );

  // Find the existing page element that is to be moved to the title area
  let title = document .querySelector( titleSelector );
  if ( !! title ) {
    // Remove the title from its parent, somewhere within the body.
    // The parent may not be the body itself, but that's OK.
    title.parentElement .removeChild( title );
  } else {
    // No element matched the selector.
    // Create an empty title div, just to simplify the rest of the code.
    title = document .createElement( 'div' );
    title.style.minHeight = 10;
  }
  title.id = 'title';

  const container = document .createElement( 'div' );
  container.id = 'container';
  const scroller = document .createElement( 'div' );
  scroller.id = 'scroller';
  container .appendChild( title );
  container .appendChild( figure );
  container .appendChild( scroller );

  // All the remaining body children get put inside the scroller.
  scroller .append( ...document.body.childNodes );

  // This "replacement" is effectively adding our container as the only child of the body,
  //  I believe, since we already moved all the children of the body.
  document.body .replaceChildren( container );

  // Signal to our CSS that this body has been restructured
  document.body.classList .add( 'viewers' );
}

// Trigger X_ITE to load a new VRML file from the src URL
//
const showFigure = (src) =>
{
  if ( !! viewer )
    viewer .src = src;
}

const checkUrl = url =>
{
  // Ignore any anchors that are not for VRML
  if ( ! url .endsWith( '.wrl' ) && ! url .endsWith( '.vrml' ) )
    return null;
  return url;
}

// This is the main entry point, to be called exactly once for each HTML page.
// The caller can provide a more specific (or more accurate) CSS selector to match
//   their pattern for finding the element that should be considered the title of the page.
//   By default, the first <h1>...</h1> element will be treated as the title.
// The caller can also opt-out of restructuring, if the page has been statically
//   edited to have the right structure (or even some other structure) already.
//
export const scanPage = ( titleSelector='h1', restructure=true, testUrl=checkUrl ) =>
{
  let first = true;

  // Look for all anchor tags in the page
  document .querySelectorAll( 'a' ) .forEach( anchor =>
  {
    const url = testUrl( anchor.href );
    if ( ! url )
      return;

    if ( first ) {
      first = false;
      // We want to restructure the page only after we have found at least one VRML anchor
      restructure && restructurePage( titleSelector );

      // Show the first VRML model in X_ITE.  We must delay this, since the X_ITE component
      //  was only just added to the DOM, and it apparently has scheduled its own initialization.
      //  (It has done its own setTimeout, which will happen before ours.)
      setTimeout( () => showFigure( url ) );
    }

    // We change each anchor into a span, since we don't want the default browser treatment
    //  of the anchor.
    const span = document .createElement( 'span' );

    // We use a different CSS class for styling anchors with images vs. anchors with just text.
    const img = anchor .querySelector( 'img' );
    span.classList .add( !!img? 'model-3d-img' : 'model-3d' );

    // Copy the entire anchor content to the new span
    span.innerHTML = anchor.innerHTML;

    // Add the click listener that will trigger X_ITE to switch to this model.
    span .addEventListener( "click", e => showFigure( url ) );

    // This replaces the anchor with the span in its parent element.
    anchor .replaceWith( span );
  });
}