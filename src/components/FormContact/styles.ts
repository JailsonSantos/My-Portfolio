import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.section``;

export const FormContainer = styled.form`
  gap: 1rem;
  width: 100%;
  display: grid;
  margin-top: 3rem;
  grid-template-columns: 1fr 1fr;

  > button{
    color: #fff;
    border: none;
    transition: .5s;
    font-weight: 300;
    font-size: 1.2rem;
    width: fit-content;
    padding: 1rem 2.5rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.primary};

    &:disabled{
      opacity: 0.5;
    }

    &:not(:disabled):hover{
      background-color: ${({ theme }) => darken(0.05, theme.colors.primary)}
    } 
  }
  
  @media(max-width: 1024px) {
    margin-top: 1.5rem;
  }

  @media(max-width: 768px) {
    grid-template-columns: 1fr;
  }
  
  @media(max-width: 425px) {
    > button{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 0.5rem 1rem;
      font-size: 1rem;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  outline: none;
  transition: .5s;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  padding: 1.7rem 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.inputBackground};

  &:focus{
    border-color: ${({ theme }) => theme.colors.primary}
  }

  &::placeholder{
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 1024px){
    font-size: 1rem;
  }

  @media (max-width: 425px){
    padding: 1.4rem;
    font-size: .8rem;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  height: 10rem;
  outline: none;
  transition: .5s;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  padding: 1.7rem 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.inputBackground};

  grid-column: 1 / 3;

  &:focus{
    border-color: ${({ theme }) => theme.colors.primary}
  }

  &::placeholder{
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 1024px){
    font-size: 1rem;
  }

  @media (max-width: 768px){
    grid-column: 1;
  }

  @media (max-width: 425px){
    padding: 1.4rem;
    font-size: .8rem;
  }
`;