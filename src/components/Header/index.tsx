import { HeaderContainer, Img } from "./styles";
import { THeaderProps } from "./types";

const Header = ({ title, image, ...rest }: THeaderProps): JSX.Element => {
  return (
    <HeaderContainer {...rest}>
      <h1>{title}</h1>
      <Img src={image} alt="logo" />
    </HeaderContainer>
  );
};
export default Header;
