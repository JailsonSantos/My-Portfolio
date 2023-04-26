import { darken } from 'polished';
import styled from 'styled-components';

interface ProjectProps {
  imgUrl: string;
}

export const Container = styled.section`
  gap: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  > section{
    gap: 4rem;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media(max-width:1024px){
      gap: 2rem;
    }
  }

  @media(max-width:1024px){
      gap: 2rem;
  }
 
  > button{
    border: none;
    transition: 0.5s;
    padding: 0.8rem 3rem;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.primary};

    &:hover{
      background: ${({ theme }) => darken(0.05, theme.colors.primary)}
    }

    a{
      color: #fff;
      font-weight: 300;
      font-size: 1.5rem;
      text-transform: uppercase;
    }

    @media(max-width: 425px){
      padding: 1rem;
      
      a{
        font-size: 1rem;
      }
    }
  }
`;

export const ProjectContainer = styled.div<ProjectProps>`
  width: 100%;
  height: 25rem;
  display: flex;
  position: relative;
  align-items: flex-end;
  
  &:hover{

    > section{
      box-shadow: 0 0 .9rem ${({ theme }) => theme.colors.primary};
    }
    
    > button a {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  
  > button {
    height: 4rem;
    border: none;
    background: none;
    margin: 0 0 3rem 5rem;
    
    a{
      gap: 0.8rem;
      color: ${({ theme }) => theme.colors.secondary} ;
      display: flex;
      font-size: 2rem;
      transition: 0.5s;
      font-weight: 300;
      align-items: center;
    }
  }
  
  > section{
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 10px;
    background: url(${props => props.imgUrl}) no-repeat;
    background-size: cover;
    border: 1px solid ${({ theme }) => theme.colors.primary};

/*     > div.overlay{
      width: 100%;
      height: 100%;
      opacity: 0.1;
      transition: 0.5s;
      position: absolute;
      border-radius: 10px;
      background: ${({ theme }) => theme.colors.gradient};
    } */

    > div.overlay {
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        transition: 0.5s;
        position: absolute;
        border-radius: 10px;
        opacity: ${({ theme }) => theme.title == 'dark' ? 0.8 : 0.75};
        background: ${({ theme }) => theme.title == 'dark' ? theme.colors.background : theme.colors.textHighlight};
    
      &:hover{
        border-color: ${({ theme }) => theme.colors.primary};
        opacity: ${({ theme }) => theme.title == 'dark' ? 0.75 : 0.4};
        background: ${({ theme }) => theme.title == 'dark' ? theme.colors.background : theme.colors.textHighlight};
        }
    }

    > div.text{
      top: 3rem;
      left: 1rem;
      transition: 0.5s;
      width: fit-content;
      position: absolute;

      h1{
        font-size: 2.5rem;
        color: ${({ theme }) => theme.title == 'dark' ? theme.colors.primary : theme.colors.secondaryTitle};
      }

      h2{
        font-size: 2rem;
        font-weight: 300;
        color: ${({ theme }) => theme.colors.secondaryTitle};
      }
    }
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    > button {
      margin: 0 5rem 3rem 0;
    }

    > section > div.text{
      left: 1rem;
      text-align: left;
    }
  }

  @media(max-width: 1440px){
    > section {
      width: 40rem;
    }
  }

  @media(max-width: 1024px){
    > section {
      width: 31rem;
    }
  }

  @media(max-width: 768px){
      height: 17rem;
      max-width: 100%;

      > section {
      width: 100%;

      > div.text {
        top: 1rem;
        left: 1rem;

        h1{
          color: ${({ theme }) => theme.colors.primary};
        }

          h2{
          color: ${({ theme }) => theme.colors.secondaryTitle};
        }
      }
    }

    > button {
      margin: 0;
      right: 1rem;
      bottom: 1rem;
      position: absolute;

      a{
        color: ${({ theme }) => theme.colors.secondaryTitle}
      }
    }

    &:nth-child(even){
      flex-direction: row;

      > section {
        width: 100%;

        > div.text {
          top: 1rem;
          left: 1rem;
          text-align: left;
        }
      }

      > button {
        margin: 0;
        right: 1rem;
        bottom: 1rem;
        position: absolute;
        
      }

      &:hover{
        > section > div.text {
          left: 1rem;
        }
      }
    }
  }

  @media(max-width: 425px){

    > button{
      height: auto;
      
      a{
        font-size: 1.3rem;
        gap: 0.8rem;
        color: ${({ theme }) => theme.colors.secondaryTitle}
      }
    }

    >  section > div.text {
      h1{
        font-size: 1.3rem;
      }
      h2{
        font-size: 1rem;
      }
    }
  }
`;