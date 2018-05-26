import React, { Component } from 'react'
import Img from 'gatsby-image'
import envelope from '../../imgs/board/envelope.svg'
import rehypeReact from 'rehype-react'
import style, { fadeLen } from './boardMemsStyle'

const parseSizes = (edges, src) => {
  return edges
    .filter(({ node }) => node.relativePath.split('/').pop() === src)
    .pop().node.childImageSharp.sizes
}

class BoardMems extends Component {
  state = {
    active: 1,
    fadeOut: -1,
  }
  handleClick = e => {
    const { active } = this.state
    const pending = parseInt(e.currentTarget.id, 10)
    if (active === pending) return
    this.setState({ fadeOut: active, active: -1 })
    setTimeout(() => {
      this.setState({
        fadeOut: -1,
        active: pending,
      })
    }, fadeLen)
  }

  render() {
    const { active, fadeOut } = this.state
    const { markdownRemark, profileImgs, familyImgs } = this.props
    const { htmlAst } = markdownRemark
    let mIdx = 0,
      bIdx = 0
    const Member = ({ profile, name, role, email }) => {
      const sizes = parseSizes(profileImgs.edges, profile)
      mIdx++
      return (
        <div
          key={`profile-${name}`}
          id={mIdx}
          className="profile"
          onClick={this.handleClick}
        >
          <Img {...{ sizes }} className="Img" key={`profileImg-${name}`} />
          <div className="info">
            <h6>{name}</h6>
            <p>{role}</p>
            <a href={`mailto:${email}@sdsresearchfund.org`}>
              <img src={envelope} alt="envelope icon" />
            </a>
          </div>
        </div>
      )
    }
    const Blurb = ({ family, name, children }) => {
      const sizes = parseSizes(familyImgs.edges, family)
      let className = 'blurb'
      bIdx++
      if (bIdx === active) className += ' active'
      else if (bIdx === fadeOut) className += ' fadeOut'

      return (
        <div key={`blurb-${name}`} {...{ className }}>
          <Img {...{ sizes }} className="Img" key={`familyImg-${name}`} />
          <p>{children}</p>
        </div>
      )
    }
    const renderAst = new rehypeReact({
      createElement: React.createElement,
      components: {
        member: Member,
        blurb: Blurb,
      },
    }).Compiler

    return (
      <div className="BoardMems content" css={style}>
        {renderAst(htmlAst)}
      </div>
    )
  }
}

export default BoardMems
