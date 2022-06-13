declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>> | DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> | React.ImgHTMLAttributes<HTMLImageElement>;
  export default content;
}