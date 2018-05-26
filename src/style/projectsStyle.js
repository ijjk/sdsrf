import { media, colors } from '../theme'
import hex2rgba from 'hex2rgba'

const style = {
  padding: '40px 0 60px',
  '& .quoteImg': {
    textAlign: 'center',
    padding: '15px 0',
    [media.lessThan(700)]: {
      '& h6, & div': {
        width: '100%',
      },
      '& h6': {
        marginTop: 10,
        maxWidth: '100%',
        '&:nth-child(1)': {
          display: 'none',
        },
        '&:nth-child(3)': {
          display: 'block',
        },
      },
    },
    '& h6, & div': {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    '& h6': {
      width: '42%',
      maxWidth: 400,
      textAlign: 'left',
      marginRight: '3%',
      '&:nth-child(3)': {
        display: 'none',
      },
      '& span': {
        fontSize: 13,
      },
    },
    '& div': {
      width: '55%',
      position: 'relative',
      textAlign: 'center',
      '& .wrap': {
        maxWidth: 500,
        width: '100%',
        height: '100%',
        '& .blur': {
          position: 'absolute',
          top: 0,
          zIndex: 2,
          height: '100%',
          '&:nth-child(1)': {
            left: 0,
            width: '25%',
            background: `linear-gradient(to right, ${hex2rgba(
              colors.bodyBg,
              1
            )}, ${hex2rgba(colors.bodyBg, 0)})`,
          },
          '&:nth-child(2)': {
            right: 0,
            width: '20%',
            background: `linear-gradient(to right, ${hex2rgba(
              colors.bodyBg,
              0
            )}, ${hex2rgba(colors.bodyBg, 1)})`,
          },
        },
        '& .img': {
          width: '100%',
          maxHeight: '100%',
        },
      },
    },
  },
  '& .info': {
    paddingTop: 40,
    [media.lessThan(450)]: {
      padding: '20px 0',
      '& .wrapPic': {
        padding: '10px 0',
        textAlign: 'center',
        '& .img': {
          float: 'none',
          height: 175,
          marginBottom: 10,
        },
        '& h5, & p': {
          textAlign: 'left',
        },
      },
    },
    '& .wrapPic': {
      padding: '40px 0',
      minHeight: 150,
      '& .img': {
        height: 175,
        float: 'left',
        margin: '5px 12px 0 0',
      },
    },
    '& .revealNote': {
      paddingTop: 40,
      textAlign: 'center',
    },
  },
}

export default style
