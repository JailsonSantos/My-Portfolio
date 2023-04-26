import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 5rem;
  display: flex;
  margin: 0 auto;
  margin-top: 4rem;
  max-width: 85rem;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.colors.backgroundLight};

  div.container{
    height: 5rem;
    margin: 0 auto;
    padding: 0 2rem;
    max-width: 85rem;
    align-items: center;
    justify-content: space-between;
  }
  
    @media(max-width:1440px) {
      max-width: 70rem;
    }
    
    @media(max-width:1024px) {
      max-width: 50rem;
      padding: 0 1rem;
    }  


  @media(max-width: 768px){
      margin-top: 2rem;
  }

  @media(max-width: 425px){
      margin-top: 3rem;
  }

  > div{
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
      background: none;
      border: none;
      color: ${({ theme }) => theme.colors.primary};
      text-transform: uppercase;
      font-weight: 300;
      font-size: 1.2rem;

      &:hover{
        font-weight: 600;
        color: ${({ theme }) => lighten(0.2, theme.colors.primary)};
      }
    }

    > section{
      display: flex;
      align-items: center;
      gap: 1rem;

      svg{
        width: 2rem;
        height: 2rem;
        color: ${({ theme }) => theme.colors.primary};
        cursor: pointer;

        &:hover{
          color: ${({ theme }) => lighten(0.2, theme.colors.primary)};
        }
      }
    }

    @media(max-width: 425px){
    
      button {
        font-size: 0.9rem;
      }

      > section{
        gap: 0.5rem;
        svg{
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
`;
