import { colors, button } from '../theme'

const style = {
  padding: '30px 0',
  '& h5:nth-child(1)': {
    paddingTop: 30,
    textAlign: 'center',
  },
  '& .notice': {
    fontSize: 13,
    fontStyle: 'italic',
    paddingBottom: 40,
    '& ~ h5': {
      display: 'inline-block',
    },
  },
  '& .paypal': {
    padding: '70px 0 60px',
    textAlign: 'center',
    '& button': {
      ...button,
      padding: '30px 25px',
      borderRadius: 40,
      fontSize: 26,
      background: colors.paypalYellow,
      color: '#000',
      margin: '0 auto 20px',
    },
    '& img': {
      background: colors.bodyBg,
    },
  },
  '& .memo': {
    padding: '20px 0',
    maxWidth: 450,
    margin: 'auto',
  },
}

export default style
