import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';

import {
  StyledHeader,
  HeaderContainer,
  LogoImg,
  Nav,
  StyledNavLink,
} from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Link to="/">
          <LogoImg src={Logo} alt="logo" />
        </Link>

        <Nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </Nav>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
