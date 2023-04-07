import React from 'react';
import { StyledDiv, StyledImg } from './NotFoundComponent.styled';

const NotFoundComponent = () => {
  return (
    <>
      <StyledDiv>
        <p>404.Page not found... Please try again</p>
      </StyledDiv>
      <StyledImg
        src="https://cliply.co/wp-content/uploads/2021/09/142109670_SAD_CAT_400.gif"
        alt="cat gif"
      />
    </>
  );
};

export default NotFoundComponent;
