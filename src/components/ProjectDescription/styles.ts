import styled from 'styled-components';

interface ContainerProps {
  imgUrl: string;
}

export const Container = styled.div<ContainerProps>`
    width: 30rem;
    margin: 2rem;

    @media(max-width: 1024px) {
      width: 20rem;
      margin: 1.5rem;
    }

    @media(max-width: 425px){
      width: 100%;
      margin: 1rem;
    }

  > a {
    width: 100%;
    height: 15rem;
    display: flex;
    padding: 1.5rem;
    transition: 0.5s;
    background: url(${props => props.imgUrl}) repeat center;
    background-size: cover;
    overflow: hidden;
    position: relative;
    border-radius: 0.5rem;
    align-items: flex-end;
    background-size: cover;
    justify-content: flex-start;
    border: 1px solid ${({ theme }) => theme.colors.border};   

    > section {
      z-index: 2;

      h1 {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.primary};
      }

      h2 {
        font-size: 1rem;
        font-weight: 300;      
        color: ${({ theme }) => theme.colors.secondaryTitle};
      }
    }

    > div.overlay {
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        transition: 0.5s;
        position: absolute;
        opacity: ${({ theme }) => theme.title == 'dark' ? 0.8 : 0.75};
        background: ${({ theme }) => theme.title == 'dark' ? theme.colors.background : theme.colors.textHighlight};
    
      &:hover{
        border-color: ${({ theme }) => theme.colors.primary};
        opacity: ${({ theme }) => theme.title == 'dark' ? 0.75 : 0.4};
        background: ${({ theme }) => theme.title == 'dark' ? theme.colors.background : theme.colors.textHighlight};
        }
    }
  }
`;