import * as React from "react"
import styled from "styled-components";

export const AboutMeImageGridBottom = () => {
    return (
      <Grid>
        <ImageContainer src={"../personal_photos/about/austin_canopy_hotel.jpg"} alt={"Part of my family!"}/>
        <ImageContainer src={"../personal_photos/about/austin_wndr_museum.jpg"} alt={"Diandra and I in New York"}/>
        <ImageContainer src={"../personal_photos/about/filbert.jpg"} alt={"Diandra and I in New York"}/>
        <ImageContainer src={"../personal_photos/about/pixel.jpg"} alt={"Diandra and I in New York"}/>
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
