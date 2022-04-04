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
    cursor: pointer;
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

    &:hover {
      border-color: ${({ theme }) => theme.colors.primary};

      > div.overlay {
        opacity: 0.2;
      }
    }

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
      opacity: 0.1;
      transition: 0.5s;
      position: absolute;
      background: ${({ theme }) => theme.colors.gradient};
    }
  }
`;