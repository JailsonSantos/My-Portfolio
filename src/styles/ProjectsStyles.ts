import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  > main{
    gap: 1.5rem;
    width: 100%;
    display: grid;
    margin-top: 5rem;
    margin-bottom: 5rem;
    grid-template-columns: repeat(4, 1fr);

    @media(max-width: 1024px) {
      grid-template-columns: 1fr 1fr;
    }

    @media(max-width: 425px){
      grid-template-columns: 1fr;
    }
  }
`;

export const AreaProjectItem = styled.div`
  wrap: 5rem;
  width: 100%;
  display: flex;
  margin: 0 auto;
  padding: 0 1rem;
  flex-wrap: wrap;
  max-width: 85rem;
  align-items: center;
  justify-content: center;
`;
