import styled from 'styled-components';

interface Props {
  backgroundColor?: string,
  boxShadow?: string,
  zindex?: number,
  display?: string,
  justify?: string,
  overflow?: string,
  overX?: string,
  overY?: string,
  align?: string,
  width?: string,
  height?: string,
  minHeight?: string,
  maxHeight?: string,
  maxWidth?: string,
  minWidth?: string,
  margin?: string,
  padding?: string,
  border?: string,
  borderRadius?: string,
  radius?: string,
  direction?: string,
  wrap?: string,
  textSize?: string,
  fontStyle?: string,
  weight?: string,
  ident?: string,
  wordBreak?: string,
  textDecoration?: string,
  opacity?: string,
  textColor?: string,
  cursorStyle?: string,
  textShadow?: string,
  alignSelf?: string,
  position?: string,
  fontFamily?: string,
  top?: string,
  bottom?: string,
  left?: string,
  right?: string,
  transition?: string,
  objectFit?: string
}

const Container = styled.div`
  z-index: ${(p: Props) => p.zindex || 'unset'};
  background-color: ${(p: Props) => p.backgroundColor || 'white'};
  display: ${(p: Props) => p.display || 'block'};
  position: ${(p: Props) => p.position || 'unset'};
  top: ${(p: Props) => p.top};
  bottom: ${(p: Props) => p.bottom};
  left: ${(p: Props) => p.left};
  right: ${(p: Props) => p.right};
  justify-content: ${(p: Props) => p.justify || 'unset'};
  overflow: ${(p: Props) => p.overflow || 'unset'};
  overflow-x: ${(p: Props) => p.overX || 'hidden'};
  overflow-y: ${(p: Props) => p.overY || 'hidden'};  
  align-items: ${(p: Props) => p.align || 'unset'};
  width: ${(p: Props) => p.width || '100%'};
  height: ${(p: Props) => p.height || '100%'};
  min-height: ${(p: Props) => p.minHeight || 'unset'};
  max-height: ${(p: Props) => p.maxHeight || 'unset'};
  max-width: ${(p: Props) => p.maxWidth || 'unset'};
  min-width: ${(p: Props) => p.minWidth || 'unset'};
  margin: ${(p: Props) => p.margin || '0 0'};
  padding: ${(p: Props) => p.padding || '0 0'};
  border: ${(p: Props) => p.border || 'none'};
  border-radius: ${(p: Props) => p.borderRadius || '0px'};
  box-shadow: ${(p: Props) => p.boxShadow || 'none'};
  opacity: ${(p: Props) => p.opacity || 1};
  transition: ${(p: Props) => p.transition || 'unset'};
`;

const FlexContainer = styled(Container)`
  display: flex;
  justify-content: ${(p: Props) => p.justify || 'unset'};
  align-items: ${(p: Props) => p.align || 'unset'};
  flex-direction: ${(p: Props) => p.direction || 'unset'};
  flex-wrap: ${(p: Props) => p.wrap || 'unset'};
  overflow: ${(p: Props) => p.overflow || 'unset'};
`;

const Text = styled.p`
  width: ${(p: Props) => p.width || '100%'};
  height: ${(p: Props) => p.height || 'fit-content'};
  min-height: ${(p: Props) => p.minHeight || 'unset'};
  max-height: ${(p: Props) => p.maxHeight || 'unset'};
  max-width: ${(p: Props) => p.maxWidth || 'unset'};
  min-width: ${(p: Props) => p.minWidth || 'unset'};  margin: ${({ margin }) => margin || '0 0'};
  margin: ${(p: Props) => p.margin || '0 0'};
  padding: ${(p: Props) => p.padding || '0 0'};
  font-size: ${(p: Props) => p.textSize || 'inherit'};
  font-style: ${(p: Props) => p.fontStyle || 'inherit'};
  font-weight: ${(p: Props) => p.weight || 'inherit'};
  text-indent: ${(p: Props) => p.ident || '0'};
  text-align: ${(p: Props) => p.align || 'unset'};
  word-break: ${(p: Props) => p.wordBreak || 'unset'};
  text-decoration: ${(p: Props) => p.textDecoration || 'unset'};
  opacity: ${(p: Props) => p.opacity || 1};
  color: ${(p: Props) => p.textColor || 'inherit'};
  cursor: ${(p: Props) => p.cursorStyle || 'unset'};
  text-align: ${(p: Props) => p.align || 'unset'};
  text-shadow: ${(p: Props) => p.textShadow || 'unset'};
  overflow: ${(p: Props) => p.overflow || 'unset'};
  align-self: ${(p: Props) => p.alignSelf || 'inherit'};
  font-family: ${(p: Props) => p.fontFamily || 'Roboto, sans-serif'};
  position: ${(p: Props) => p.position || 'unset'};
  transition: ${(p: Props) => p.transition || 'unset'};
`;

const H1 = styled.h1`
  font-family: ${(p: Props) => p.fontFamily || 'Roboto, sans-serif'};
  width: ${(p: Props) => p.width || '100%'};
  height: ${(p: Props) => p.height || 'fit-content'};
  margin: ${(p: Props) => p.margin || '0 0'};
  padding: ${(p: Props) => p.padding || '0 0'};
  font-size: ${(p: Props) => p.textSize || '2em'};
  font-style: ${(p: Props) => p.fontStyle || 'inherit'};
  font-weight: ${(p: Props) => p.weight || 'bold'};
  text-indent: ${(p: Props) => p.ident || '0'};
  opacity: ${(p: Props) => p.opacity || 1};
  color: ${(p: Props) => p.textColor || 'inherit'};
  text-align: ${(p: Props) => p.align || 'unset'};
  text-shadow: ${(p: Props) => p.textShadow || 'unset'};
  align-content: ${(p: Props) => p.justify || 'unset'};
  position: ${(p: Props) => p.position || 'unset'};
`;

const H2 = styled.h2`
  font-family: ${(p: Props) => p.fontFamily || 'Roboto, sans-serif'};
  width: ${(p: Props) => p.width || '100%'};
  margin: ${(p: Props) => p.margin || '0 0'};
  padding: ${(p: Props) => p.padding || '0 0'};
  font-size: ${(p: Props) => p.textSize || '1.5em'};
  font-style: ${(p: Props) => p.fontStyle || 'inherit'};
  font-weight: ${(p: Props) => p.weight || 'bold'};
  text-indent: ${(p: Props) => p.ident || '0'};
  opacity: ${(p: Props) => p.opacity || 1};
  color: ${(p: Props) => p.textColor || 'inherit'};
  text-align: ${(p: Props) => p.align || 'unset'};
  text-shadow: ${(p: Props) => p.textShadow || 'unset'};
`;

const ImageComponent = styled.img`
  object-fit: ${(p: Props) => p.objectFit || 'cover'};
  width: ${(p: Props) => p.width || '100%'};
  height: ${(p: Props) => p.height || '100%'};
  margin: ${(p: Props) => p.margin || '0 0'};
  padding: ${(p: Props) => p.padding || '0 0'};
  opacity: ${(p: Props) => p.opacity || 1};
  border-radius: ${(p: Props) => p.borderRadius || '0px'};
  box-shadow: ${(p: Props) => p.boxShadow || 'none'};
  z-index: ${(p: Props) => p.zindex || 'unset'};
`;

export {
  Container,
  FlexContainer,
  H1,
  H2,
  Text,
  ImageComponent,
};
