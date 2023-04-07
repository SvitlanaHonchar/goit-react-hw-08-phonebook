import styled from 'styled-components';

export const StyledSection = styled.section`
  box-shadow: 0 4px 5px -4px rgba(129, 173, 200, 0.5);
  background-color: #f7ede8;
`;
export const StyledHeader = styled.header`
  margin-left: auto;
  margin-right: auto;

  max-width: 1200px;
  /* box-shadow: 0 4px 5px -4px rgba(129, 173, 200, 0.5); */
`;

export const StyledNav = styled.nav`
  margin-left: 10px;
  margin-right: 10px;

  padding-top: 10px;
  padding-bottom: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  /* border-bottom: solid 1px black; */

  & .auth {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    margin-left: auto;
  }

  & a {
    text-decoration: none;
  }

  & .navLink--page {
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    padding: 5px 15px;
    border-radius: 4px;
    color: #cd4631;
    transition-duration: 250ms;

    &:hover,
    &:focus {
      background-color: rgba(205, 70, 49, 0.1);
      /* cursor: pointer; */
    }
    &.active {
      background-color: rgba(205, 70, 49, 0.1);
    }
  }
`;
