import React from 'react'
import { css } from 'glamor'
import { media } from '../theme'
import Img from 'gatsby-image'
import Link from 'gatsby-link'

const vAlign = {
  display: 'inline-block',
  verticalAlign: 'middle',
}
const resetOnLess1080 = {
  display: 'block',
  width: '100%',
  textAlign: 'left',
}
const MemContent = ({ data, children }) => (
  <div
    className="content"
    css={{
      padding: '40px 0',
    }}
  >
    {children}
    <div
      css={{
        textAlign: 'center',
      }}
    >
      <div
        css={{
          ...vAlign,
          textAlign: 'left',
          width: '70%',
          [media.lessThan(1080)]: resetOnLess1080,
        }}
      >
        <h5 className="br">Membership</h5>
        <p>
          SDS Research Fund is member driven and operates under a true voting
          membership.
        </p>
        <p className="br">2018 Membership dues: $10/person</p>
        <p>Members have voting privileges to elect the Board of Directors.</p>
        <p>
          Each Member will receive a pill holder keychain as a welcome gift.
        </p>
        <div
          css={{
            padding: '22px 0',
            [media.lessThan(1080)]: {
              display: 'none',
            },
          }}
        >
          <p>Question: Who can be a member?</p>
          <p>Answer: You!</p>
        </div>
      </div>

      <div
        css={{
          ...vAlign,
          maxHeight: 275,
          width: '30%',
          textAlign: 'right',
          paddingBottom: 22,
          [media.lessThan(1080)]: {
            ...resetOnLess1080,
            paddingTop: 10,
            height: 'auto',
          },
        }}
      >
        <Img
          resolutions={data.pillholder.childImageSharp.resolutions}
          alt="SDSRF pillholder keychain"
          style={{ maxWidth: '100%' }}
          outerWrapperClassName={css({
            maxWidth: '100%',
            maxHeight: 225,
          })}
          key="pillholderImg"
        />
      </div>
    </div>

    <div
      css={{
        display: 'none',
        paddingBottom: 22,
        [media.lessThan(1080)]: {
          display: 'block',
        },
      }}
    >
      <p>Question: Who can be a member?</p>
      <p>Answer: You!</p>
    </div>

    <p className="br">
      Members are parents of children with SDS, grandparents, patients, friends,
      and more! Members of SDS Research Fund are individuals who have an
      interest in and support research for a cure to SDS, who have joined SDSRF
      as a Member, and who are current in their annual dues.
    </p>
    <p className="br">
      To join SDS Research Fund in the mission to empower families through
      research for a cure, complete and submit your application for membership
      today (applications are short and take about two minutes to complete). All
      applications for membership are subject to the approval of the Board.
    </p>
    <p className="br">
      <Link to="/register" className="showMemForm">
        Click here to become a member!
      </Link>
    </p>
    <p>
      Se habla español. Envíanos un correo electrónico a{' '}
      <a href="mailto:contactenos@sdsresearchfund.org">
        contactenos@sdsresearchfund.org.
      </a>
    </p>
  </div>
)

export default MemContent
