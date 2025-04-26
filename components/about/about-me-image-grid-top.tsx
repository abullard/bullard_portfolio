import * as React from "react"
import styled from "styled-components";

export const AboutMeImageGridTop = () => {
    return (
      <Grid>
        <ImageContainer src={"../personal_photos/about/austin_di_dani.jpg"} alt={"Part of my family!"}/>
        <ImageContainer src={"../personal_photos/about/almond_filbert.jpg"} alt={"Diandra and I in New York"}/>
        <ImageContainer src={"../personal_photos/about/austin_cali_nature.jpg"} alt={"Me in nature!"}/>
        <ImageContainer src={"../personal_photos/about/austin_di_japanese_shrine.jpg"} alt={"Diandra and I in Japan"}/>
      </Grid>
    )
}

const Grid = styled.div`
  gap: 1rem;
  display: flex;
`;

const ImageContainer = styled.img`
  border-radius: 50px;
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
