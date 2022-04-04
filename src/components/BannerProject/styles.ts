import styled from 'styled-components';

interface ContainerProps {
  imgUrl: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 26rem;
  display: flex;
  margin: 0 auto;
  padding: 3rem 4rem;
  position: relative;
  align-items: flex-end;
  justify-content: flex-start;
  background: url(${props => props.imgUrl}) no-repeat center;
  background-size: cover;

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

  section { 
    z-index: 2;
    
    h1{
      font-size: 3rem;
      color: ${({ theme }) => theme.colors.primary};
    }

    h2{
      font-size: 2rem;
      font-weight: 300;
      color: ${({ theme }) => theme.colors.secondaryTitle};
    }
  }

  > div.overlay {
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      opacity: 0.2;
      transition: 0.5s;
      position: absolute;
      background: ${({ theme }) => theme.colors.gradient};
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

  @media(max-width: 425px){
    padding: 1rem;
    height: 10rem;
  
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
