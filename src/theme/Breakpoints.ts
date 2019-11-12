/**
 * Whatever values UX want, here
 */
const Breakpoints = {
  smallMax: '700px',
  mediumMin: '701px',
  mediumMax: '1000px'
}

export const Devices = {
  small: `only screen and (max-width: ${Breakpoints.smallMax})`,
  medium: `only screen and (min-width: ${Breakpoints.mediumMin}) and (max-width: ${Breakpoints.mediumMax})`
}