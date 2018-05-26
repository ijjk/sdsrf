import React, { Component } from 'react'
import { boxShadow } from '../theme'

class ToTopBtn extends Component {
  state = {
    show: false,
    bottom: 25,
  }

  checkShow = () => {
    const sHeight = document.documentElement.scrollHeight
    if (window.scrollY >= 1080 && !this.state.show)
      this.setState({ show: true })
    else if (this.state.show) {
      if (window.scrollY < 1080) return this.setState({ show: false })
      const byIcons = sHeight - window.innerHeight - 30 <= window.scrollY
      if (window.innerWidth <= 450 && byIcons) this.setState({ bottom: 75 })
      else if (byIcons) this.setState({ bottom: null })
      else this.setState({ bottom: 25 })
    }
  }

  toTop = () => {
    window.scrollTo(0, 0)
  }
  componentDidMount() {
    window.addEventListener('scroll', this.checkShow)
  }
  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) this.checkShow()
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkShow)
  }

  render() {
    const { show, bottom } = this.state
    return (
      <div
        onClick={this.toTop}
        style={{
          display: show ? 'block' : null,
          bottom,
        }}
        css={{
          display: 'none',
          position: 'fixed',
          bottom: 85,
          right: 20,
          zIndex: 50,
          width: 55,
          padding: '3px 0',
          color: '#fff',
          textAlign: 'center',
          borderRadius: 3,
          cursor: 'pointer',
          background: 'rgba(0, 0, 0, 0.7)',
          fontSize: 14,
          transition: 'all 150ms ease-in-out',
          ...boxShadow(),
        }}
      >
        To top
      </div>
    )
  }
}
export default ToTopBtn
