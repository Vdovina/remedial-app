import {
  Square,
  HSquare,
  Circle,
  Triangle,
  Ellipse,
  Star,
  Rhomb,
  Rectangle,
  Pentagon,
} from '../constants/geometry';

export const GEOMETRY = {
  square: {
    name: 'square',
    draw: Square,
  },
  rectangle: {
    name: 'rectangle',
    draw: Rectangle,
  },
  circle: {
    name: 'circle',
    draw: Circle,
  },
  triangle: {
    name: 'triangle',
    draw: Triangle,
  },
  ellipse: {
    name: 'ellipse',
    draw: Ellipse,
  },
  star: {
    name: 'star',
    draw: Star,
  },
  rhomb: {
    name: 'rhomb',
    draw: Rhomb,
  },
  pentagon: {
    name: 'pentagon',
    draw: Pentagon,
  },
}