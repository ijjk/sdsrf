import { boxShadow, fadeIn, fadeOut, media } from '../../theme'

export const fadeLen = 225

const style = {
  textAlign: 'center',
  '& .wrapMems': {
    display: 'inline-block',
  },
  '& .profile': {
    height: 270,
    width: 150,
    background: '#fff',
    overflow: 'hidden',
    borderRadius: 3,
    margin: '30px 15px 0',
    display: 'inline-block',
    transition: 'box-shadow 200ms ease',
    ...boxShadow(true),
    '& .Img': {
      height: 200,
      cursor: 'pointer',
    },
    '& .info': {
      paddingTop: 5,
      textAlign: 'center',
      userSelect: 'none',
      '& h6, & p': {
        lineHeight: 1,
      },
      '& p': {
        fontSize: 15,
      },
      '& img': {
        height: 20,
        width: 25,
        margin: '5px 0',
      },
    },
    [media.lessThan(918)]: {
      height: 245,
      width: 125,
      margin: '10px 8px 0',
      '& .Img': {
        height: 175,
      },
    },
    [media.lessThan(340)]: {
      height: 210,
      width: 100,
      '& .Img': {
        height: 140,
      },
    },
  },
  '& .blurb': {
    height: 0,
    opacity: 0,
    margin: '0 auto',
    overflow: 'hidden',
    background: '#fff',
    textAlign: 'left',
    fontSize: 16,
    borderRadius: 3,
    maxWidth: 150 * 4 + 30 * 4,
    ...boxShadow(),
    '&.active, &.fadeOut': {
      height: 'auto',
      marginTop: 25,
    },
    '&.active': {
      animation: `${fadeIn} ${fadeLen}ms ease-in forwards`,
    },
    '&.fadeOut': {
      animation: `${fadeOut} ${fadeLen}ms ease-out`,
    },
    '& p': {
      padding: 10,
    },
    '& .Img': {
      float: 'left',
      height: '100%',
      width: '100%',
      maxWidth: 250,
      maxHeight: 250,
      marginRight: 8,
      [media.lessThan(480)]: {
        float: 'none',
        margin: 'auto',
      },
    },
  },
}

export default style
