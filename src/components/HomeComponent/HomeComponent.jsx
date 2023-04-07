import React from 'react';
import { StyledDiv, StyledLi, StyledUl } from './HomeComponent.styled';

const HomeComponent = () => {
  return (
    <StyledDiv>
      <h2 hidden>Home</h2>
      <h3>👋🏻 Welcome to the PhoneBook!</h3>
      <p>Manage your contacts easily:</p>
      <StyledUl>
        <StyledLi>add ✅</StyledLi>
        <StyledLi>remove ❌</StyledLi>
        <StyledLi>filter ❔</StyledLi>
      </StyledUl>
    </StyledDiv>
  );
};

export default HomeComponent;
