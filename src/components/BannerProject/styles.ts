import styled from 'styled-components';
import { dark, light } from '../../styles/themes';

interface ContainerProps {
  imgUrl: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 26rem;
  display: flex;
  margin: 0 auto;
  margin-top: 6rem;
  padding: 3rem 4rem;
  position: relative;
  border-radius: 1rem;
  align-items: flex-end;
  justify-content: flex-start;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: url(${props => props.imgUrl}) no-repeat center;
  background-size: cover;


  div{
    border-radius: 1rem;
  }

  @media(max-width:1440px) {
      max-width: 70rem;
    }
    
    @media(max-width:1024px) {
      max-width: 50rem;
      padding: 0 1rem;
    }

    @media(max-width:768px) {
      max-width: 44rem;
      padding: 0 2rem;
    }

  section { 
    z-index: 2;
    
    h1{
      font-size: 3rem;
      color: ${({ theme }) => theme.colors.primary};
    }

    h2{
      font-size: 2rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.secondaryTitle};
    }
  }

  > div.overlay {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: ${({ theme }) => theme.title == 'dark' ? 0.8 : 0.75};
    position: absolute;
    //      background: ${({ theme }) => theme.colors.gradient};
    transition: 0.5s;
    background: ${({ theme }) => theme.title == 'dark' ? theme.colors.background : theme.colors.textHighlight};
 
  &:hover{
      background: ${({ theme }) => theme.title == 'dark' ? theme.colors.background : theme.colors.textHighlight};
      opacity: ${({ theme }) => theme.title == 'dark' ? 0.75 : 0.65};
   
    }
  }

  @media(max-width: 768px){
    padding: 1.5rem;
    height: 20rem;
  
    section{
      h1{
        font-size: 2rem;
      }
      h2{
        font-size: 1.5rem;
      }
    }
  }

  @media(max-width: 426px){
    padding: 1rem;
    height: 10rem;
    width: 85%;
  
    section{
      h1{
        font-size: 1.5rem;
      }
      h2{
        font-size: 1rem;
      }
    }
  }
`;
