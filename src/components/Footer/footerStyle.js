import { colors, media, button } from '../../theme'

const formWidth = {
  width: 'calc(90% + 40px)',
}

const style = {
  background: colors.slate,
  padding: '15px 0',
  color: '#fff',

  '& .discl': {
    fontSize: 14,
    paddingBottom: 25,
    '& *': {
      ...formWidth,
    },
  },

  '& .contact': {
    '& h6': {
      paddingBottom: 10,
      [media.lessThan(745)]: {
        paddingBottom: 0,
      },
    },
    '& div': {
      ...formWidth,
      textAlign: 'right',
      [media.lessThan(745)]: {
        width: 'calc(95% + 16px)',
      },
    },
  },

  '& label': {
    position: 'absolute',
    left: '-300%',
  },

  '& input': {
    width: '45%',
    [media.lessThan(745)]: {
      width: '95%',
      clear: 'left',
      marginTop: 10,
    },
  },

  '& input, & textarea': {
    fontSize: 16,
    color: '#fff',
    padding: 8,
    marginRight: 10,
    border: 'none',
    outline: 0,
    background: colors.slateDarken,
    borderRadius: 4,
    boxShadow: 'none',
    '::placeholder': {
      color: '#fff',
      opacity: 1,
      fontSize: 16,
    },
  },

  '& textarea': {
    height: 100,
    width: 'calc(90% + 26px)',
    marginTop: 10,
    [media.lessThan(745)]: {
      width: '95%',
    },
  },

  '& button': {
    ...button,
    background: colors.semiBlue,
    color: '#fff',
    fontSize: 14,
    marginTop: 10,
    padding: '5px 18px',
  },

  '& .fTxt': {
    fontSize: 15,
    paddingTop: 25,
    [media.lessThan(690)]: {
      textAlign: 'center',
      maxWidth: 300,
      margin: 'auto',
    },
    '& .note': {
      width: '35%',
      paddingLeft: 15,
      display: 'inline-block',
      [media.lessThan(690)]: {
        width: '100%',
        textAlign: 'center',
        padding: 0,
        wordWrap: 'break-word',
      },
    },
    '& .brand': {
      display: 'inline-block',
      textAlign: 'right',
      width: 'calc(65% - 30px)',
      [media.lessThan(690)]: {
        clear: 'both',
        width: '100%',
        textAlign: 'center',
        marginTop: 12,
      },
      '& div:nth-child(2)': {
        [media.lessThan(690)]: {
          clear: 'both',
          marginTop: 12,
          textAlign: 'center',
        },
      },
      '& img': {
        cursor: 'pointer',
        height: 36,
        width: 36,
        margin: '0 3px',
        transition: 'opacity 125ms ease-in-out',
        ':hover': {
          opacity: '0.75',
        },
      },
    },
  },
}

export default style
