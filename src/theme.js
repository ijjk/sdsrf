import { css } from 'glamor'

export const colors = {
  bodyBg: '#f5f6f7',
  bodyFg: '#212121',
  paypalYellow: '#ffc43a',
  semiOrange: '#EB8181',
  semiBlue: '#4D9DE0',
  logoBlue: '#0e5d8e',
  semiWhite: '#F2F2F2',
  faintGrey: '#DEDEDE',
  semiBlack: '#555555',
  semiGrey: '#c3c3c3',
  slate: '#495866',
  slateDarken: '#3D4954',
}

export const fonts = {
  nunito: {
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 700,
  },
  oxygen: {
    fontFamily: "'Oxygen', sans-serif",
    fontWeight: 400,
  },
  cormorant: {
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 400,
  },
}

export const media = {
  greaterThan(size) {
    return `@media (min-width: ${size}px)`
  },
  lessThan(size) {
    return `@media (max-width: ${size - 1}px)`
  },
}

export const boxShadow = (
  resp = false,
  inset = false,
  x = 1,
  y = 3,
  b = 6,
  s = 'rgba(0, 0, 0, 0.25)'
) => {
  inset = inset ? 'inset ' : ''
  resp = resp
    ? {
        ':hover': {
          boxShadow: `${x + 1}px ${y + 2}px ${b + 2}px ${s}`,
        },
        ':active': {
          boxShadow: `inset ${x}px 0 ${b}px ${s}`,
        },
      }
    : {}
  return {
    boxShadow: `${inset}${x}px ${y}px ${b}px ${s}`,
    ...resp,
  }
}

export const button = {
  ...boxShadow(true),
  ...fonts.nunito,
  transition: 'box-shadow 175ms ease-in-out',
  cursor: 'pointer',
  outline: 0,
  border: 'none',
  borderRadius: 3,
}

export const fadeIn = css.keyframes('fadeIn', {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
})

export const fadeOut = css.keyframes('fadeOut', {
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})
