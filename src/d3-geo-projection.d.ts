declare module "d3-geo-projection" {
  import type { GeoProjection } from "d3-geo";

  export function geoSinusoidal(): GeoProjection;
  export function geoMollweide(): GeoProjection;
  export function geoHomolosine(): GeoProjection;
}
