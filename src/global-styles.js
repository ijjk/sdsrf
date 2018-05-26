import { css } from 'glamor'
import { colors, fonts, media } from './theme'

css.global('*', {
  padding: 0,
  margin: 0,
})

css.global('html', {
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  background: colors.bodyBg,
  color: colors.bodyFg,
  ...fonts.oxygen,
  fontSize: 18,
})

css.global('html.no-scroll', {
  overflowY: 'hidden',
})

css.global('html, body', {
  height: '100%',
  width: '100%',
})

css.global('a', {
  color: 'inherit',
  textDecoration: 'underline',
})

css.global('textarea', {
  ...fonts.oxygen,
  resize: 'none',
})

css.global('h1,h2,h3,h4,h5,h6', {
  ...fonts.nunito,
})

// setup heading font-sizes
const sizes = [40, 32, 28, 24, 20, 16]
sizes.forEach((fontSize, i) => {
  css.global(`h${i + 1}`, { fontSize })
})

css.global('.somefield', {
  display: 'none',
})

css.global('.pg', {
  minHeight: 'calc(100vh - 100px - 40px)',
})

css.global('.br', {
  marginBottom: 22,
})

css.global('table', {
  margin: '30px 0',
  borderCollapse: 'collapse',
  textAlign: 'center',
  width: '100%',
})

css.global('table th', {
  ...fonts.nunito,
  fontSize: 20,
})

css.global('tr, td, th', {
  border: '1px solid #000',
})

css.global('td, th', {
  padding: '2px 0',
  width: '50%',
})

css.global('.content-full', {
  width: '100%',
})

css.global('.content', {
  width: '80%',
})

css.global('.content-full, .content', {
  display: 'block',
  margin: 'auto',
  clear: 'both',
})

css.insert(
  `${media.greaterThan(
    1440
  )}{.content-full{width: 1440px}.content{width: 1280px}}`
)
