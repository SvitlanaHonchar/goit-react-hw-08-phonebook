import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  gap: 10px;

  & p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    margin: 0;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 500;
    color: #1c1c1c;
    font-size: 16px;
  }
`;
