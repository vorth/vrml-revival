
import "https://www.vzome.com/modules/vrml-viewer.js"; // registers the custom element

let viewer;

const restructurePage = titleSelector =>
{
  viewer = document .createElement( 'x3d-canvas' );
  const figDiv = document .createElement( 'div' );
  figDiv.id = 'figDiv';
  figDiv.classList .add( 'scroller-content', 'inset-block' );
  figDiv .appendChild( viewer );
  const figure = document .createElement( 'figure' );
  figure.id = 'figure';
  figure.classList .add( 'safe-grid-item', 'no-margin' );
  figure .appendChild( figDiv );

  let title = document .querySelector( titleSelector );
  if ( !! title ) {
    title.parentElement .removeChild( title );
  } else {
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

  scroller .append( ...document.body.childNodes );

  document.body .replaceChildren( container );
  document.body.classList .add( 'viewers' );
}

const showFigure = (src) =>
{
  if ( !! viewer )
    viewer .src = src;
}

export const scanPage = (titleSelector,restructure=true) =>
{
  let first = true;

  document .querySelectorAll( 'a' ) .forEach( el =>
  {
    const url = el.href;
    if ( ! url .endsWith( '.wrl' ) && ! url .endsWith( '.vrml' ) )
      return;
    if ( first ) {
      restructure && restructurePage( titleSelector );
      showFigure( url );
      first = false;
    }
    const span = document .createElement( 'span' );
    const img = el .querySelector( 'img' );
    span.classList .add( !!img? 'model-3d-img' : 'model-3d' );
    span.innerHTML = el.innerHTML;
    span .addEventListener( "click", e => showFigure( url ) );
    el .replaceWith( span );
  });
}