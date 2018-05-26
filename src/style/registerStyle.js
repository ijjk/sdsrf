import { colors, button, fadeIn, fonts, media } from '../theme'
import hex2rgba from 'hex2rgba'

const style = {
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 100,
  height: '100%',
  width: '100%',
  background: hex2rgba('#000', 0.55),
  animation: `${fadeIn} 275ms ease-in-out forwards`,

  '& .closeBtn': {
    ...fonts.nunito,
    fontSize: 30,
    position: 'absolute',
    top: 2,
    right: 12,
    cursor: 'pointer',
  },

  '& .memberForm': {
    fontSize: 16,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: 'auto',
    background: '#fff',
    height: '90%',
    maxHeight: 565,
    width: '92%',
    maxWidth: 600,
    zIndex: 102,
    borderRadius: 5,
    overflow: 'auto',

    [media.lessThan(480)]: {
      maxHeight: 650,

      '& .field': {
        width: 250,
        display: 'block',
      },
    },

    '& h5': {
      textAlign: 'center',
      color: colors.semiOrange,
    },

    '& h5, & p': {
      padding: '10px 10px 0',
    },

    '& p': {
      maxWidth: 550,
    },

    '& p, & form': {
      margin: 'auto',
    },

    '& form': {
      width: '94%',
      textAlign: 'left',
    },

    '& .field': {
      width: 'calc(50% - 14px)',
      display: 'inline-block',
    },

    '& .field, & .txtField': {
      margin: '10px 7px 0 7px',

      '& label': {
        ...fonts.nunito,
        float: 'left',
      },
    },

    '& input, & textarea': {
      fontSize: 14,
      width: '98%',
      border: `1px solid ${colors.semiGrey}`,
      borderRadius: 3,
      padding: 4,
      boxShadow: 'none',
      background: 'none',
      color: 'inherit',
    },

    '& .txtField': {
      width: '90%',
      maxWidth: 514,

      '& textarea': {
        width: '100%',
        height: 100,
      },
    },

    '& button': {
      ...button,
      float: 'right',
      padding: '6px 15px',
      margin: '5px 2% 10px 0',
      fontSize: 14,
      background: colors.semiBlue,
      color: '#fff',
    },
  },
}

export default style
