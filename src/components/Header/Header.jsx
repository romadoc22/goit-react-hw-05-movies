// import { NavLink } from 'react-router-dom';
import Logo from '../../images/logo.png';

//стилі секції <header>
import {
  StyledHeader,
  HeaderContainer,
  LogoImg,
  Nav,
  StyledNavLink,
} from './Header.styled';

// import { Container } from 'components/App.styled';

//стилі  контейнера

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <LogoImg src={Logo} alt="logo" />
        <Nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </Nav>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
