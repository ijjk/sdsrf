import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import style from '../style/registerStyle'
import MemContent from '../components/MemContent'
import toggleScroll from '../util/toggleScroll'

const formProps = global.netlifyProps || {}
const Field = ({ label, name, placeholder, textarea, noColon }) => {
  const props = {
    name,
    id: name,
    required: true,
    placeholder: placeholder || label,
  }
  return (
    <div className={textarea ? 'txtField' : 'field'}>
      <label htmlFor={name}>
        {label}
        {!noColon ? ':' : ''}
      </label>
      {textarea ? <textarea {...props} /> : <input type="text" {...props} />}
    </div>
  )
}

class Register extends Component {
  componentDidMount() {
    toggleScroll(true)
  }
  componentWillUnmount() {
    toggleScroll()
  }

  render() {
    const { props } = this
    return (
      <MemContent {...props} key="projects">
        <Helmet title={`${props.data.site.siteMetadata.title} - Register`} />
        <div css={style}>
          <div className="memberForm">
            <Link to="/membership">
              <div className="closeBtn">X</div>
            </Link>
            <h5>Membership Sign-Up</h5>
            <p>
              Members of SDS Research Fund are defined as "...individuals who
              have an interest in and support research for a cure to SDS, who
              have joined the Corporation as a member, and who are current in
              their annual dues" per SDS Research Fund Bylaws.
            </p>

            <form name="membership" method="post" {...formProps}>
              <input type="hidden" name="form-name" value="membership" />
              <input type="text" name="somefield" className="somefield" />

              <Field name="firstName" label="First Name" />
              <Field name="lastName" label="Last Name" />
              <Field name="memEmail" label="Email" />
              <Field name="address" label="Address" />
              <Field name="city" label="City" />
              <Field name="state" label="State" />
              <Field
                name="joinReason"
                label="I want to be a Member of SDS Research Fund because..."
                noColon
                textarea
              />
              <p>
                We will process your application as soon as possible and be in
                touch with the next steps on becoming a member. Thank you for
                your interest in joining our mission.
              </p>

              <button type="submit">SUBMIT</button>
            </form>
          </div>
        </div>
      </MemContent>
    )
  }
}
export default Register

export const query = graphql`
  query RegisterQuery {
    site {
      ...SiteTitle
    }
    pillholder: file(relativePath: { eq: "membership/pillholder.jpg" }) {
      ...pillholderImg
    }
  }
`
