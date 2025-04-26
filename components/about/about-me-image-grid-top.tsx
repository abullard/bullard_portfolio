import * as React from "react"
import styled from "styled-components";

export const AboutMeImageGridTop = () => {
  const photos = [
    "austin_di_dani.jpg",
    "almond_filbert.jpg",
    "austin_di_japanese_shrine.jpg"
  ];

  const alts = [
    'Diandra and I in downtown Des Moines, IA',
    'Our cats, Almond and Filbert',
    'Diandra and I in Japan'
  ];

  return (
    <Grid>
      {photos && photos.map((x, i) => 
        (<ImageContainer src={`../personal_photos/about/${x}`} alt={alts[i]} />))}
    </Grid>
  )
}

export const Grid = styled.div`
  gap: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const ImageContainer = styled.img`
  border-radius: 10px;
  min-height: 15rem;
  min-width: 20rem;
  max-height: 15rem;
  max-width: 20rem;
  
  @media (max-width: 768px) {
    img {
      min-height: 17rem;
      min-width: 17rem;
      max-height: 17rem;
      max-width: 17rem;
    }
  }
`;
