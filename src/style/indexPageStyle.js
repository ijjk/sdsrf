import { colors, button, media } from '../theme'
import hex2rgba from 'hex2rgba'

const bgSlant = hexBg =>
  `url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'><polygon points='0,100 100,0 100,100' style='fill:${hex2rgba(
    hexBg,
    1
  )}' /></svg>")`

const stretchBanner = (minWidth, contHeight, imgHeight) => ({
  [media.greaterThan(minWidth)]: {
    '&, & .bg': {
      height: contHeight,
    },
    '& .bg img': {
      height: imgHeight,
    },
  },
})

const style = {
  '& .Banner': {
    width: '100%',
    height: 400,
    overflow: 'hidden',
    position: 'relative',
    '& .bg': {
      width: '100%',
      height: '100%',
      position: 'absolute',
      '& img': {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        transition: 'opacity 0.5s',
        objectFit: 'cover',
        objectPosition: 'center center',
        opacity: 1,
        ':nth-child(1)': {
          zIndex: 2,
        },
        ':nth-child(2)': {
          zIndex: 1,
        },
      },
    },
    ...stretchBanner(1280, 450, 500),
    ...stretchBanner(1400, 500, 520),
    ...stretchBanner(1600, 550, 575),
    ...stretchBanner(1800, 625, 650),
    ...stretchBanner(2000, 676, 700),
    '& .tagline': {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 5,
      height: '100%',
      position: 'absolute',
      background: hex2rgba('#000', 0.15),
      '& div': {
        width: 1,
        height: '100%',
        visibility: 'hidden',
      },
      '& div, & h4': {
        display: 'inline-block',
        verticalAlign: 'middle',
      },
      '& h4': {
        color: '#fff',
        marginTop: '5%',
        marginLeft: '8%',
        textAlign: 'left',
        [media.lessThan(800)]: {
          margin: 0,
          padding: '0 5px',
          textAlign: 'center',
          width: 'calc(100% - 11px)',
        },
      },
      [media.lessThan(415)]: {
        '& br': {
          display: 'none',
        },
      },
    },
  },
  '& .section': {
    color: '#fff',
    height: 'auto',
    position: 'relative',
    padding: 10,
    width: 'calc(100% - 20px)',
    '&.pad': {
      padding: '20px 10px 60px',
    },
    '&.padMed': {
      padding: '0 10px 60px',
      [media.lessThan(1000)]: {
        paddingTop: 15,
      },
    },
    '&.padSm': {
      padding: '20px 10px 30px',
    },
    '&.left, &.right': {
      '&:before': {
        content: '""',
        position: 'absolute',
        top: -49,
        left: 0,
        zIndex: 6,
        width: '100%',
        height: 50,
        display: 'block',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
      },
    },
    '&.left': {
      background: colors.logoBlue,
      '&:before': {
        backgroundImage: bgSlant(colors.logoBlue),
      },
    },
    '&.right': {
      background: colors.semiOrange,
      '&:before': {
        backgroundImage: bgSlant(colors.semiOrange),
        transform: 'scaleX(-1)',
      },
    },
    '& .head': {
      width: '90%',
      margin: 'auto',
      textAlign: 'center',
      paddingBottom: 10,
      '&.extraPad': {
        paddingBottom: 20,
      },
    },
    '& .image-text': {
      textAlign: 'center',
      '&.full': {
        width: '90%',
      },
      '& p': {
        padding: '10px 0',
      },
      '& .text': {
        width: 'calc(100% - 270px)',
        textAlign: 'left',
        '&.text-left': {
          marginRight: 20,
          paddingBottom: 20,
        },
        '&.text-right': {
          marginLeft: 20,
          paddingTop: 20,
        },
        [media.lessThan(1000)]: {
          width: '100%',
          '&.text-left': {
            marginRight: 0,
          },
          '&.text-right': {
            marginLeft: 0,
          },
        },
        '& .split': {
          maxWidth: 500,
          width: '100%',
          height: 1,
          display: 'inline-block',
          background: '#fff',
          margin: '15px auto',
        },
      },
      '& .text, & .Img': {
        display: 'inline-block',
        verticalAlign: 'middle',
      },
      '& .Img': {
        maxWidth: 250,
        maxHeight: 225,
      },
      '& button': {
        margin: 10,
        padding: '5px 15px',
        background: colors.semiBlue,
        color: '#fff',
        fontSize: 24,
        borderRadius: 4,
        ...button,
        [media.lessThan(321)]: {
          padding: '5px 10px',
        },
      },
    },
  },
}

export default style
