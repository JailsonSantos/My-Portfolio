import { darken } from "polished";
import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  > main{
    width: 100%;
    margin: 2rem auto;
    
    p{
      font-weight: 300;
      font-size: 1.5rem;
      text-align: justify;
      color: ${({ theme }) => theme.colors.textLight};
    }

    button {
      border: none;
      transition: 0.5s;
      margin-top: 2rem;
      padding: 0.8rem 3rem;
      border-radius: 0.5rem;
      background-color: ${({ theme }) => theme.colors.primary};

      &:hover{
        background-color: ${({ theme }) => darken(0.05, theme.colors.primary)}
      }

      a{
        color: #fff;
        font-weight: 300;
        font-size: 1.5rem;
        text-transform: uppercase;
      }
    }

    
    @media(max-width:1440px) {
      max-width: 70rem;
    }
    
    @media(max-width:1024px) {
      max-width: 50rem;
      padding: 0 1rem;
    }
  
    @media(max-width: 768px) {
      padding: 0 2rem;

      p{
        font-size: 1rem;
      }

      button{
        padding: 0.7rem 2rem;

        a{
          font-size: 0.9rem;
        }
      }
    }
  }
`;