import styled from "styled-components";

export const Container = styled.header`
  background-color: #5429CC;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem 12rem;

  button {
    font-size: 1rem;
    color: #FFFFFF;
    background-color: var(--blue-light);
    border: none;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter  0.2s;

    &:hover {
      filter: brightness(0.9)
    }
  }
`;