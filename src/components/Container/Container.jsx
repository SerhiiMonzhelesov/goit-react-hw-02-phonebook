import StyledContainer from './StyledContainer';

function Container({ children, ...restProps }) {
  return <StyledContainer {...restProps}>{children}</StyledContainer>;
}

export default Container;
