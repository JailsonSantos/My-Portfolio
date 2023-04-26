import { lighten } from 'polished';
import styled from 'styled-components';


import { IoMdSunny } from 'react-icons/io'
import { RiMoonClearFill } from 'react-icons/ri'


interface NavLinkContainerProps {
  isActive: boolean;
}

export const Container = styled.div`

  width: 100%;
  z-index: 9999;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.background};
  
  .container {
    width: 100%;
    height: 4rem;
    margin: 0 auto;
    display: flex;
    max-width: 85rem;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.backgroundLight};

    .right {
        .myToggle {
          .react-switch-bg {
            div {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        }
      }
    
    @media(max-width:1440px) {
      max-width: 70rem;
    }
    
    @media(max-width:1024px) {
      max-width: 50rem;
      padding: 0 1rem;
    }

    @media(max-width:768px) {
      padding: 0 2rem;
    }

  }
`;

export const Nav = styled.ul`
    flex: 1;
    align-items: center;
    gap: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NavLinkContainer = styled.li<NavLinkContainerProps>`
  a{
    font-weight: 500;
    transition: 0.5s;
    text-transform: uppercase;
    color: ${({ isActive, theme }) => isActive ? theme.colors.primary : theme.colors.textHighlight};
    border-bottom: ${({ isActive, theme }) => isActive ? `3px solid ${theme.colors.primary}` : 'none'};
    border-radius: 0 0 5px 5px;
      
    &:hover{
    color: ${({ isActive, theme }) =>
    isActive ? lighten(0.2, theme.colors.primary) : lighten(0.2, theme.colors.textHighlight)};
    }

    @media(max-width: 768px) {
      font-size: 0.85rem;
    }
  }
`;


export const Sol = styled(IoMdSunny)`
  color: ${({ theme }) => theme.colors.yellow};
  font-size: 15px;
`

export const Lua = styled(RiMoonClearFill)`
  color: ${({ theme }) => theme.colors.background};
  font-size: 15px;
`
