import { boxShadow, media } from '../theme'

const style = {
  padding: '60px 0 50px',
  '& h5:nth-child(1)': {
    paddingBottom: 35,
    textAlign: 'center',
  },
  '& p:nth-child(2)': {
    width: '100%',
    marginBottom: 50,
    textAlign: 'center',
    [media.lessThan(710)]: {
      position: 'relative',
      paddingTop: '56%',
    },
  },
  '& iframe': {
    maxWidth: '100%',
    maxHeight: '100%',
    margin: 'auto',
    display: 'block',
    ...boxShadow(false, false, 1, 10, 16),
    [media.lessThan(710)]: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
    },
  },
  '& ul': {
    paddingTop: 10,
    marginLeft: 20,
    '& li': {
      padding: '4px 0',
    },
  },
  '& li.usage': {
    listStyleType: 'circle',
    marginLeft: 20,
    ':before': {
      content: '"Usage: "',
    },
  },
}

export default style
