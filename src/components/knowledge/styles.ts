import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > section {
    gap: 4rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 3rem;
    align-items: center;
    justify-content: center;

    @media(max-width: 1024px){
      gap: 4px;
      flex-wrap: wrap;
      margin-top: 3rem;
    }

    @media(max-width: 768px){
      gap: 2.5rem;
      flex-wrap: wrap;
      margin-top: 2rem;
    }

    @media(max-width: 425px){
      gap: 2rem;
    }
  }
`;


export const ConhecimentoContainer = styled.div`
  gap: 1rem;
  width: 180px;
  height: 150px;
  display: flex;
  margin-right: 3rem;
  border-radius: 5px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  
  transition: 0.5s;
 
  p{
    font-weight: 300;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  svg{ 
    width: 5rem;
    height: 5rem;
    transition: 0.3s;
    color: ${({ theme }) => theme.colors.secondary};
  }
  
  
  &:hover{
    box-shadow: 0 0 .9em ${({ theme }) => theme.colors.primary};
    
    p{
      font-weight: 400;
    }

    svg{
      transform: scale(0.95);
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media(max-width: 1024px) {
    margin-right: 2rem;
    margin-bottom: 2rem;

    p{
      font-size: 1rem;
    }

    svg{
      width: 4rem;
      height: 4rem;
    }
  }

  @media(max-width: 768px) {
    margin-right: 0;
    margin-bottom: 0;
    box-shadow: 0 0 .9em ${({ theme }) => theme.colors.primary};
  }
`;