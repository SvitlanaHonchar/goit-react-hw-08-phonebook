import styled from 'styled-components';

export const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  padding: 10px;
  gap: 10px;
  width: 200px;
  height: 200px;
  border: 1.5px solid #cd4631;
  border-radius: 8px;

  background-color: #fcd9d4;

  &:nth-child(even) {
    background-color: #c1d4e0;
    border: 1.5px solid rgb(129, 173, 200);
  }

  & p {
    margin: 0;
  }

  & .contact-icon {
    font-size: 30px;
  }
`;

export const StyledOl = styled.ol`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  gap: 20px;

  margin: 0px auto 30px auto;

  padding: 0;

  font-size: 20px;
  font-weight: 500;
`;

export const StyledH2 = styled.h2`
  text-align: center;
`;
