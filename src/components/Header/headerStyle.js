import { colors, button, fonts, fadeIn, media } from '../../theme'

const horizPad = 15
const style = {
  ...fonts.nunito,
  height: 80,
  width: '100%',
  padding: '10px 0',

  '& img': {
    height: '100%',
    marginLeft: horizPad,
    display: 'inline-block',
  },

  '& input': {
    display: 'none',
    pointerEvents: 'none',
    ':checked ~ label .burger div': {
      ':nth-child(1)': {
        transformOrigin: 'center',
        transform: 'translateY(10px) rotate(45deg)',
      },
      ':nth-child(2)': {
        opacity: 0,
      },
      ':nth-child(3)': {
        transformOrigin: 'left -6px',
        transform: 'translateY(8.25px) rotate(-44deg)',
      },
    },
    ':checked ~ ul': {
      height: 'calc(100% - 100px)',
      overflow: 'auto',
      textAlign: 'center',
      '@keyframes fadeIn': {
        from: {
          opacity: 0,
        },
        to: {
          opacity: 1,
        },
      },
      animation: `${fadeIn} 175ms ease-in-out forwards`,
    },
  },

  '& .burger': {
    width: 40,
    margin: `24px ${horizPad + 10}px 24px 0`,
    float: 'right',
    [media.greaterThan(825)]: {
      display: 'none',
    },
    '& div': {
      width: '100%',
      height: 4,
      margin: '5px 0',
      borderRadius: 2,
      background: colors.semiOrange,
      transition: 'all ease-in-out 135ms',
    },
  },

  '& ul': {
    [media.lessThan(824)]: {
      background: colors.bodyBg,
      position: 'fixed',
      top: 100,
      height: 0,
      width: '100%',
      zIndex: 100,
      overflow: 'hidden',
      padding: 0,
    },

    [media.greaterThan(825)]: {
      float: 'right',
      height: 85,
      marginRight: horizPad,
      listStyle: 'none',
    },
  },

  '& ul li': {
    [media.lessThan(824)]: {
      width: '100%',
      borderBottom: `1px solid ${colors.semiGrey}`,
      ':last-child': {
        borderBottom: 'none',
      },
    },
    [media.greaterThan(825)]: {
      display: 'inline-block',
      verticalAlign: 'middle',
      margin: '0 8px',
    },
    // donate button
    ':last-child a': {
      [media.lessThan(824)]: {
        marginTop: 8,
      },
      ...button,
      display: 'inline-block',
      padding: '5px 15px',
      background: colors.semiOrange + ' !important',
      color: '#fff',
      borderRadius: 4,
      ':before': {
        width: 0,
      },
    },
    '& a': {
      textDecoration: 'none',
      [media.lessThan(824)]: {
        padding: '6px 0',
        display: 'block',
      },
      [media.greaterThan(825)]: {
        position: 'relative',
        ':before': {
          content: '""',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: 6,
          height: 3,
          width: '100%',
          background: colors.semiOrange,
          visibility: 'hidden',
          transform: 'scaleX(0)',
          transition: 'all 200ms ease',
        },
      },
      '&:hover, &.active': {
        [media.lessThan(824)]: {
          background: colors.faintGrey,
        },
        ':before': {
          visibility: 'visible',
          transform: 'scaleX(1)',
        },
      },
    },
    '&.fill': {
      height: 0,
      [media.greaterThan(825)]: {
        height: '100%',
        width: 1,
        display: 'inline-block',
        verticalAlign: 'middle',
      },
    },
  },
}

export default style
