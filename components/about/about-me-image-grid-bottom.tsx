import * as React from "react"
import { ImageContainer, Grid } from './about-me-image-grid-top';

const photos = [
  "filbert.jpg",
  "austin_canopy_hotel.jpg",
  "pixel.jpg"
];

const alts = [
  'Our cat Filbert, outside looking handsome',
  'Me at the canopy hotel in chicago',
  'Our dog Pixel, derpy as hell with her tongue out'
];

export const AboutMeImageGridBottom = () => {
  return (
    <Grid>
      {photos && photos.map((x, i) =>
        (<ImageContainer src={`../personal_photos/about/${x}`} alt={alts[i]} />))}
    </Grid>
  )
};
