import {
  Square,
  HSquare,
  Circle,
  Triangle,
  Ellipse,
  Star,
} from '../constants/geometry';

// export const GEOMETRY = {
//   triangle: 'M91 0L181.933 157.5H0.0673294L91 0Z',
//   square: 'M10 10 h 80 v 80 h -80 Z',
// }

export const GEOMETRY = {
  square: {
    name: 'square',
    draw: Square,
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
}