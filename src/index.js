import 'babel-polyfill'
import CanvasMap from './canvas-map'

let map = CanvasMap({
    textContainer: document.querySelector('.text'),
    mapSrc: 'img/map.svg',
    trailVisitedColor: '#db4695',
    fontPresentColor: '#3d3938',
  })
  .appendTo('.container')
