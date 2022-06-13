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
  <svg width="164" height="164" viewBox="0 0 164 164" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="82" cy="82" r="82" fill={color}/>
  </svg>
);

export const Triangle = (color: string = "black") => (
  <svg width="182" height="158" viewBox="0 0 182 158" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M91 0L181.933 157.5H0.0673294L91 0Z" fill={color}/>
  </svg>
);

export const Ellipse = (color: string = "black") => (
  <svg width="197" height="107" viewBox="0 0 197 107" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="98.5" cy="53.5" rx="98.5" ry="53.5" fill={color}/>
  </svg>
);

export const Star = (color: string = "black") => (
  <svg width="160" height="152" viewBox="0 0 160 152" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M80 0L98.8592 58.0426H159.889L110.515 93.9149L129.374 151.957L80 116.085L30.626 151.957L49.4852 93.9149L0.111252 58.0426H61.1408L80 0Z" fill={color}/>
  </svg>
);