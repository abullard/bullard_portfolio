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
  border-radius: 50px 50px 50px 12px;
  min-height: 15rem;
  min-width: 15rem;
  max-height: 15rem;
  max-width: 15rem;
`;

const ImageBorder = styled.div`
  background-color: #283143;
  min-height: 17rem;
  min-width: 17rem;
  max-height: 17rem;
  max-width: 17rem;
  border-radius: 50px 50px 50px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
