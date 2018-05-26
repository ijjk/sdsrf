import { colors, fonts, boxShadow, media } from '../theme'

const style = {
  padding: '30px 0',
  '& .sidebar': {
    width: '15%',
    maxWidth: 225,
    padding: '35px 3px',
    verticalAlign: 'top',
    display: 'inline-block',
    [media.lessThan(815)]: {
      display: 'block',
      marginLeft: '5%',
      width: '90%',
      padding: '20px 0',
    },
    '& h5': {
      ...fonts.cormorant,
      borderBottom: `1px solid ${colors.semiGrey}`,
    },
    '& ul': {
      listStyle: 'none',
      fontSize: 14,
      '& li': {
        width: '100%',
        padding: '3px 0',
        color: colors.semiOrange,
        borderBottom: `1px dashed ${colors.semiGrey}`,
        '& a': {
          textDecoration: 'none',
        },
      },
    },
  },
  '& .post': {
    width: '75%',
    marginLeft: '3%',
    marginRight: '2%',
    display: 'inline-block',
    [media.lessThan(815)]: {
      width: '90%',
    },
    [media.lessThan(500)]: {
      '& .Img': {
        display: 'block',
        width: '80%',
        maxWidth: 250,
        maxHeight: 350,
        margin: '4px auto 18px',
        float: 'none',
      },
      '& .mainImg': {
        margin: '0 0 15px',
      },
      '& .wrapCenter, & .aboutAuth': {
        '& .Img': {
          float: 'left',
        },
      },
      '& .aboutAuth .Img': {
        maxWidth: 75,
        height: 100,
        margin: '4px 12px 4px 4px',
      },
    },
  },
  '& .title': {
    color: colors.semiOrange,
  },
  '& .date': {
    color: colors.slate,
    lineHeight: 1,
    fontSize: 13,
    padding: '0 0 15px',
  },
  '& .Img': {
    float: 'left',
    width: '100%',
    marginTop: 11,
    marginRight: 15,
    '&, & img': {
      maxWidth: 250,
      maxHeight: 350,
    },
  },
  '& .mainImg': {
    margin: '5px 15px 5px 0',
    overflow: 'hidden',
  },
  '& p': {
    paddingBottom: 14,
  },
  '& blockquote': {
    float: 'right',
    width: '50%',
    maxWidth: 375,
    padding: '8px 0 8px 20px',
    margin: '-5px 5px 10px',
    borderLeft: `3px solid ${colors.semiGrey}`,
    ...fonts.cormorant,
    fontStyle: 'italic',
    fontWeight: 700,
    fontSize: 20,
    [media.lessThan(650)]: {
      float: 'none',
      maxWidth: '90%',
      width: '90%',
      marginTop: 10,
    },
    '& hr': {
      visibility: 'hidden',
      height: 16,
    },
  },
  '& .wrapCenter': {
    width: '100%',
    clear: 'both',
    paddingBottom: 14,
    '& p, & .Img': {
      float: 'none',
      padding: 0,
      marginRight: '5%',
      display: 'inline-block',
      verticalAlign: 'middle',
    },
  },
  '& .aboutAuth': {
    width: '90%',
    maxWidth: 500,
    textAlign: 'left',
    background: '#fff',
    overflow: 'hidden',
    padding: '0 5px 0 0',
    borderRadius: 3,
    paddingBottom: 8,
    margin: '19px auto 15px',
    ...boxShadow(),
    '& .Img': {
      height: 100,
      maxWidth: 75,
      margin: '8px 12px 4px 8px',
      '& img': {
        maxHeight: 100,
      },
    },
    '& h6': {
      lineHeight: 1.2,
      padding: '8px 8px 0',
    },
    '& p': {
      padding: '0 8px',
      fontSize: 14,
    },
  },
}

export default style
