import * as React from "react"
import styled from "styled-components";

export const PersonalPhoto = () => {
    return (
        <ImageBorder>
            <ImageContainer src={"bullard.png"} alt={"a photo of me!"}/>
        </ImageBorder>
    )
}

const ImageContainer = styled.img`
  border-radius: 50px 50px 12px 50px;
  min-height: 13rem;
  min-width: 13rem;
  max-height: 13rem;
  max-width: 13rem;
  
  @media (max-width: 768px) {
    img {
      min-height: 17rem;
      min-width: 17rem;
      max-height: 17rem;
      max-width: 17rem;
    }
  }
`;

// TODO figure out how to make the PersonalPhoto look better in mobile view.
const ImageBorder = styled.div`
  background-color: #283143;
  min-height: 15rem;
  min-width: 15rem;
  max-height: 15rem;
  max-width: 15rem;
  border-radius: 50px 50px 12px 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    div {
      min-height: 19rem;
      min-width: 19rem;
      max-height: 19rem;
      max-width: 19rem;
    }
  }
`;
