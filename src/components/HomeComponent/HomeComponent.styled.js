import styled from 'styled-components';

export const StyledUl = styled.ul`
  padding-left: 0;
`;

export const StyledLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  padding-left: 0;
  padding: 5px;
  list-style: none;
  width: 250px;

  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;

  border: 1.5px solid #000000;
  box-shadow: 6px 6px 0px #cd4631;
  border-radius: 8px;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px auto;

  padding: 5px;
  list-style: none;
  max-width: 600px;

  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;

  border: 1.5px solid #000000;
  box-shadow: 6px 6px 0px rgba(129, 173, 200, 0.5);
  border-radius: 8px;

  & h3 {
    font-size: 22px;
    margin: 5px;
  }

  & p {
    font-size: 18px;
    margin: 5px;
  }
`;
