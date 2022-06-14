import React from "react";

export const Square = (color: string = "black") => (
  <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="210" height="210" fill={color} />
  </svg>
);

export const HSquare = (color: string = "black") => (
  <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="210" height="210" fill={color} stroke="#FFF6C9" stroke-width="10"/>
  </svg>
);

export const Circle = (color: string = "black") => (
  <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="110" cy="110" r="110" fill={color}/>
  </svg>
);

export const Triangle = (color: string = "black") => (
  <svg width="208" height="180" viewBox="0 0 208 180" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M104 0L207.923 180H0.0769501L104 0Z" fill={color}/>
  </svg>
);

export const Ellipse = (color: string = "black") => (
  <svg width="220" height="110" viewBox="0 0 220 110" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="110" cy="55" rx="110" ry="55" fill={color}/>
  </svg>
);

export const Star = (color: string = "black") => (
  <svg width="230" height="218" viewBox="0 0 230 218" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M115 0L141.942 82.918H229.127L158.593 134.164L185.534 217.082L115 165.836L44.4658 217.082L71.4074 134.164L0.873215 82.918H88.0583L115 0Z"
      fill={color}
    />
  </svg>
);

export const Rhomb = (color: string = "black") => (
  <svg width="212" height="255" viewBox="0 0 212 255" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.819546 127.5L105.119 0.220782L211.941 127.5L105.119 254.779L0.819546 127.5Z" fill={color}/>
  </svg>
);

export const Rectangle = (color: string = "black") => (
  <svg width="220" height="100" viewBox="0 0 220 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="220" height="100" fill={color}/>
  </svg>
);

export const Pentagon = (color: string = "black") => (
  <svg width="210" height="210" viewBox="0 0 210 210" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M102.335 0L210 93.4404L186.548 210H23.4518L0 93.4404L102.335 0Z" fill={color}/>
  </svg>
);