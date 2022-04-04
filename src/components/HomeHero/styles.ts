import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  gap: 2;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    flex: .5;
    border-radius: 100px;
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary} ;
  }

  > div{
    flex: 4;
    margin-left: 3rem;
  }

  @media(max-width: 1440px){
    > img {
      width: 15rem;
    }
    > div {
      flex: 1;
    } 
  }

  @media(max-width: 1024px){
    > img {
      flex: .7;
    }
    > div {
      margin-left: 0;
    }
  }

  @media(max-width: 768px){
    flex-direction: column-reverse;

    > div {
      width: 100%;
    }
  }
`;


export const TextContainer = styled.section`
  width: 100%;
  margin-bottom: 2rem;

  h1{
    font-size: 8rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  h2{
    font-size: 3rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media(max-width: 1440px){
    h1{
      font-size: 4rem;
    }
    h2{
      font-size: 2rem;
    }
  }

  @media(max-width: 1024){
    h1{
      font-size: 3rem;
    }
    h2{
      font-size: 1.5rem;
    }
  }

  @media(max-width: 768px){
    h1{
      font-size: 2.5rem;
    }
    h2{
      font-size: 1.2rem;
    }
  }
`;

export const InfosContainer = styled.section`
  gap: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CodeItem = styled.pre`
  color: #fff;
  width: 24rem;
  padding: 2rem;
  font-weight: 300;
  border-radius: 10px;  
  align-self: flex-start;
  transition:  1s !important;
  font-family: 'Poppins', monospace;
  background: ${({ theme }) => theme.colors.gradient};

  @media(max-width: 1440px){
    width: 25rem;
    padding: 1.5rem;
    font-size: 0.8rem;
  }

  @media(max-width: 1024px){
    width: 100%;
    max-width: 20rem;
    min-height: 10rem;   
  }

  @media(max-width: 768px){
    width: 100%;
    
    max-width: 100%;
    min-height: 100%; 
  }

  &:hover{
    filter: brightness(1.2);
  }

  &:last-child{
    align-self: flex-end;
  }

  > div {
    margin: 0.2rem 0;
    margin-left: 1rem;
  }

  span.purple{
    font-weight: 600;
    color: ${({ theme }) => darken(.2, theme.colors.warning)};
  }

  span.blue{
    color: #7ac7e3;
  }
  
  span.comment{
    display: block;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;


