import { colors } from '../theme'

const style = {
  padding: '30px 0 50px',
  '& .disclaimer': {
    fontSize: 15,
  },
  '& .featured': {
    padding: '10px 0',
    border: `1px solid ${colors.semiGrey}`,
    borderRadius: 3,
    maxWidth: 650,
    margin: '20px auto',
    '& h4': {
      textAlign: 'center',
      padding: '0 10px',
    },
    '& p': {
      padding: 16,
      marginTop: 20,
      '& a': {
        color: colors.slate,
      },
    },
    '& .thumb': {
      marginTop: 20,
      textAlign: 'center',
      '& .img': {
        maxHeight: 450,
        maxWidth: 350,
        width: '45%',
        margin: '1%',
        display: 'inline-block',
      },
    },
  },
  '& h5': {
    paddingTop: 20,
    '& ~ p': {
      paddingBottom: 5,
    },
  },
  '& ul': {
    width: 'calc(100% - 30px)',
    marginLeft: 30,
    '& li': {
      padding: '4px 0',
    },
  },
}

export default style
