import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ToTopBtn from '../components/ToTopBtn'

import '../global-styles'
import '../style/css/fonts.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
      <html lang="en" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="X-UA-Compatible" content="IE=edge" />
      <meta
        name="title"
        content="Shwachman Diamond Syndrome (SDS) Research Fund"
      />
      <meta
        name="description"
        content="SDS Research Fund is a 501(c)3 nonprofit organization dedicated to empowering families through research for a cure. Our vision is that families of individuals living with Shwachman Diamond Syndrome will experience support and gain hope from their communities through events that boost the funding for research on SDS"
      />
      <meta
        name="keywords"
        content="sds, sdsrf, research, fund, Shwachman, Diamond, Syndrome"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="/icons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Helmet>
    <Header logo={data.logo} />
    <div className="pg">{children()}</div>
    <ToTopBtn />
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  fragment SiteTitle on Site {
    siteMetadata {
      title
    }
  }

  query SiteTitleQuery {
    site {
      ...SiteTitle
    }
  }
`
