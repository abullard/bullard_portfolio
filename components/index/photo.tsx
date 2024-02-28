import * as React from "react"
import styled from "styled-components";

export const Photo = () => {
    return (
        <Circle src={"bullard.png"} alt={"a photo of me!"}/>
    )
}

const Circle = styled.img`
  border-radius: 60px 60px 60px 15px;
  height: 15rem;
  width: 15rem;
`;
