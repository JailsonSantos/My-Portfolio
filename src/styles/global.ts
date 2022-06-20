import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.colors.primary};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
      background: ${(props) => props.theme.colors.primaryLight};
    }
  }

  body {
    font: 400 1rem 'Poppins', sans-serif;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.background};
  }
  
  img {
    width: 100%;
    max-width: 100%;
  }
  
  ul {
    list-style: none;
  }
  
  button {
    cursor: pointer;
  }
  
  a {
    text-decoration: none;
  }
  
  .container {
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
    max-width: 85rem;

    @media(max-width:1440px) {
      max-width: 70rem;
    }

    @media(max-width:1024px) {
      max-width: 50rem;
    }

    @media(max-width:768px) {
      padding: 0 2rem;
    }
  }
`;