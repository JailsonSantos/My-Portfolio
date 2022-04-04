import styled from 'styled-components';

export const Container = styled.div`
  gap: 0.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1{
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  h2{
    font-size: 3rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media(max-width: 1024px){
    h1{
    font-size: 2.5rem;
    }

    h2{
      font-size: 1.8rem;
    }
  }

  @media(max-width: 425px){
    h1{
    font-size: 1.5rem;
    }

    h2{
      font-size: 1.2rem;
    }
  }
`;
