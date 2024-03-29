import { useContext } from 'react';

import NavLink from './NavLink';
import { ThemeContext } from 'styled-components';
import { ThemeContextApp } from '../../context/ThemeContextApp';
import Switch from 'react-switch';

import { Container, Nav, Sol, Lua } from './styles';

export function Header() {

  const { title, colors } = useContext(ThemeContext);

  return (
    <Container>
      <div className="container">
        <Nav>
          <NavLink title="Home" path="/" />
          <NavLink title="Projects" path="/projects" includes />
        </Nav>

        <div className="right">
          <ThemeContextApp.Consumer>
            {({ toggleTheme }) => (

              <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                uncheckedIcon={<Lua />}
                checkedIcon={<Sol />}
                height={26}
                width={50}
                handleDiameter={20}
                onColor={colors.secondary}
                offColor={colors.textHighlight}
                onHandleColor={colors.background}
                offHandleColor={colors.yellow}
                boxShadow="0px 1px 3px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)"
                className="myToggle"
                id="material-switch"
              />
            )}
          </ThemeContextApp.Consumer>
        </div>
      </div>
    </Container>
  );
};