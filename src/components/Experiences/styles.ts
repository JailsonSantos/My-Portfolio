import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > section{
    gap: 1.5rem;
    width: 100%;
    display: flex;
    margin-top: 5rem;

    padding-bottom: 5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.backgroundLight};

    @media(max-width: 1024px){
      gap: 1rem;
    }

    @media(max-width: 768px){
      gap: 2rem;
      margin-top: 3rem;
      padding-bottom: 3rem;
      flex-direction: column;
    }
  }
`;

export const ItemContainer = styled.div`
  > div {
    width: 100%;
    height: 20rem;
    display: flex;
    padding: 1rem;
    max-width: 19rem;
    padding-top: 2.5rem;
    border-radius: 10px;
    flex-direction: column;
    align-items: flex-start;
    background: ${({ theme }) => theme.colors.gradient};

    transition: 0.5s;

    h1{
      font-size: 2rem;
      margin-bottom: 1.5rem;
      color: ${({ theme }) => theme.colors.primary};
    }

    h2{
      font-weight: 300;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: ${({ theme }) => theme.colors.secondaryTitle};
    }

    p{
      font-size: 1rem;
      font-weight: 300;
      color: ${({ theme }) => darken(.2, theme.colors.secondaryTitle)};
    }
  }

  &:hover > div {
    filter: brightness(1.3);
    transform: translateY(-20px);
  }

  &:nth-child(even) > div {
    margin-top: 4rem;
  }

  @media(max-width: 1024px){
    > div {
      height: auto;
      padding-top: 1.5rem;
    }
    
    h1{
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    
    h2{
      font-size: 1.2rem;
    }
    
    p{
      font-size: 1rem;
    }
  }
  
  @media(max-width: 768px){

    &:nth-child(even) > div{
      margin-top: 0;
    }

    &:hover > div{
      transform: translateY(0);
    }

    > div {
      height: auto;
      padding: 1rem;
      max-width: 100%;
      
      h1{
        font-size: 1.5rem;
      }
      
      h2{
        font-size: 1.2rem;
      }
      
      p{
        font-size: 1rem;
      }
    }
  }
`;